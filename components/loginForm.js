// Framework
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { Form, FormControl,  Button, Container, Row , Col } from 'react-bootstrap/'


// GQL
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'



// Context
import { AuthContext } from '../contexts/authContext'



const LoginForm = () => {
    // Context
    const { login } = useContext(AuthContext)

    // GQL
    const [ userLoginMutation ] = useMutation(USER_LOGIN)

    // Inputs
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ remember, setRemember ] = useState(false)
    
    // Validate before submit
    function validateForm() {
        return email.length > 0 && password.length > 0
    }
    
    // Handle Submit
    const handleSubmit = event => {

        //console.log("handler fired")
        event.preventDefault()
        //console.log(remember)
        
        
        // Send Mutation
        login( userLoginMutation({variables: { username: email, password: password}}), remember)
        
    }


    return (
        <Container >
            <h1 style={{textAlign:"center"}}>USER LOGIN</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Row>                    
                    <Form.Group 
                        as={Col}
                        xs={12} 
                        size="lg" 
                        controlId="email"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            placeholder="email@address.com"
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your info with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group  
                        as={Col} 
                        xs={12} 
                        size="lg" 
                        controlId="password" 
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group 
                        style={{width:"100%"}}
                        as={Row} 
                        controlId="loginOptions"
                    > 
                        <Col xs={6}>
                            <Form.Check 
                            style={{marginLeft: "25px"}}
                                type="checkbox" 
                                label="Remember Me"
                                onChange={ e => setRemember(e.target.checked)}
                            />
                        </Col>

                        <Col 
                            xs={6}
                        >
                            <Link href="/reset-password">
                                <a style={{float: "right"}} >Forgot Password?</a>
                            </Link>
                        </Col>
                    </Form.Group>
                </Form.Row>
                <Button block size="lg" type="submit" disabled={ !validateForm() }>
                    Login
                </Button>
            </Form>
        </Container>
    )
  }
  
  export default LoginForm
