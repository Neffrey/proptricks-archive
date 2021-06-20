//Framework
import React from 'react'

// MUI
import { Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// Captcha
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha'

const Captcha = () => {
      return(
        <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item xs={12}>
                < LoadCanvasTemplate />
            </Grid>
        </Grid>
    )
}
export default Captcha


