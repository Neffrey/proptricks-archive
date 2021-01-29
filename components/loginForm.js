// Framework
import React, { useState, useContext } from 'react'
import Link from 'next/link'

// MUI
import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// GQL
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'



// Context
import { AuthContext } from '../contexts/authContext'
  

// Component Function
const LoginForm = () => {

    // Styles
    const theme = useTheme()

    // Context
    const { login } = useContext(AuthContext)

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
        login( userLoginMutation({variables: { username: email, password: password}}), remember)
        
    }


    return (
        <Grid container spacing={3} alignItems="center" justify="center" style={{ maxWidth:"700px", padding:"24px" }}>

            <Grid item xs={12}>
                <h1 style={{textAlign:"center"}}>USER LOGIN</h1>
            </Grid>
            
            <Grid item xs={12} md={6}>
                <TextField
                    id="email-input"
                    label="Email"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    variant="outlined"
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
                    required
                />
            </Grid>
            
            <Grid item xs={6}>
                <FormControlLabel
                    control={
                        <Checkbox color="primary" checked={remember} onChange={ e => setRemember(e.target.checked)} name="remember-me" />}
                    label="Remember Me"
                />
            </Grid>
            
            <Grid item xs={6}>
                <Link href="/reset-password">
                    <a>Forgot Password?</a>
                </Link>
            </Grid>

            <Grid item xs={12}>
                <Button  
                    color="primary" 
                    variant="contained"
                    disabled={ !validateForm() } 
                    onClick={ handleSubmit }
                >
                    Login
                </Button>
            </Grid>
        </Grid>
    )
  }
  
  export default LoginForm
