// Framework
import React, { useState } from 'react'

// Lib Components
import { Button, Checkbox, Chip, Container, FormControl, Grid, Input, Paper, TextField, Typography } from '@material-ui/core/'


// Component Function
const chipInputChips = ({ chips, setChips }) => {


    
    // Handlers
    const clickChip = (e) => {
        console.log("Clicked chip", e)
        // IDK what i wanna do onClick
    }

    const deleteChip = (e) => {
        let currentChip = ""
        if(e.target.tagName === "svg") {
            currentChip = e.target.parentElement.id
        }
        else if(e.target.tagName === "path") {
            currentChip = e.target.parentElement.parentElement.id
        }
        setChips(chips.filter( chip => chip !== currentChip ))
    }




    // Render
        // Return chips array .map with each chip above the input
    return (
        chips.map(( chipLabel => {
            return (
                <Chip
                    id={chipLabel}
                    label={chipLabel}
                    key={chipLabel}
                    onClick={clickChip}
                    onDelete={deleteChip}
                />
            )
        }))
    )
}
export default chipInputChips