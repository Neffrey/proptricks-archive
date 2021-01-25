// Framework
import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'

// Context
import { AuthContext, authStore, refreshKey } from '../contexts/authContext'

//Crypto
import { decrypt } from '../lib/crypto'
import { authKey } from '../lib/keys'

// Component Function
const TokensModal = () => {
    // Context
    const { currentAuth, currentRefresh } = useContext(AuthContext)


    const [show, setShow] = useState(false)
  
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Tokens</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{wordBreak:'break-all'}}>
                <h3>CurrentAuth</h3>
                <p> {currentAuth ? currentAuth : "no CurrentAuth"}</p>
                <h3>AuthDecrypted</h3>
                <p> {authStore.get( 'auth' ) ? decrypt( authStore.get('auth'), authKey ) : "no AuthDecrypted" }</p>
                <h3>CurrentRefresh</h3>
                <p> {currentRefresh ? currentRefresh : "no CurrentRefresh"}</p>
                <h3>RefreshDecrypted</h3>
                <p> {authStore.get( 'refresh' ) ? decrypt( authStore.get('refresh'), refreshKey ) : "no refreshDecrypted" }</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
  export default TokensModal