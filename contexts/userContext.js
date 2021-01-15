// Framework
import React, { createContext, useState } from 'react'


export const UserContext = createContext({})


export const UserContextProvider = ({children}) => {
    const [ user, setUser ] = useState({})
    const login = response => {
        setUser({
            username: response.data.login.user.username,
            firstname: response.data.login.user.firstname,
            email: response.data.login.user.email,
        })
        console.log("login Context fired")
    }
    const logout = () => {
        setUser({})
        console.log("logout Context fired")
    }
    const refreshToken = () => {
        console.log("refreshToken Context fired")
    }
    return (
    <UserContext.Provider value={{ user,  login, logout, refreshToken }}>
        {children}
    </UserContext.Provider>
  )
}

