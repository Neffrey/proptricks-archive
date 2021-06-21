// Framework
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// MUI
import { Grid, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
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
    
    // Styles
    const theme = useTheme()
    const useStyles = makeStyles({
        icon: {
          color: theme.palette.text.primary,
        },
      })
    const classes = useStyles()
    // console.log(theme)

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
                                <HeaderLogoWText />
                            </Grid>
                            <Grid item>
                                <Link href="/login"><a ><AccountCircle className={classes.icon} fontSize="large"/></a></Link>
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
                        <HeaderLogoWText />
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