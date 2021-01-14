//Framework
import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Container } from 'react-bootstrap'

// Components
import TricksCard from '../components/tricksCard'
import TricksTotal from '../components/totalTricks'

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
            <Container>
                <TricksTotal trickData={data.tricks.nodes} />
                <TricksCard trickData={data.tricks.nodes} />
            </Container>
        )
    }
    else return <p>Something went wrong</p>
}
export default TricksContainer