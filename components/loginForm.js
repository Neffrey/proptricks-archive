// Framework
import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client';
import { AuthContext } from '../contexts/authContext'
import { Navbar, Nav, NavDropdown, Form, FormControl,  Button, Container, Row , Col, Image } from 'react-bootstrap/'
import { USER_LOGIN } from '../gql/userLogin'




const LoginForm = () => {
    
    // Router
    const router = useRouter()

    // GQL
    const [ userLoginMutation ] = useMutation(USER_LOGIN)

    // Context
    const { login } = useContext(AuthContext)

    // Inputs
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
        
    function validateForm() {
        return email.length > 0 && password.length > 0
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Send Mutation
        userLoginMutation({
            variables: { 
                username: email, 
                password: password 
            }
        }).then(
            res => login(res),

            // Todo handle error
            err => console.log(err)
        )
    }

    return (
        <Container className="login-container">
            <Form onSubmit={ handleSubmit }>
                <Form.Row>
                    <Form.Group as={ Col } size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group  as={ Col } size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </Form.Row>
                <Button block size="lg" type="submit" disabled={ !validateForm() }>
                    Login
                </Button>
            </Form>
        </Container>
    );
  };
  
  export default LoginForm
