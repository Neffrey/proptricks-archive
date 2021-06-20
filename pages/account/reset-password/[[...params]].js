// Framework
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// MUI
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// GQL
import { useMutation } from '@apollo/client'
import { RESET_USER_PASSWORD } from '../../../gql/resetUserPassword'


// Component
const ResetPassword = () => {
    // Router
    let login = ""
    let key = ""
    const router = useRouter()
    const { params } = router.query
    console.log("before effect")
    console.log("router", router )
    console.log("params", params )
    console.log("login", login )
    console.log("key", key )
    useEffect(() => {
        console.log("effect params", params )
        if ( params ) {
        }
        console.log("during effect")
        console.log("router", router )
        console.log("login", login )
        console.log("key", key )
    },[])

    // login = router.query.params[0]
    // key = router.query.params[1]
    // GQL
    const [ resetUserPasswordMutation ] = useMutation(RESET_USER_PASSWORD)

    // States
    const [ password, setPassword ] = useState("")
    const [ submitted, setSubmitted ] = useState(false)

    // Validate before submit
    function validateForm() {
        return password.length > 0
    }

    // Handlers
    const handleSubmit = event => {
        // Prevent Default
        event.preventDefault()
        
        // Send Mutation
        resetUserPasswordMutation({ variables: { login:router.query.params[0], password: password, key:router.query.params[1] }})

        // Set Submitted state
        setSubmitted(true)
    }

    


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
                        <Typography variant="h3">Your password has been reset</Typography>
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