import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";


const Login = () => {
    // Pssst, I've created a github package - https://github.com/brookesb91/dismissible

const showBanner = (selector) => {
    hideBanners();
    // Ensure animation plays even if the same alert type is triggered.
    requestAnimationFrame(() => {
        const banner = document.querySelector(selector);
        banner.classList.add("visible");
        });
    };
    
    const hideBanners = (e) => {
        document
        .querySelectorAll(".banner.visible")
        .forEach((b) => b.classList.remove("visible"));
    };
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    let handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    let handleChangePass = (event) => {
        setPassword(event.target.value);
    }

    const setParam = () => {
        console.log(email, password)
        if (password == 'admin' && email == 'admin@gmail.com') {
            return window.location.href = '/admin'
        } else if (password == 'nhom4' && email == 'nhom4@gmail.com') {
            return window.location.href = '/customer'

        } else {
            alert('password or email no success')
        }
    }
    const [errorMessages, setErrorMessages] = useState({});
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    return (
        <div className="container">
            <h1 style={{fontSize: "1.5rem"}}> &nbsp; Login to experience all of functions</h1>
            <Form style={{ width: '50rem',marginLeft:"auto",marginRight:"auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChangePass}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-info" onClick={setParam}>
                ༼ つ ◕_◕ ༽つ
                </Button>
            </Form>
           
        </div>
    );
};

export default Login;