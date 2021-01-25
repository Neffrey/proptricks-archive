// Framework
import React, { useContext } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

// Context
import { AuthContext, authStore, refreshKey, userAuthenticated } from '../contexts/authContext'

// GQL
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../gql/userLogin'

// Components
import TokensModal from '../components/tokensModal'

const account = () => {

    // Context
    const { login, logout, refreshToken, userAuthenticated } = useContext(AuthContext)
    
    // GQL
    const [ userLoginMutation ] = useMutation(USER_LOGIN)

    // Current Auth button
    //const [ AuthDecrypted, setCurrentAuth ] = useState("")
    //const [ RefreshDecrypted, setCurrentRefresh ] = useState("")

    // Handle Clicks
    const handleLoginTestClick = res => {
        // Send Mutation
        login( userLoginMutation({ variables: { username: "neffreyl@gmail.com", password: "test" }}), true )
    }

    const handleRefreshTokenClick = res => {
        // Send Mutation
        refreshToken()
    }

    const handleAuthenticateClick = res => {
        // Send Mutation
        userAuthenticated()
    }

    
    return (
        <Container fluid="md">
            <Row>
                <Col xs={12} md={9} style={{ wordBreak:"break-all" }}>
                    <h1>My Account</h1>
                    <TokensModal />
                </Col>
                <Col xs={12} md={3}>
                    <Button
                        block
                        variant="outline-success"
                        onClick={ handleLoginTestClick }
                    >
                        Login Test
                    </Button>
                    <Button
                        block
                        variant="outline-primary"
                        onClick={ handleRefreshTokenClick }
                    >
                        Refresh Tokens
                    </Button>
                    <Button
                        block
                        variant="outline-info"
                        onClick={ handleAuthenticateClick }
                    >
                        Authenticate
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
