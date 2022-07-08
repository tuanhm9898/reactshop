import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaMapMarkerAlt } from 'react-icons/fa'
import {AiFillPhone} from "react-icons/ai";
import {FiMail} from "react-icons/fi"
import "./style.css";


const About = () => {
    return (
        <div>
            <section class="mb-4">
                <div class="content">
                    <div id="cart" className='container'>
                        <div class="row">
                            <div class="col-md-6 mt-4 text-center">
                                <h3>
                                    GỬI PHẢN HỒI
                                </h3>
                                <div  className="about_item1">
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text id="basic-addon1">
                                            <i class="fa fa-user"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text id="basic-addon1">
                                            <i class="fa fa-envelope"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Phone Number"
                                        aria-label="Phone Number"
                                        aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text id="basic-addon1">
                                            <i class="fa fa-phone"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Heading"
                                        aria-label="Heading"
                                        aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text id="basic-addon1">
                                            <i class="fa fa-file"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                    <InputGroup>
                                        <Form.Control 
                                        as="textarea" 
                                        placeholder="Content"
                                        aria-label="Content"
                                        />
                                        <InputGroup.Text id="basic-addon3">
                                            <i class="fa fa-file"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <div>
									<button class="btn btn-outline-primary m-3" style={{width:'100px'}}> Gửi </button>
								</div>
                            </div>
            
                            <div class="col-md-6 mt-4">
                                <h3>
                                    THÔNG TIN LIÊN HỆ
                                </h3>
                                <div className="about_item2">
                                    <div class="col-md-12">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                            <p><i class="fa-solid fa-location-dot"></i> Nhóm 4</p>
                                            </li>
                                            <li>
                                                <p><i class="fa-solid fa-phone"></i> + 01 234 567 89</p>
                                            </li>
                                            <li>
                                                <p><i class="fa-solid fa-envelope"></i> contact@gmail.com</p>
                                            </li>
                                            <li>
                                            <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4699.069072252874!2d105.822185!3d21.0190946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb4623fb1d3%3A0x10291e8bc5361d64!2sPeakview%20Tower!5e1!3m2!1svi!2s!4v1657076325026!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                            </iframe>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    );
};

export default About;