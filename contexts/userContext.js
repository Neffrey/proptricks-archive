// Framework
import React, { createContext, useState } from 'react'

//export var userStorage = window.localStorage

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
    const [ user, setUser ] = useState({})
    const login = response => {
        window.localStorage.setItem('auth', response.data.login.authToken,)
        window.localStorage.setItem('refresh', response.data.login.refreshToken,)
        setUser({
            username: response.data.login.user.username,
            firstname: response.data.login.user.firstname,
            email: response.data.login.user.email,
            authToken: response.data.login.authToken,
            refreshToken: response.data.login.refreshToken,
        })
        console.log("login setUser fired")
    }
    const logout = () => {
        setUser({})
        window.localStorage.removeItem('auth', response.data.login.authToken,)
        window.localStorage.removeItem('refresh', response.data.login.refreshToken,)
        console.log("logout setUser fired")
    }
    const refreshToken = () => {
        console.log("refreshToken fired")
    }
    return (
    <UserContext.Provider value={{ user,  login, logout, refreshToken }}>
        {children}
    </UserContext.Provider>
  )
}

