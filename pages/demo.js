// Framework
import React from 'react'

// MUI
import { makeStyles, useTheme, hexToRgb } from '@material-ui/core/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core/'

// Context
import { AuthContext, authStore, refreshKey, userAuthenticated } from '../contexts/authContext'

// Lib Components
import { ChromePicker } from 'react-color'

// My Components

const demo = () => {

    // HexToRgba Helper
    const hextoRgbaHelper = ( hex, a ) => {
        return hexToRgb(hex).slice(0, -1).concat( ', ' + a + ')')
    }

    // Styles
    const theme = useTheme()
    const useStyles = makeStyles({
        fadedText: {
            color: hextoRgbaHelper("#ffffff", 0.5 )
        },
        cardRoot: {
            maxWidth: 345,
        },
        cardMedia: {
            height: 140,
        },
        primaryLightBtn: {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          '&:hover': { 
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.dark, 
            },
        },
        primaryMainBtn: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': { 
                color: theme.palette.secondary.contrastText,
                backgroundColor: theme.palette.secondary.main, 
            },
        },
        primaryDarkBtn: {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
          '&:hover': { 
                color: theme.palette.primary.contrastText,
                backgroundColor: hextoRgbaHelper( theme.palette.primary.dark, 0.6 ),
            },
        },
        secondaryLightBtn: {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.contrastText,
          '&:hover': { 
                color: theme.palette.secondary.contrastText,
                backgroundColor: theme.palette.secondary.dark, 
            },
        },
        secondaryMainBtn: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          '&:hover': { 
                color: theme.palette.tertiary.contrastText,
                backgroundColor: theme.palette.tertiary.main, 
            },
        },
        secondaryDarkBtn: {
          backgroundColor: theme.palette.secondary.dark,
          color: theme.palette.secondary.contrastText,
          '&:hover': { 
                color: theme.palette.secondary.contrastText,
                backgroundColor: theme.palette.secondary.light, 
            },
        },
        tertiaryLightBtn: {
          backgroundColor: theme.palette.tertiary.light,
          color: theme.palette.tertiary.contrastText,
          '&:hover': { 
                color: theme.palette.tertiary.contrastText,
                backgroundColor: theme.palette.tertiary.dark, 
            },
        },
        tertiaryMainBtn: {
          backgroundColor: theme.palette.tertiary.main,
          color: theme.palette.tertiary.contrastText,
          '&:hover': { 
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main, 
            },
        },
        tertiaryDarkBtn: {
          backgroundColor: theme.palette.tertiary.dark,
          color: theme.palette.tertiary.contrastText,
          '&:hover': { 
                color: theme.palette.tertiary.contrastText,
                backgroundColor: theme.palette.tertiary.light, 
            },
        },
      })
    const classes = useStyles()





    // Render
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} md={12} >
                    <Typography variant="h1" style={{ marginTop:50 }}>EXXXTRA LARGE H1 TAG</Typography>
                    <Typography variant="subtitle1">Oh look! Im a subtitle1</Typography>
                    
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* Primary */}
                    <Button 
                            className={ classes.primaryLightBtn } 
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            primary.light
                    </Button>
                    <Button 
                            //className={ classes.primaryMainBtn } 
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            primary.main
                    </Button>
                    <Button 
                            className={ classes.primaryDarkBtn } 
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            primary.dark
                    </Button>
                    
                    {/* Secondary */}
                    <Button 
                            className={ classes.secondaryLightBtn } 
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            secondary.light
                    </Button>
                    <Button 
                            className={ classes.secondaryMainBtn } 
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            secondary.main
                    </Button>
                    <Button 
                            className={ classes.secondaryDarkBtn } 
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            secondary.dark
                    </Button>

                    {/* Tertiary */}
                    <Button 
                            className={ classes.tertiaryLightBtn } 
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            tertiary.light
                    </Button>
                    <Button 
                            className={ classes.tertiaryMainBtn } 
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            tertiary.main
                    </Button>
                    <Button 
                            className={ classes.tertiaryDarkBtn } 
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            tertiary.dark
                    </Button>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h2" style={{ marginTop:50 }}>Big ole h2 Tag</Typography>
                    <Typography variant="subtitle2">Howdy from this subtitle2</Typography>
                    <Typography variant="body1">
                        Lorem ipsum aint got nothing on me.<br />
                        nope. No way.<br />
                        I don't need some bullshit generator. I can spew better bullshit than that.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h3" style={{ marginTop:50 }}>Derpa derpa derp h3</Typography>
                    <Typography variant="body2">
                        Welp, sadly I'm struggling with the bullshit on the body. <br />
                        Its a body2 whereas the one before was a body1.<br />
                        Omg I almost made it. Heres a bit more bullshit to cover my ass.
                    </Typography>
                </Grid>
                
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Card className={ classes.cardRoot }>
                                <CardActionArea>
                                    <CardMedia
                                        className={ classes.cardMedia }
                                        image="/rgbcmyfol-wbrdr-750.png"
                                        title="cardTitle"
                                    />

                                    <CardContent>
                                        <Typography variant="h3">Card Title</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button 
                                        onClick={ e => console.log(e) }
                                    >
                                        Clicky
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default demo
