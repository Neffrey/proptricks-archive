// Framework
import React, { useContext } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

// Context
import { AuthContext } from '../contexts/authContext'


const account = () => {
    // Context
    const { login, logout } = useContext(AuthContext)
    return (
        <Container fluid="md">
            <Row>
                <Col xs={12} md={9}>
                    <h1>My Account</h1>
                </Col>
                <Col xs={12} md={3}>
                <Button
                        block
                        variant="outline-success"
                        onClick={login}
                    >
                        Login Test
                    </Button>
                    <Button
                        block
                        variant="outline-danger"
                        onClick={logout}
                    >
                        Logout
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default account
