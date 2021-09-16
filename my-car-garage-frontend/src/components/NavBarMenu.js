import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const NavBarMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">My Car Garage</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href=" /users ">Users</Nav.Link>
                            <Nav.Link href="/vehicles">Vehicles</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <NavDropdown title="Add Items" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/userform">Add a User</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/vehicleform">Add a Vehicle</NavDropdown.Item>
                                <NavDropdown.Item href="/serviceform">Add a Service</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarMenu
