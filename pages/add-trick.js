// Framework
import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'

// Context
import { UserContext, userStore, refreshKey, userAuthenticated } from '../contexts/userContext'

// Lib Components
import { Button, Checkbox, Container, FormControlLabel, Grid, MenuItem, MenuList, Paper, TextField, Typography } from '@material-ui/core/'
import { ChromePicker } from 'react-color'

// My Components
import ChipInput from '../components/chipInput'



// Functional Component
const addTrick = () => {

    // Context
    const { login, logout, refreshToken, userAuthenticated } = useContext(UserContext)
    
    // State
    //const [ chip, setChip ] = useState([])
    const [ title, setTitle ] = useState("")
    const [ status, setStatus ] = useState(false)
    const [ youtubeLink, setYoutubeLink ] = useState("")
    const [ trickNames, setTrickNames ] = useState([])
    const [ trickTags, setTrickTags ] = useState([])

    // GQL
    const [ createTrickMutation ] = useMutation(USER_LOGIN)

    // Validate form
    const validateForm = () => {
        return title.length > 0 && youtubeLink.length > 0 && trickNames && trickTags
    }

    // Handlers
    const handleStatusCheckbox = () => {
        if(status) {
            setStatus(false)
        }
        else {
            setStatus(true)
        }

    }

    const handleAddTrickTag = trickTagsChip => {
        setTrickTags(tricktags.push(trickTagsChip))
        console.log("Added TrickTag")
    }

    const handleDelete = chip => {
        trickTags.splice( trickTags.findIndex(chip), 1 )
    }

    const handleSubmit = res => {
        console.log("Handle Submit")
    }

    // $title: String!, $status: String!, $youtubeLink: String, $trickNames: String, $trickTags: String

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} md={12} >
                    <Typography variant="h1">Add Trick</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    {/* Change to chip input for names*/}
                    <Typography variant="h6">Trick Names</Typography>
                    <TextField
                        id="title-input"
                        label="Title"
                        value={title}
                        onChange={ e => setTitle(e.target.value)}
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography variant="h6">Trick YouTube Link</Typography>
                    <TextField
                        id="-youtube-input"
                        label="YouTube Link"
                        value={youtubeLink}
                        onChange={ e => setYoutubeLink(e.target.value)}
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6">Trick Tags</Typography>
                    {/* <ChipInput
                        value={trickTags}
                        onAdd={(chip) => handleAddTrickTag(chip)}
                        blurBehavior="ignore"
                        onDelete={(chip) => handleDelete(chip)}
                    /> */}
                </Grid>

                <Grid item xs={12} md={9}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={status}
                            onChange={handleStatusCheckbox}
                            name="draft"
                            color="primary"
                        />
                        }
                        label="Save as draft"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button  
                        color="primary" 
                        variant="contained"
                        disabled={!validateForm()} 
                        onClick={handleSubmit}
                        size="large"
                    >
                        Add Trick
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <p>Add Tags Chip Input</p>
                    <ChipInput 
                        id="add-tags-chip-input"
                        label="Add Tags"
                        variant="filled"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
export default addTrick
