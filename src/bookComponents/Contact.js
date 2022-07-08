import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import {AiFillPhone} from "react-icons/ai";
import {FiMail} from "react-icons/fi"

const Contact = () => {
    return (
        <div>
            <section class="mb-4">

                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="row">

                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label htmlFor="name" className="">Your name</label>
                                        <input type="text" id="name" name="name" class="form-control"/>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label htmlFor="email" className="">Your email</label>
                                        <input type="text" id="email" name="email" class="form-control"/>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <label htmlFor="subject" className="">Subject</label>

                                        <input type="text" id="subject" name="subject" class="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <label htmlFor="message">Your message</label>

                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-outline-primary m-3"  variant="outline-info" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>

                    <div class="col-md-2 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><FaMapMarkerAlt/>
                                <p>Nhóm 4</p>
                            </li>

                            <li><AiFillPhone/>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><FiMail/>
                                <p>contact@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Contact;