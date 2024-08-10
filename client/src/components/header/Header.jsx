import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './Header.module.css';
import { AuthContext } from '../../contexts/authContext';
import { Path } from '../../paths';

export default function Header() {
    const { username, isAuthenticated } = useContext(AuthContext);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <img className={styles.logo} src="../../public/favicon.png" alt="favicon.png" />
                <Navbar.Brand as={Link} to='/'>Real Estate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to={Path.AllEstates}>All Estates</Nav.Link>
                        {isAuthenticated &&
                            <Nav.Link as={Link} to={Path.AddEstate}>Add Estate</Nav.Link>
                        }
                    </Nav>

                    <Nav className="ms-auto">
                        {!isAuthenticated &&
                            <>
                                <Nav.Link as={Link} to={Path.Login}>Login</Nav.Link>
                                <Nav.Link as={Link} to={Path.Register}>Register</Nav.Link>
                            </>
                        }

                        {isAuthenticated &&
                            <>
                                <Nav.Link as={Link} to={Path.Logout}>Logout</Nav.Link>
                                <p style={{ margin: 'auto' }}>Hello, {username}</p>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};