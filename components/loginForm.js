// Framework
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown, Form, FormControl,  Button, Container, Row , Col, Image } from 'react-bootstrap/'
import { gql, useMutation } from '@apollo/client';
import { client } from '../pages/_app'

// Styles
import styles from '../styles/loginForm.module.css'


const USER_LOGIN = gql`
        mutation UserLogin( $username: String!, $password: String! ) {
            login( input: { username: $username, password: $password }) {
                authToken
                refreshToken
                user {
                    email
                    firstName
                    username
                    roles {
                        nodes {
                            name
                            id
                        }
                    }
                }
            }
        }
    `


const LoginForm = () => {
    
    const [ email, setEmail ] = useState( "" )
    const [ password, setPassword ] = useState( "" )

    
        
    function validateForm() {
        return email.length > 0 && password.length > 0
    }
 
    const [ loginUser, { loading, data } ] = useMutation( USER_LOGIN, {
        variables: { 
            username: email, 
            password: password 
        }
    })


    const handleSubmit = ( event ) => {
        event.preventDefault()
        
        // Form Value logs
        console.log( email )
        console.log( password )
        

        // Send Mutation
        loginUser
        if(data) console.log(data)
        
        
        /*
        // Attempt to run loginUser with async await because .then doesn't work on it
        async function asyncMutation() {
            let tempvar = await loginUser
            console.log(data)
        }
        asyncMutation()
        
        // Store Token local storage
        if(data) {
            localStorage.setItem( 'AuthToken', data.AuthToken )
            console.log(localStorage.getItem( 'AuthToken' ))
        }
    

        // Store token in apollo cache
        client.cache.modify({
            AuthToken: data.AuthToken,
            RefreshToken: data.RefreshToken
        })
        console.log(client.cache.readQuery({
            query: gql`
                query ReadCache {
                    AuthToken
                }
            `
        }))*/

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
                            value={ email }
                            onChange={( e ) => setEmail( e.target.value )}
                        />
                    </Form.Group>
                    <Form.Group  as={ Col } size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={ password }
                            onChange={( e ) => setPassword( e.target.value )}
                        />
                    </Form.Group>
                </Form.Row>
                <Button block size="lg" type="submit" disabled={ !validateForm() }>
                    Login
                </Button>
            </Form>
        </Container>
    );
  }
  
  export default LoginForm
