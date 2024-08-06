import { Link } from 'react-router-dom';

import styles from './Header.module.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <img className={styles.img} src="../../public/favicon.png" alt="favicon.png" />
                <Navbar.Brand as={Link} to='/'>Real Estate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to='/all-estates'>All Estates</Nav.Link>
                        <Nav.Link as={Link} to='/add-estate'>Add Estate</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};