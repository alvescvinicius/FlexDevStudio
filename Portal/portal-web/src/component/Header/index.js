import React from 'react';
import './header.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header() {

    return (

        <header id="main-header">

            <Container>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>

            </Container>

        </header>

    );
}

export default Header;