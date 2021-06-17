// Framework
import React, { useContext } from 'react'
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'

// Context
import { UserContext, userStore, refreshKey, userAuthenticated } from '../contexts/userContext'

// Lib Components
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core/'
import { ChromePicker } from 'react-color'

// My Components
import TokensModal from '../components/tokensModal'

const account = () => {

    // Context
    const { login, logout, refreshToken, userAuthenticated } = useContext(UserContext)
    
    // GQL
    const [ userLoginMutation ] = useMutation(USER_LOGIN)

    // Handle Clicks
    const handleLoginTestClick = res => {
        // Send Mutation
        login( userLoginMutation({ variables: { username: "neffreyl@gmail.com", password: "test" }}), true )
    }

    const handleRefreshTokenClick = res => {
        // Send Mutation
        refreshToken()
    }

    const handleAuthenticateClick = res => {
        // Send Mutation
        userAuthenticated()
    }

    
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} md={12} >
                    <Typography variant="h1">My Account</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <TokensModal />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button 
                        color="primary" 
                        variant="contained"
                        size="large"
                        onClick={ handleLoginTestClick }
                        fullWidth
                    >
                        Login Test
                    </Button>
                    <Button 
                        color="secondary" 
                        variant="contained"
                        size="large"
                        onClick={ handleRefreshTokenClick }
                        fullWidth
                    >
                        Refresh Tokens
                    </Button>
                    <Button 
                        color="primary" 
                        variant="contained"
                        size="large"
                        onClick={ handleAuthenticateClick }
                        fullWidth
                    >
                        Authenticate
                    </Button>
                    <Button 
                        color="secondary" 
                        variant="contained"
                        size="large"
                        onClick={logout}
                        fullWidth
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default account
