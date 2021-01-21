// Framework
import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


// GQL
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'

// Context
import { AuthContext } from '../contexts/authContext'


// Components
import LoginForm from '../components/loginForm'


const LoginFormContainer = () => {
    //


    return (
        <Container>
            <Row>
                <Col>
                    <LoginForm login={login} forgotFlag={forgotFlag}/>
                </Col>
            </Row>
        </Container>
    )
}
export default LoginFormContainer