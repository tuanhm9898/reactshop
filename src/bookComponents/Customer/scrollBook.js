import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import {AiOutlineHeart} from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import './scrollBook.css'

const ScrollBook = () => {
    const [data,setData] = useState()
    const url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/book'
    useEffect(() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    },[])

    const list = []

    if(data != null ) {
        data.map((item) => {
            list.push(
                <Card style={{width: '18rem'}} className="mb-3">
                    <Card.Img variant="top" src={item.image}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Button variant="outline-danger"><AiOutlineHeart/></Button>

                    </Card.Body>
                </Card>
            )
        })
    }


    return (
        <div style={{height:"800px",overflowY:"auto"}} id="style-1">
            {list}
            </div>

    );
};

export default ScrollBook;