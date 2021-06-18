// Framework
import React, { useState, useContext } from 'react'
import { Button, Dialog, DialogTitle, Typography } from '@material-ui/core'

// Context
import { UserContext, userStore } from '../contexts/userContext'


// Component Function
const TokensModal = () => {
    // Context
    const { currentAuth, currentRefresh } = useContext(UserContext)


    const [open, setOpen] = useState(false)
  
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
  
    return (
        <>
        <Button color="primary" variant="contained" onClick={handleOpen}>
            Token modal
        </Button>

        <Dialog open={open} onClose={handleClose} style={{wordBreak:'break-all', padding:'32px'}}>
            <DialogTitle >Token Data</DialogTitle>
            <h3>CurrentAuth</h3>
            <p> {currentAuth ? currentAuth : "no CurrentAuth"}</p>
            <h3>AuthDecrypted</h3>
            <p> {userStore.get( 'auth' ) ? userStore.get( 'auth' ) : "no AuthDecrypted" }</p>
            <h3>CurrentRefresh</h3>
            <p> {currentRefresh ? currentRefresh : "no CurrentRefresh"}</p>
            <h3>RefreshDecrypted</h3>
            <p> {userStore.get( 'refresh' ) ? userStore.get('refresh') : "no refreshDecrypted" }</p>
            <Button color="secondary" variant="contained" onClick={handleClose} fullWidth>
                Close
            </Button>
        </Dialog>
        </>
    )
}
  export default TokensModal