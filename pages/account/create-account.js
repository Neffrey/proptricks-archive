// Framework
import React, { useState } from 'react'

// MUI
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// GQL
import { useMutation } from '@apollo/client'
import { SEND_PASSWORD_RESET_EMAIL } from '../../gql/sendPasswordResetEmail'

// My Components


// Functional Component
const createAccount = () => {
    // GQL
    const [ sendPasswordResetMutation ] = useMutation(SEND_PASSWORD_RESET_EMAIL)

    // States
    const [ userInput, setUser ] = useState("")
    const [ submitted, setSubmitted ] = useState(false)

    // Validate before submit
    function validateForm() {
        return userInput.length > 0
    }

    // Handlers
    const handleSubmit = event => {
        console.log("User =", userInput)
        // Prevent Default
        event.preventDefault()
        
        // Send Mutation
        sendPasswordResetMutation({ variables: { username: userInput }})

        // Set Submitted state
        setSubmitted(true)
    }


    // Render
    if( !submitted ) {
        return (
            <Container maxWidth="sm">
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">Reset your password here</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="user"
                            label="Username or Email"
                            value={userInput}
                            onChange={ e => setUser(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button  
                            color="primary" 
                            variant="contained"
                            disabled={ !validateForm() } 
                            onClick={ handleSubmit }
                            size="large"
                        >
                            Send Reset Email
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
    else {
        return (
            <Container maxWidth="sm">
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">Your password reset email has been sent!</Typography>
                        <Typography variant="h5">Please check your email, it may have gone to spam.</Typography>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default createAccount