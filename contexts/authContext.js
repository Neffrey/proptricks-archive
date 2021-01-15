// Framework
import React, { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import { encrypt, decrypt } from '../lib/crypto'


// Exported Objects
export const authStore = require('store')
export const AuthContext = createContext({})


const authKey = "B?E(H+MbQeShVmYq3t6w9z$C&F)J@NcR"
const refreshKey = "B?E(H+MbQeShVmYq3t6w9z$C&F)J@NcR"





// Provider Component
export const AuthContextProvider = ({children}) => {
    // Router
    const router = useRouter()  

    // Context Actions
    const login = response => {
        
        // Store tokens before encryption for testing
        authStore.set('auth', response.data.login.authToken, authKey)
        authStore.set('refresh', response.data.login.refreshToken, refreshKey)

        // Store encrypted Tokens
        //authStore.set('authEncrypted', encrypt(JSON.stringify(response.data.login.refreshToken), authKey))
        //authStore.set('refreshEn crypted', encrypt(JSON.stringify(response.data.login.refreshToken), refreshKey))

        // Store decrypted tokens
        //authStore.set('authDecrypted', decrypt(JSON.stringify(authStore.get('auth')), refreshKey))
        //authStore.set('refreshDecrypted', decrypt(JSON.stringify(authStore.get('refresh')), refreshKey))



        console.log("LOGIN FIRED")
        router.push('/account')
    }
    const logout = () => {
        authStore.clearAll()
        console.log("LOGOUT FIRED")
        router.push('/login')
    }
    const refreshToken = () => {
        console.log("REFRESH TOKEN FIRED")
    }

    // Render
    return (
    <AuthContext.Provider value={{ login, logout, refreshToken }}>
        {children}
    </AuthContext.Provider>
  )
}

