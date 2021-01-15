// Framework
import React, { createContext, useState } from 'react'


export const AuthContext = createContext({})

export const authStore = require('store')


export const AuthContextProvider = ({children}) => {
    const login = response => {
        authStore.set('auth', response.data.login.authToken,)
        authStore.set('refresh', response.data.login.refreshToken,)
        console.log("Auth Login fired")
    }
    const logout = () => {
        setUser({})
        authStore.remove('auth')
        authStore.remove('refresh')
        console.log("Auth Logout fired")
    }
    const refreshToken = () => {
        console.log("Auth Refresh Token fired")
    }
    return (
    <AuthContext.Provider value={{ login, logout, refreshToken }}>
        {children}
    </AuthContext.Provider>
  )
}

