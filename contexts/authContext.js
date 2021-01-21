// Framework
import React, { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import { encrypt, decrypt } from '../lib/crypto'


// GQL
import { useMutation } from '@apollo/client'
import { REFRESH_TOKENS } from '../gql/refreshTokens'

// Exported Objects
export const authStore = require('store')
export const AuthContext = createContext({})

// Keys
export const authKey =    "B?E(H+MbQeShVmYq3t6w9z$C&F)J@NcR"
export const refreshKey = "NT2LfIHVxSH4y9z$C&F)J@Yq3t6w9oPS"



// Provider Component
export const AuthContextProvider = ({ children }) => {
    // Router
    const router = useRouter()  

    // GQL
    const [ refreshTokensMutation ] = useMutation( REFRESH_TOKENS )

    // State Vars
    const [ currentAuth, setCurrentAuth ] = useState("")
    const [ currentRefresh, setCurrentRefresh ] = useState("")
    const [ currentSeshLoginTime, setCurrentSeshLoginTime ] = useState( new Date() )
    const [ authTime, setAuthTime ] = useState( new Date() )
    
    // Timestamp Vars
    const timerMinutes = 3


    // Context Actions
    /***************************
     *  USER AUTHENTICATED NOTES
     */

    // During login => setState of currentAuth & currentRefresh
    // If setState does not exist && localstore refresh exists => refreshToken GQL & setState currentTokens

    const userAuthenticated = () => {
        if ( currentAuth ) {
            // Check if refresh is needed
            if ( Date.now() > authTime ) {
                // Renew Auth Token 
                refreshTokens()
                // setAuthTimer
            }
            return currentAuth
        }
        else if ( !currentAuth ) {

        }
    }


    // Set Refresh Timer
    const setRefreshTimer = lastRefresh => {
        new Date( lastRefresh.setMinutes( lastRefresh.getMinutes() + timerMinutes ))
    }



    // Login Func
    const login = ( mutationPromise, remember ) => {
        
        // Handle Mutaion Results
        
        mutationPromise.then(
            resolve => {
                // Store Auth tokens
                setCurrentAuth( resolve.data.login.authToken )
                authStore.set( 'auth', encrypt( resolve.data.login.authToken, authKey ))


                // Store Refresh
                setCurrentRefresh(resolve.data.login.refreshToken)
                if(remember) {
                    console.log("Remember Yes")
                    authStore.set( 'refresh', encrypt( resolve.data.login.refreshToken, refreshKey ))
                }
                console.log("Login Mutation")
            },
            // Todo handle error
            error => console.log(error)
        )


        // Set Timestamps
        authStore.set( 'sessionStartTime', currentSeshLoginTime )
        setAuthTime( setRefreshTimer( currentSeshLoginTime ))
        authStore.set( 'authTime', setRefreshTimer( currentSeshLoginTime ))



        // End Login
        console.log("LOGIN FIRED")
        router.push('/account')
    }

    // Logout Func
    const logout = () => {
        authStore.clearAll()
        setCurrentAuth("")
        setCurrentRefresh("")
        console.log("LOGOUT FIRED")
        //router.push('/login')
    }


    // RefreshToken
    const refreshTokens = () => {
        // Token Var
        let token = ""

        // Check for RefreshToken
        if ( currentRefresh ) { token = currentRefresh }
        else if ( authStore.get( 'refresh' )) { token = decrypt( authStore.get( 'refresh' ), refreshKey ) }

        // send mutation if a key exists
        if ( token ) {
            refreshTokensMutation({ variables: { jwtRefreshToken: token }}).then(
                resolve => {
                    // Store Auth tokens
                    setCurrentAuth( resolve.data.refreshJwtAuthToken.authToken )
                    authStore.set( 'auth', encrypt( resolve.data.refreshJwtAuthToken.authToken, authKey ))
                    console.log( "RefreshMutationPromise" )
                },
                // Todo handle error
                error => console.log(error)

            )
        }
        else console.log("no refresh token found")
        console.log("REFRESH TOKEN FIRED")
    }

    // Render 
    return (
        <AuthContext.Provider value={{ login, logout, refreshTokens, userAuthenticated, currentAuth, currentRefresh, authTime }}>
            {children}
        </AuthContext.Provider>
    )
}

