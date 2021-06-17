// Framework
import React, { useState, useContext } from 'react'
import Link from 'next/link'

// MUI
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// GQL
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'



// Context
import { UserContext } from '../contexts/userContext'
  

// Component Function
const LoginForm = () => {

    // Styles
    const theme = useTheme()

    // Context
    const { login } = useContext(UserContext)

    // GQL
    const [ userLoginMutation ] = useMutation(USER_LOGIN)

    // Inputs
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ remember, setRemember ] = useState(false)
    
    // Validate before submit
    function validateForm() {
        return email.length > 0 && password.length > 0
    }
    
    // Handle Submit
    const handleSubmit = event => {

        //console.log("handler fired")
        event.preventDefault()
        //console.log(remember)
        
        
        // Send Mutation
        login( userLoginMutation({ variables: { username: email, password: password }}), remember )
        
    }

    // Render
    return (
        <Container maxWidth="sm">
            <Grid container spacing={3} alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Typography variant="h1" align="center">USER LOGIN</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="email-input"
                        label="Email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={
                            <Checkbox color="primary" checked={remember} onChange={ e => setRemember(e.target.checked)} name="remember-me" />}
                        label="Remember Me"
                        style={{ paddingLeft:"20px" }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Link href="/reset-password" passHref>
                        <Typography variant="body1" component="a" style={{ alignText: "right", paddingRight: "20px" }}>Forgot Password?</Typography>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Button  
                        color="primary" 
                        variant="contained"
                        disabled={ !validateForm() } 
                        onClick={ handleSubmit }
                        size="large"
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginForm
