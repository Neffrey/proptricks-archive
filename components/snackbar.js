// Framework
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// MUI
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, Snackbar, TextField, Typography } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// My Components
import Alert from "./alert"

// Component
const snackbar = ({ message, type }) => {
    // Default State
    const [ state, setState ] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    })
    const { vertical, horizontal, open } = state

    // Handlers
    const handleClick = (newState) => () => {
        setState({ open: true, ...newState })
    }
    
    const handleClose = () => {
        setState({ ...state, open: false })
    }
    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert  onClose={handleClose} severity={type}>
                <Typography variant="h5">{ message }</Typography>
            </Alert>
        </Snackbar>
    )
}
export default snackbar