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
import TokensModal from './tokensModal'


// Functional Component
const accDashProfile = () => {
    
    // Render Component
    return(
        <Grid container spacing={2} alignItems="left" justify="left">
            <Grid item xs={12}>
                <Paper>
                    <Typography variant="h2">MY PROFILE</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}
export default accDashProfile