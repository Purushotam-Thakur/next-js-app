import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function HeaderNavbar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Next Js</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/form">Form</Nav.Link>
                    <Nav.Link href="/editable-form">Editable Form</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderNavbar;