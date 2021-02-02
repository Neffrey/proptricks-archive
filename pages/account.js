// Framework
import React, { useContext } from 'react'
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'

// Context
import { AuthContext, authStore, refreshKey, userAuthenticated } from '../contexts/authContext'

// Lib Components
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core/'
import { ChromePicker } from 'react-color'

// My Components
import TokensModal from '../components/tokensModal'

const account = () => {

    // Context
    const { login, logout, refreshToken, userAuthenticated } = useContext(AuthContext)
    
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
        <Container maxWidth="md">
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} md={9} style={{ wordBreak:"break-all" }}>
                    <h1>My Account</h1>
                    <TokensModal />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button 
                        color="primary" 
                        variant="contained"
                        size="large"
                        // variant="outline-success"
                        onClick={ handleLoginTestClick }
                        fullWidth
                    >
                        Login Test
                    </Button>
                    <Button 
                        color="secondary" 
                        variant="contained"
                        size="large"
                        // variant="outline-primary"
                        onClick={ handleRefreshTokenClick }
                        fullWidth
                    >
                        Refresh Tokens
                    </Button>
                    <Button 
                        color="primary" 
                        variant="contained"
                        size="large"
                        // variant="outline-info"
                        onClick={ handleAuthenticateClick }
                        fullWidth
                    >
                        Authenticate
                    </Button>
                    <Button 
                        color="secondary" 
                        variant="contained"
                        size="large"
                        // variant="outline-danger"
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
