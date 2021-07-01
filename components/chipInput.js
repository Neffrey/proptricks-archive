// Framework
import React, { useState } from 'react'

// Lib Components
import { Button, Checkbox, Chip, Container, FormControl, Grid, Input, Paper, TextField, Typography } from '@material-ui/core/'

// My Components
import ChipInputChips from '../components/ChipInputChips'


// Component Function
const chipInput = ({ id, label, variant }) => {

    // States
    const [ chips, setChips ] = useState([])
    const [ input, setInput ] = useState("")

    
    // Validate form
    const validateForm = () => {
        return input.length > 0
    }

    // Handlers
    const addChip = (e) => {
        if(validateForm) {
            // Push input to chip array
            // Set input to "" to clear

            // setChips(chips.push(input))
            //console.log("onBlur", e, "chips", chips, "input", input)
        }
        
    }
    // Render
    return (
        <FormControl fullWidth >
            <Paper>
                <Grid container spacing={2} alignItems="center" justify="center">
                    <Grid item xs={12} md={12} >
                        <ChipInputChips 
                            chips={chips}
                            setChips={setChips}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} >
                        <TextField
                            id={id}
                            label={label}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onBlur={e => addChip(e)}
                            variant={variant}
                            fullWidth
                        />
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
            </Paper>
        </FormControl>
    )
}
export default chipInput