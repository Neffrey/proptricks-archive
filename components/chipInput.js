// Framework
import React, { useState } from 'react'

// Lib Components
import { Button, Checkbox, Chip, Container, FormControl, Grid, Input, Paper, TextField, Typography } from '@material-ui/core/'

// My Components
import ChipInputChips from '../components/ChipInputChips'


// Component Function
const chipInput = ({ chips, id, label, setChips, variant }) => {

    // States
    const [ input, setInput ] = useState("")

    
    // Validate form
    const validateForm = () => {
        return input.length > 0 && input.trim().length
    }

    // Handlers
    const addChip = (e) => {
        let dupeChip = false
        if(validateForm) {
            console.log("addChip e", e )
            for( let i = 0; i < chips.length; i++ ) {
                if( chips[i].toLowerCase() === input.toLowerCase() ) {
                    dupeChip = true
                }
            }
            if(!dupeChip) {
                setChips(chips.concat(input))
            }
            setInput("")
        }
    }
    // Render
    return (
        <FormControl fullWidth >
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} md={12} >
                    <ChipInputChips 
                        chips={chips}
                        setChips={setChips}
                    />
                </Grid>
                <Grid item xs={10} md={10} >
                    <TextField
                        id={id}
                        label={label}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyUp={e => {if(e.key === "Enter") addChip(e)}}
                        variant={variant}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={2} md={2} >
                    <Button
                        color="primary" 
                        variant="contained"
                        disabled={!validateForm()} 
                        onClick={e => addChip(e)}
                        size="large"
                    >
                        {label}
                    </Button>
                </Grid>
            </Grid>
        </FormControl>
    )
}
export default chipInput