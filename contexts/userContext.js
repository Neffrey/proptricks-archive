// Framework
import React, { createContext, useState } from 'react'
import { useRouter } from 'next/router'


// GQL
import { useMutation } from '@apollo/client'
import { REFRESH_TOKENS } from '../gql/refreshTokens'

// Exported Objects
export const userStore = require('store')
export const UserContext = createContext({})



// Provider Component
const userContextProvider = ({ children }) => {
    // Router
    const router = useRouter()  

    // GQL
    const [ refreshTokenMutation ] = useMutation( REFRESH_TOKENS )

    // Auth State Vars
    const [ currentAuth, setCurrentAuth ] = useState("")
    const [ currentRefresh, setCurrentRefresh ] = useState("")

    // User S



    // Context Actions
    /***************************
     *  USER AUTHENTICATED NOTES
     */

    // During login => setState of currentAuth & currentRefresh
    // If setState does not exist && localstore refresh exists => refreshToken GQL & setState currentTokens

    const userAuthenticated = () => {
        if ( !currentAuth && userStore.get( 'refresh' )) {
                refreshToken()
                console.log("UAuth if !currentAuth && get refresh")
                return true
        }

        else if ( currentAuth && userStore.get( 'authTimer' ) ) {
            // Check if refresh is needed
            if ( userStore.get( 'refresh' ) && Date.now() > new Date( userStore.get( 'authTimer' ))) {
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
        
        console.log('mutationPromise',mutationPromise)
        mutationPromise.then(
            resolve => {
                // Store Auth tokens
                setCurrentAuth( resolve.data.login.authToken )
                userStore.set( 'auth', resolve.data.login.authToken )


                // Store Refresh
                setCurrentRefresh( resolve.data.login.refreshToken )
                if(remember) {
                    console.log( "Remember Yes" )
                    userStore.set( 'refresh', resolve.data.login.refreshToken )
                }
                console.log( "Login Mutation" )
            },
            // Todo handle error
            error => console.log(error)
        )


        // Set Timestamps
        // Last Login
        if ( userStore.get( 'sessionStart' )) {
            userStore.set( 'previousSessionStart', userStore.get( 'sessionStart' ))
        }
        // Session Start
        userStore.set( 'sessionStart', new Date() )
        // authTimer
        userStore.set( 'authTimer', createTimer( userStore.get( 'sessionStart' )))



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
        else if ( userStore.get( 'refresh' )) { token = userStore.get( 'refresh' )}

        // send mutation if a key exists
        if ( token ) {
            refreshTokenMutation({ variables: { jwtRefreshToken: token }}).then(
                resolve => {
                    // Store Auth tokens
                    setCurrentAuth( resolve.data.refreshJwtAuthToken.authToken )
                    userStore.set( 'auth', resolve.data.refreshJwtAuthToken.authToken )
                    userStore.set( 'authTimer', createTimer( new Date() ))
                },
                // Todo handle error
                error => console.log(error)

            )
        }
        else {
            console.log("no refresh token found")
            router.push('/login')
        }
        console.log("REFRESH TOKEN FIRED")
    }


    // Logout Func
    const logout = () => {
        userStore.clearAll()
        setCurrentAuth("")
        setCurrentRefresh("")
        console.log("LOGOUT FIRED")
        router.push('/login')
    }



    // Render 
    return (
        <UserContext.Provider value={{ login, logout, refreshToken, userAuthenticated, currentAuth, currentRefresh }}>
            {children}
        </UserContext.Provider>
    )
}
export default userContextProvider