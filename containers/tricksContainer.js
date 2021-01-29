//Framework
import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

// MUI
import { Grid } from '@material-ui/core'

// Components
import TricksCard from '../components/tricksCard'
import TotalTricks from '../components/totalTricks'

// GQL
import { TRICKS_ALL } from '../gql/tricksAll'

const TricksContainer = () => {
    // GQL
    const { loading, error, data } = useQuery(TRICKS_ALL)

    // Loading & Error
    if (loading) return <p>Loading...</p>
    else if (error) return <p>Error... {console.log(error)}</p>

    // Success
    else if (data) {
        return (
            <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                    <TotalTricks trickData={data.tricks.nodes} />
                </Grid>
                <TricksCard trickData={data.tricks.nodes} />
            </Grid>
        )
    }
    else return <p>Something went wrong</p>
}
export default TricksContainer