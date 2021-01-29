// Framework
import React, { createContext, useState } from 'react'

// MUI
import { CssBaseline } from '@material-ui/core/'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'



export const ThemeContext = createContext({})

const defaultTheme = {
  palette: {
    type: 'dark' 
  }
}


const Themer = ({ children }) => {
  // State Vars
  const [ theme, setTheme ] = useState( createMuiTheme( defaultTheme ) )
  const [ darkMode, setDarkMode ] = useState( false )
  const [ paletteOverwrites, setPaletteOverwrites ] = useState({ })
  const [ typographyOverwrites, setTypographyOverwrites ] = useState({ })

  const customTheme = themeOptions => {
    setTheme(
      responsiveFontSizes(
        createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          ...paletteOverwrites,
        },
        typography: {
          ...typographyOverwrites,
        }})
      )
    )
  } 


  return (
    <ThemeContext.Provider value={{ darkMode, paletteOverwrites, typographyOverwrites, customTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
export default Themer