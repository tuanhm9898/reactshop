import React, {useEffect, useState} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo-removebg.jpg'
import {connect} from 'react-redux';
import {Avatar} from "@mui/material";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBarsBook = (props) => {

    const [numberCart, setNumberCart] = useState(null);

    useEffect(() => {
        // console.log('props.numberCart', props.numberCart);
        setNumberCart(props.numberCart);
    }, [props.numberCart]);
//Nav bar id="banner_style" fixed="top"

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top" className="m-0 p-0">
                <Container className="my-0 p-0">
                    <Navbar.Brand><Link to="/customer" className="nav-link">
                        <img src={logo} height="65"/>
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"  style={{display:'flex',alignItems: 'center'}}>
                            <Nav.Link><Link to="/customer" className="nav-link">Home</Link></Nav.Link>
                            <Nav.Link><Link to="bookLike" className="nav-link">Book Like</Link></Nav.Link>
                            {/*<Nav.Link><Link to="/admin" className="nav-link">Admin</Link></Nav.Link>*/}
                            <Nav.Link><Link to="cart" className="nav-link">
                                {/*<i className="fa fa-shopping-cart" aria-hidden="true"></i>*/}
                                {/*<span class="badge bg-danger">{numberCart}</span>*/}
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={numberCart} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link><Link to="/" className="nav-link m-0 p-0"> <Avatar>A</Avatar></Link></Nav.Link>

                </Container>
            </Navbar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        numberCart: state._todoProduct.numberCart,
    };
};

export default connect(mapStateToProps, null)(NavBarsBook);
