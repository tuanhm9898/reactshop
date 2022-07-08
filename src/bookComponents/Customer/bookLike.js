import React, {useEffect, useState} from 'react';
import CartTask from "../CartTask";
import Toast from "react-bootstrap/Toast";
import Image from "react-bootstrap/Image";

const BookLike = () => {
    const [cart, setCart] = useState();
    useEffect(() => {

        let likeBook = 'https://62baa4fb573ca8f832881fa9.mockapi.io/cart'

        console.log("data task home page")
        fetch(likeBook)
            .then((reponse) => reponse.json())
            .then((data) => {
                setCart(data)
            })
    }, []);

    var list_cart = [];

    const deleteTask = (id) => {
        fetch('https://62baa4fb573ca8f832881fa9.mockapi.io/cart/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('delete successful!!');
            let result = [...cart];
            result = result.filter((item) => {
                return item.id != id;
            });
            setCart(result);
        });
    };

    if (cart != null) {
        cart.map((c, id) => {
            return list_cart.push(
                <Toast className="mt-3 col-3 me-3">
                    <Toast.Header onClick={() => deleteTask(c.id)}>
                        <Image src={c.image} style={{ height: '40px' }} />
                        <strong className="me-auto ms-3">Name : {c.name}</strong>
                    </Toast.Header>
                    <Toast.Body> Chapter : {c.chapter}</Toast.Body>
                </Toast>

            );
        });
    }

    return (
        <div className="container">
            <h1>Sách yêu thích</h1>
            <div className="row">
                {list_cart}

            </div>
        </div>
    );
};

export default BookLike;