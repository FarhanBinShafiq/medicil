import React from 'react';
import logo from '../../../images/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import useFirebase from '../../../hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Header = () => {
    const { user,logOut } = useFirebase();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className='header'>
                <Container>

                    <Navbar.Brand as={HashLink}  to="/home">
                        <img src={logo} className="d-inline-block align-top logo" alt=" logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav  ">
                        <Nav className="header-nav">
                            <Nav.Link as={HashLink} to="home">Home</Nav.Link>
                            <Nav.Link as={HashLink}  to="/home#about">About</Nav.Link>
                            <Nav.Link  as={HashLink}  to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink}  to="/home#department">Department</Nav.Link>

                            <Nav.Link as={HashLink} to="contact">Contacts</Nav.Link>

                            {user?.email ?
                                <Button onClick={logOut}  variant="light">Logout</Button> :
                                <Nav.Link as={Link}  to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;