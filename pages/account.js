// Framework
import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// Context
import { UserContext } from '../contexts/userContext'

const account = () => {
    // Context
    const { user, login } = useContext(UserContext)
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>My Account</h1>
                    {console.log("My Account User")}
                    {console.log(user)}
                </Col>
            </Row>
        </Container>
    )
}
export default account
