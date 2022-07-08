import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo-removebg.jpg'

const NavBarAdmin = (props) => {

    const [numberCart, setNumberCart] = useState(null);

    useEffect(() => {
        // console.log('props.numberCart', props.numberCart);
        setNumberCart(props.numberCart);
    }, [props.numberCart]);
    //Nav bar fixed="top"
    return (
        <div>
            <Navbar bg="light" expand="lg" id="banner_style">
                <Container>
                    <Navbar.Brand><Link to="/admin" className="nav-link">
                        <img src={logo} height="65" />
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ display: 'flex', alignItems: 'center' }}>
                            <Nav.Link><Link to="/admin" className="nav-link">Home </Link></Nav.Link>
                            {/*<Nav.Link><Link to="account" className="nav-link">Account</Link></Nav.Link>*/}
                            <Nav.Link><Link to="historyOrder" className="nav-link">History Order</Link></Nav.Link>
                            <Nav.Link><Link to="purchases" className="nav-link">Purchases</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link><Link to="/" className="nav-link" style={{ color: "black" }}>Log Out</Link></Nav.Link>

                </Container>
            </Navbar>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};


export default NavBarAdmin;
