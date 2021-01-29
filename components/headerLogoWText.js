// Framework
import React from 'react'
import Link from 'next/link'

// MUI
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'


// Component Function
function headerLogoWText({ color }) {
    return (
        <Link href="/">
            <a style={{ color: color, textDecoration:'none' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar variant="square" src="/rgbcmyfol-wbrdr-750.png" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">PropTricks</Typography>
                    </Grid>
                </Grid>
            </a>
        </Link>
    )
}
export default headerLogoWText