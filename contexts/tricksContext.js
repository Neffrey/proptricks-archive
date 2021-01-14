// Framework
import React, { createContext, useState } from 'react'


export const TricksContext = createContext({});

export const TricksContextProvider = ({children}) => {
    const [ tricks, setTricks ] = useState({})
    const setTricksContext = data => {
        setTricks(data)
    }
    

    return (
    <TricksContext.Provider value={{ tricks, setTricksContext }}>
        {children}
    </TricksContext.Provider>
  )
}

