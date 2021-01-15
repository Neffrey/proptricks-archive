// Framework
import React, { createContext, useState } from 'react'



// Store & Context Instances
export const authStore = require('store')
export const AuthContext = createContext({})


// User Auth Flag
export const userAuthenticated = () => {
    
}


// Component Function
export const AuthContextProvider = ({children}) => {

    // Context Actions
    const login = response => {
        authStore.set('auth', response.data.login.authToken,)
        authStore.set('refresh', response.data.login.refreshToken,)
        console.log("Auth Login fired")
    }
    const logout = () => {
        authStore.clearAll()
        console.log("Auth Logout fired")
    }
    const refreshToken = () => {
        console.log("Auth Refresh Token fired")
    }

    // Render
    return (
    <AuthContext.Provider value={{ login, logout, refreshToken }}>
        {children}
    </AuthContext.Provider>
  )
}

