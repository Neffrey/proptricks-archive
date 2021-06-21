// Framework
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// MUI
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// GQL
import { useMutation } from '@apollo/client'
import { RESET_USER_PASSWORD } from '../../../gql/resetUserPassword'

// My Components
import Snackbar from '../../../components/snackbar'

// Component
const ResetPassword = () => {
    // Router
    let login = ""
    let key = ""
    const router = useRouter()
    const { params } = router.query

    // GQL
    const [ resetUserPasswordMutation ] = useMutation(RESET_USER_PASSWORD)

    // States
    const [ password, setPassword ] = useState("")
    const [ submitted, setSubmitted ] = useState(false)
    const [ error, setError ] = useState(false)

    // Validate before submit
    function validateForm() {
        return password.length > 0
    }

    // Handlers
    const handleSubmit = event => {
        // Prevent Default
        event.preventDefault()

        // Set current value of url query params
        if( typeof params[0] === "string" ) {
            login = params[0]
        }
        if( typeof params[1] === "string" ) {
            key = params[1]
        }
        
        // Send Mutation
        resetUserPasswordMutation({ variables: { login:login, password: password, key:key }})
            .then( 
                res => { console.log( res )}
            )
            .catch( err => { 
                setError( err )
                console.log( err )
            })


        // Set Submitted state
        setSubmitted(true)
    }

    // Submit Message
    let submitMessage
    if( !error ){ submitMessage = <Typography variant="h3">Your password has been reset</Typography> }
    else { submitMessage = <Typography variant="h3">Uh oh, there was an error.<br/>{error.toString().substr(6)}</Typography> }
    


    // Render Switch
    if ( params && !submitted ) {
        return (
            <Container maxWidth="sm">
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">Hi.</Typography>
                        <Typography variant="h3">Reset your password here</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            label="New Password"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                            variant="outlined"
                            type="password"
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
                            Set New Password
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
    else if( params && submitted ) {
        return (
            <Container maxWidth="sm">
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12}>
                        { submitMessage }
                    </Grid>
                </Grid>
            </Container>
        )
    }
    else {
        return ( <></> )
    }
}

export default ResetPassword