import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const{user, logOut} = useAuth();
    
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">Genius Mechanics</Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link as={HashLink} to="/home#banner">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                {
                    !user.email?
                    <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                    :
                    <Button variant="light" onClick={logOut}>Log out</Button>
                }
                <Navbar.Text className="ps-3">
                    {user.displayName && <span>Signed in as {user.displayName}</span>}
                </Navbar.Text>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;