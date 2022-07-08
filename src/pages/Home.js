import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import RenderBook from '../bookComponents/RenderBook';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Nav, Navbar} from 'react-bootstrap';
import Carousel_Slideshow from "../bookComponents/Carousel_Slideshow";
import MenuItem from ".././bookComponents/menu/MenuItem";
import CartTask from "../bookComponents/CartTask";

const Home = () => {
    const [data, setData] = useState([]);
    const [searchBook, setSearchBook] = useState('');

    const [likeBook, setLikeBook] = useState()
    useEffect(() => {
        let url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/book';
        if (searchBook.length > 0) {
            url = url + '?search=' + searchBook;
            console.log('data home page');
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });

        // let likeBook = 'https://62baa4fb573ca8f832881fa9.mockapi.io/cart'
        // console.log("data task home page")
        // fetch(likeBook)
        //     .then((reponse) => reponse.json())
        //     .then((data) => {
        //         setLikeBook(data)
        //     })
        window.scrollTo({
            top: 200,
            behavior: 'smooth',
        });
    }, [searchBook]);

    const sort_price = () => {
        // console.log([...data].sort((o1,o2) => o1.price-o2.price))
        setData([...data].sort((o1, o2) => o1.price - o2.price));
        window.scrollTo({
            top: 600,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <Container>
                <Carousel_Slideshow/>
                <br></br>
                <MenuItem/>
                <br></br>
                <Row>
                    <Col xs={12} md={9}>
                        <Row>
                            <div className="col-sm-6">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Search Book Store"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        value={searchBook}
                                        onChange={(e) => setSearchBook(e.target.value)}
                                    />
                                    <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Row>

                        <RenderBook data={data}/>
                    </Col>

                    <Col xs={6} md={3}>
                        <div className="text-start mt-5">
                            <Button onClick={sort_price} variant="outline-success">
                                Sort Price
                            </Button>
                            <br/> <br/>
                            <Navbar>
                                <Nav>
                                    {/*<CartTask data={likeBook}/>*/}
                                    <CartTask />
                                </Nav>
                            </Navbar>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Home;
