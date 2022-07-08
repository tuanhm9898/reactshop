import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
    IncreaseQuantity,
    DecreaseQuantity,
    DeleteCart,
    ClearCart,
    } from "../actions";
    import "../App.css";
    import "bootstrap/dist/css/bootstrap.css";
    import Modal from "react-bootstrap/Modal";
    import Button from "react-bootstrap/Button";
    import { AiOutlineCheck } from "react-icons/ai";

    const Order = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        let initData = {};
        setOrder(initData);
    }, []);

    useEffect(() => {
        setCartItems(props.store_state.Carts);
    }, [props.store_state]);

    const getTotal = () => {
        let sum = 0;
        for (let item of cartItems) {
        sum += item.price * item.quantity;
        }
        return sum;
    };

    var carts_jsx = "";
    if (cartItems.length > 0) {
        carts_jsx = cartItems.map((item, key) => (
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td className="text-right">{item.price * item.quantity} đ</td>
            <td className="text-center">
            <button
                className="btn btn-sm btn-danger"
                onClick={() => props.DeleteCart(key)}
            >
                Remove
            </button>
            </td>
        </tr>
        ));
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let data = { ...order };
        data[name] = value;
        setOrder(data);
    };

    const saveInfo = () => {
        props.ClearCart();

        // alert('dat hang thanh cong');
        order["cart"] = cartItems;
        order["total"] = getTotal();
        const current = new Date();
        const date = `${current.getDate()}/${
        current.getMonth() + 1
        }/${current.getFullYear()}`;
        order["date"] = date;
        console.log(order);
        order["total"] = getTotal();
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
        };
        fetch("https://62baa4fb573ca8f832881fa9.mockapi.io/info/", requestOptions)
        .then((response) => response.json())
        .then((data) => setOrder(data));
    };
    return (
        <div className="container">
        <div className="row">
            <div className="col">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-bordered table-striped p-2">
                <thead>
                <tr>
                    <th>Product(s)</th>
                    <th>Quantity</th>
                    <th className="text-right">Price</th>
                    <th className="text-right"></th>
                </tr>
                </thead>
                <tbody>
                {cartItems.length == 0 ? (
                    <tr>
                    <td colSpan="4" className="text-center">
                        Your cart is empty
                    </td>
                    </tr>
                ) : (
                    ""
                )}
                {carts_jsx}
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="2" className="text-right">
                    Total:
                    </td>
                    <td className="text-right">{getTotal()} đ</td>
                </tr>
                </tfoot>
            </table>
            </div>
        </div>

        <div classNameName="container mt-3 pt-5">
            <table className="table table-bordered table-striped p-2">
            <tr>
                <td>
                <h2>Please input your info</h2>
                </td>
            </tr>
            <tr>
                <td>
                <div className="form-floating mt-3 mb-3">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Fullname"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    />
                    <label for="name">Name</label>
                </div>
                </td>
                <td>
                <div className="form-floating mt-3 mb-3">
                    <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    onChange={(e) => handleChange(e)}
                    name="phone"
                    />
                    <label for="phone">Phone</label>
                </div>
                </td>
            </tr>
            <tr colspan="2">
                <td>
                <div className="form-floating mt-3 mb-3">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    onChange={(e) => handleChange(e)}
                    />
                    <label for="address">Address</label>
                </div>
                </td>
            </tr>
            <tr colspan="2">
                <td>
                <div className="form-floating">
                    <textarea
                    className="form-control"
                    name="notes"
                    placeholder="Note goes here"
                    onChange={(e) => handleChange(e)}
                    ></textarea>
                    <label for="notes">Notes</label>
                </div>
                </td>
            </tr>
            </table>

            <div className="row">
            <div className="col">
                <div className="text-center">
                <a
                    href="#myModal"
                    className="trigger-btn"
                    data-toggle="modal"
                    style={{ margin: "2px", textDecoration: "none" }}
                >
                    <button
                    className="btn btn-outline-success m-1 trigger-btn" style={{padding: '0px'}}
                    type="button"
                    onClick={() => saveInfo()}
                    >
                        <button className="btn btn-outline-success m-1 trigger-btn" style={{border:'none',padding: '2px'}}
                            onClick={handleShow}>
                            Confirm
                        </button>
                    </button>
                </a>
                <Link to="/customer"></Link>
                <Link to="/customer/cart">
                    <button className="btn btn-outline-danger m-1">
                    Back to Cart
                    </button>
                </Link>
                </div>
            </div>
            </div>
        </div>

        {/* <div id="myModal" className="modal fade">
                            <div className="modal-dialog modal-confirm">
                                <div className="modal-content ">
                                    <div className="modal-header">
                                        <div className="icon-box">
                                            <i className="material-icons">&#xE876;</i>
                                        </div>				
                                        <h4 className="modal-title w-100">Awesome!</h4>	
                                    </div>
                                    <div className="modal-body">
                                        <p className="text-center">Your booking has been confirmed. Check your email for details.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <Link to="/customer">
                                        <button type="button" className="btn btn-success btn-block" data-bs-toggle="modal">
                                            OK
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}

        <>


            <Modal
            show={show}
            onHide={handleClose}
            style={{
                color: "#636363",
                width: "555px",
                fontSize: "14px",
                marginTop: "200px",
                marginLeft:'700px',
            }}
            >
            <Modal.Header closeButton className="modal-header">
                <Modal.Title className="modal-confirm">
                <h4 className="modal-title" style={{ textAlign: "left" }}>
                    Awesome!
                </h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                {" "}
                <p className="text-center">
                Your booking has been confirmed. Check your email for details.
                </p>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                <Link to="/customer">
                <button
                    type="button"
                    className="btn btn-success btn-block"
                    data-bs-toggle="modal"
                >
                    {" "}
                    <Button variant="success" onClick={handleClose}>
                    OK{" "}
                    </Button>
                </button>
                </Link>
            </Modal.Footer>
            </Modal>
        </>
        </div>
    );
    };

    const mapStateToProps = (state) => {
    return {
        store_state: state._todoProduct,
    };
    };

    export default connect(mapStateToProps, {
    IncreaseQuantity,
    DecreaseQuantity,
    DeleteCart,
    ClearCart,
})(Order);
