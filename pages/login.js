// Framework
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Components
import LoginForm from '../components/loginForm'


const Login = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Login