import React from 'react'
import { Row } from 'react-bootstrap'


const TotalTricks = (props) => {
    return (
        <Row>
            <h2>Currently there are { props.trickData.length } tricks in the DB</h2>
        </Row>
    )
}
export default TotalTricks
