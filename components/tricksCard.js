//Framework
import React, { useState } from 'react'

// MUI
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
})



// Component Function
const TricksCard = ({ trickData }) => {
    const classes = useStyles()
    return ( 
        trickData.map(({ id, title, TrickFields }) => {
            const [ show, setShow ] = useState(false)

            const handleClick = () => {
                console.log("Card Clicked")
                console.log(id)  
                console.log(TrickFields)
                setShow(!show)
            }
            
            return (
                <Grid item xs={4} key={ id }>
                    <Card className={ classes.root }>
                        <CardActionArea>
                            <CardMedia
                                className={ classes.media }
                                image="/rgbcmyfol-wbrdr-750.png"
                                title={ title }
                            />

                            <CardContent>
                                <Typography variant="h5">{ title }</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button 
                                onClick={ handleClick }
                            >
                                Clicky
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })  
    )
}

export default TricksCard