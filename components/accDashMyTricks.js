// Framework
import React, { useContext, useState } from 'react'
import Link from 'next/link'

// GQL
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
const accDashMyTricks = () => {

    const handleAddTrick = () => {

    }
    
    // Render Component
    return(
        <Grid container spacing={2} alignItems="left" justify="left">
            <Grid item xs={12}>
                <Paper>
                    <Typography variant="h2">MY TRICKS</Typography>
                    <Grid container spacing={2} alignItems="right" justify="right">
                        <Grid item xs={6}>
                            <Link href="/add-trick" passHref>
                                <Button 
                                    color="secondary" 
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                >
                                    Add Trick
                                </Button>
                            </Link> 
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}
export default accDashMyTricks