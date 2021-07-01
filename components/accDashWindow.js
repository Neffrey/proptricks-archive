// Framework
import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'

// Context
import { UserContext, userStore, refreshKey, userAuthenticated } from '../contexts/userContext'

// Lib Components
import { Button, Checkbox, Container, FormControlLabel, Grid, MenuItem, MenuList, Paper, TextField, Typography } from '@material-ui/core/'
import { ChromePicker } from 'react-color'

// My Components
import TokensModal from '../components/tokensModal'
import AccDashProfile from './accDashProfile'
import AccDashMyTricks from './accDashMyTricks'
import AccDashSavedTricks from './accDashSavedTricks'

// Functional Component
const accDashWindow = ({ view }) => {

    const handleAddTrick = () => {

    }

    // Render Switch
    switch( view ) {
        case "profile":   
            return(
                <Grid container spacing={2} alignItems="left" justify="left">
                    <Grid item xs={12}>
                        <AccDashProfile />
                    </Grid>
                </Grid>
            )
        case "myTricks":
            return(
                <Grid container spacing={2} alignItems="left" justify="left">
                    <Grid item xs={12}>
                        <AccDashMyTricks />
                    </Grid>
                </Grid>
            )
        case "savedTricks":
            return(
                <Grid container spacing={2} alignItems="left" justify="left">
                    <Grid item xs={12}>
                        <AccDashSavedTricks />
                    </Grid>
                </Grid>
            )
    }
}
export default accDashWindow