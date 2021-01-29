// Framework
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// MUI
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// icons
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'



// My Imports

// Context
import { ThemeContext } from '../contexts/themeContext'

// Components
import HideOnScroll from './hideOnScroll'
import HeaderLogoWText from './headerLogoWText'






// Component Function
const Header = ( props ) => {

    // Theme
    const theme = useTheme()
    console.log(theme)
    // Router
    const router = useRouter()
    
    // Context
    const { darkMode, paletteOverwrites, typographyOverwrites, customTheme } = useContext( ThemeContext )
    
    const [ drawerOpen, setDrawerOpen ] = useState( false )

    // Handlers
    const handleDrawerOpen = () => {
        console.log("handleDrawerOpen")
        setDrawerOpen(!drawerOpen)
    }

    const handleDrawerLink = href => {
        router.push(href)
        setDrawerOpen(false)
    }

    // Component Render
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center" justify="space-between">
                            <Grid item>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={ handleDrawerOpen }>
                                    <MenuIcon fontSize="large"/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <HeaderLogoWText color="#fff" />
                            </Grid>
                            <Grid item>
                                <Link href="/login"><a style={{ color: '#fff' }}><AccountCircle fontSize="large"/></a></Link>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

            <Drawer 
                anchor='left'
                open={ drawerOpen }
                onClose={ () => setDrawerOpen(false) }
                onKeyDown={handleDrawerOpen}

            >
                <List style={{minWidth:"200px"}}>
                    <ListItem>
                        <HeaderLogoWText color="#212121" />
                    </ListItem>
                    <ListItem href="/testerhref" button onClick={ () => handleDrawerLink("/login") }>
                        <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem href="/testerhref" button onClick={ () => handleDrawerLink("/account") }>
                        <ListItemText primary="My Account" />
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )
}
export default Header