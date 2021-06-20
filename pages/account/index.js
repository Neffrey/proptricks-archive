// Framework
import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../../gql/userLogin'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'

// Context
import { UserContext, userStore, refreshKey, userAuthenticated } from '../../contexts/userContext'

// Lib Components
import { Button, Checkbox, Container, FormControlLabel, Grid, MenuItem, MenuList, Paper, TextField, Typography } from '@material-ui/core/'
import { ChromePicker } from 'react-color'

// My Components
import TokensModal from '../../components/tokensModal'
import AccDashWindow from '../../components/accDashWindow'


// Functional Component
const account = () => {

    // Context
    const { login, logout, refreshToken, userAuthenticated } = useContext(UserContext)
    
    // State
    const [ dashWindow, setDashWindow ] = useState("profile")

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

    // Handle Account Page Accordion
    const handleProfile = () => {
        setDashWindow("profile")
        
    }

    const handleTricks = () => {
        setDashWindow("tricks")
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
            {/* END Token Troubleshooting section
                START MY ACCOUNT PAGE */}
            <Grid container spacing={2} alignItems="left" justify="left">
                <Grid item xs={12} md={3} >
                    <paper>
                        <MenuList>
                            <MenuItem onClick={ handleProfile }>
                                <Typography variant="h5" component="h3">My Profile</Typography>
                            </MenuItem>
                            <MenuItem onClick={ handleTricks }>
                                <Typography variant="h5" component="h3">My Tricks</Typography>
                            </MenuItem>
                            <MenuItem onClick={ handleTricks }>
                                <Typography variant="h5" component="h3">Saved Tricks</Typography>
                            </MenuItem>
                        </MenuList>
                    </paper>
                </Grid>
                <Grid item xs={12} md={9}>
                    <AccDashWindow view={dashWindow}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default account
