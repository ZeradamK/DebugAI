import React, {useState} from 'react';
import {Navbar, Nav, Container, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <Navbar bg="black" expand="lg" className="shadow-sm ">
                <Container>
                    <Row className="w-100 align-items-center">

                        <Col xs={3}>
                            <Navbar.Brand href="#">
                                <img
                                    src="/bug.png"
                                    alt="BrandLogo"
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top light"
                                />
                            </Navbar.Brand>
                        </Col>

                        <Col xs={6} className="text-center">
                            <Navbar.Toggle
                                aria-controls="basic-navbar-nav"
                                onClick={handleToggle}
                                className="border-0"
                            >
                                <FontAwesomeIcon icon={menuOpen ? faBarsStaggered: faTimes} size="lg" />
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="justify-content-center w-100">
                                    <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                                    <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                                    <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
                                    <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Col>

                        <Col xs={3} className="text-right">
                            <Link to="/ide">
                                <Button className="custom-outline-light" variant="outline-light">
                                    Get Started
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
