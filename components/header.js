//Framework
import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, Image } from 'react-bootstrap/'


const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Link href="/" passHref={true}>
            <Navbar.Brand>
                <Image style={{maxWidth:'80px'}} src="\rgbcmyfol-wbrdr-750.png" />
                Prop Tricks
            </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
                    <Link href="/login" passHref><Nav.Link>Login</Nav.Link></Link>
                    <Link href="/account" passHref><Nav.Link>My Account</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
)

export default Header
