// Framework
import React, { useContext } from 'react'

// MUI
import { Box } from '@material-ui/core/'
import { makeStyles, useTheme } from "@material-ui/core/styles"


// Component Function
const bodyBox = ({ children }) => {
    // Styles
    const theme = useTheme()
    const useStyles = makeStyles({
        bg: {
            background: theme.palette.background.default,
            padding:20
        },
    })
    const classes = useStyles()

    // Component Render
    return (
        <Box className={ classes.bg } >
            { children }
        </Box >
    )
}
export default bodyBox
