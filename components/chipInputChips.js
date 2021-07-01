// Framework
import React, { useState } from 'react'

// Lib Components
import { Button, Checkbox, Chip, Container, FormControl, Grid, Input, Paper, TextField, Typography } from '@material-ui/core/'


// Component Function
const chipInputChips = ({ chips, setChips }) => {

    // Handlers
    const clickChip = (e) => {
        console.log("Handle Click", e)
        // IDK what i wanna do onClick
    }
    const deleteChip = (e) => {
        console.log("Handle Delete", e)
        // Find chip inside array
        // Remove chip from array
    }


    // Render
    return (
        // Return chips array .map with each chip above the input
        <Chip
            label="Clickable deletable"
            onClick={clickChip}
            onDelete={deleteChip}
        />
    )
}
export default chipInputChips



        // chips.map(( x => {
        //     console.log("chip X", x)
        //     return (
        //         <Chip
        //             label="Clickable deletable"
        //             onClick={clickChip}
        //             onDelete={deleteChip}
        //         />
        //     )
        // }))