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
            authToken: response.data.login.authToken,
            refreshToken: response.data.login.refreshToken,
        })
        console.log("login setUser fired")
    }
    const logout = () => {
        setUser({})
        console.log("logout setUser fired")
    }

    return (
    <UserContext.Provider value={{ user,  login, logout }}>
        {children}
    </UserContext.Provider>
  )
}

