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
import { authKey,refreshKey } from '../lib/keys'



// Provider Component
export const AuthContextProvider = ({ children }) => {
    // Router
    const router = useRouter()  

    // GQL
    const [ refreshTokenMutation ] = useMutation( REFRESH_TOKENS )

    // State Vars
    const [ currentAuth, setCurrentAuth ] = useState("")
    const [ currentRefresh, setCurrentRefresh ] = useState("")



    // Context Actions
    /***************************
     *  USER AUTHENTICATED NOTES
     */

    // During login => setState of currentAuth & currentRefresh
    // If setState does not exist && localstore refresh exists => refreshToken GQL & setState currentTokens

    const userAuthenticated = () => {
        if ( !currentAuth && authStore.get( 'refresh' )) {
                refreshToken()
                console.log("UAuth if !currentAuth && get refresh")
                return true
        }

        else if ( currentAuth && authStore.get( 'authTimer' ) ) {
            // Check if refresh is needed
            if ( authStore.get( 'refresh' ) && Date.now() > new Date( authStore.get( 'authTimer' ))) {
                refreshToken()
                console.log("UAuth currentAuth timer flag")
            }
            console.log("UAuth currentAuth is good")
            return true
        }
        else {
            console.log("UserAuth Failed")
            return false
        }

    }


    // Set Refresh Timer
    const createTimer = time => {
        const timerMinutes = 3
        time = new Date( time )
        return new Date( time.setMinutes( time.getMinutes() + timerMinutes ))
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
                setCurrentRefresh( resolve.data.login.refreshToken )
                if(remember) {
                    console.log( "Remember Yes" )
                    authStore.set( 'refresh', encrypt( resolve.data.login.refreshToken, refreshKey ))
                }
                console.log( "Login Mutation" )
            },
            // Todo handle error
            error => console.log(error)
        )


        // Set Timestamps
        // Last Login
        if ( authStore.get( 'sessionStart' )) {
            authStore.set( 'previousSessionStart', authStore.get( 'sessionStart' ))
        }
        // Session Start
        authStore.set( 'sessionStart', new Date() )
        // authTimer
        authStore.set( 'authTimer', createTimer( authStore.get( 'sessionStart' )))



        // End Login
        console.log("LOGIN FIRED")
        router.push('/account')
    }


    // RefreshToken
    const refreshToken = () => {
        // Token Var
        let token = ""

        // Check for RefreshToken
        if ( currentRefresh ) { token = currentRefresh }
        else if ( authStore.get( 'refresh' )) { token = decrypt( authStore.get( 'refresh' ), refreshKey ) }

        // send mutation if a key exists
        if ( token ) {
            refreshTokenMutation({ variables: { jwtRefreshToken: token }}).then(
                resolve => {
                    // Store Auth tokens
                    setCurrentAuth( resolve.data.refreshJwtAuthToken.authToken )
                    authStore.set( 'auth', encrypt( resolve.data.refreshJwtAuthToken.authToken, authKey ))
                    authStore.set( 'authTimer', createTimer( new Date() ))
                    console.log( "RefreshMutationPromise" )
                },
                // Todo handle error
                error => console.log(error)

            )
        }
        else console.log("no refresh token found")
        console.log("REFRESH TOKEN FIRED")
    }


    // Logout Func
    const logout = () => {
        authStore.clearAll()
        setCurrentAuth("")
        setCurrentRefresh("")
        console.log("LOGOUT FIRED")
        //router.push('/login')
    }



    // Render 
    return (
        <AuthContext.Provider value={{ login, logout, refreshToken, userAuthenticated, currentAuth, currentRefresh }}>
            {children}
        </AuthContext.Provider>
    )
}

