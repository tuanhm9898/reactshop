import React from 'react';
import ReChart from "./ReChart"
import {Avatar} from "@mui/material";
import {BsFillArrowRightCircleFill, BsFillBagCheckFill} from "react-icons/bs";
import { Link } from "react-router-dom";

const Purchases = () => {
    return (
        <div className="container">
            <h1>Purchases</h1>
            <ReChart/>
            {/*BOOK   SALE*/}
            <div className="card container mb-5">
                <div className="card-header border-0">
                    <h3 className="card-title">Book</h3>
                    <div className="card-tools">
                        <a href="#" className="btn btn-tool btn-sm">
                        </a>
                        <a href="#" className="btn btn-tool btn-sm">
                        </a>
                    </div>
                </div>
                <div className="card-body table-responsive p-0">
                    <table className="table table-striped table-valign-middle">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>image</th>
                            <th>Price</th>
                            <th>Sales</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Link to ="/book/18" style={{color:"#000", textDecoration: "none"}}>ICHI KAIJUU</Link></td>
                            <td>
                                <Avatar src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_227509.jpg"></Avatar>
                            </td>
                            <td>145.000.000</td>
                            <td>
                                <small className="text-success mr-1">
                                    <i className="fas fa-arrow-up"></i>
                                    12%
                                </small>
                                120 Sold
                            </td>

                        </tr>
                        <tr>
                            <td><Link to ="/book/19" style={{color:"#000", textDecoration: "none"}}>Kimetsu</Link></td>
                            <td>
                                <Avatar src="https://cdn0.fahasa.com/media/catalog/product/9/7/9784088828886.jpg"></Avatar>
                            </td>
                            <td>149.000.000</td>
                            <td>
                                <small className="text-warning mr-1">
                                    <i className="fas fa-arrow-down"></i>
                                    0.5%
                                </small>
                                12 Sold
                            </td>

                        </tr>
                        <tr>
                            <td><Link to ="/book/20" style={{color:"#000", textDecoration: "none"}}>One Piece</Link></td>
                            <td>
                                <Avatar src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244872712.jpg">A</Avatar>
                            </td>
                            <td>55.000.000</td>
                            <td>
                                <small className="text-danger mr-1">
                                    <i className="fas fa-arrow-down"></i>
                                    3%
                                </small>
                                8 Sold
                            </td>

                        </tr>
                        <tr>
                            <td><Link to ="/book/21" style={{color:"#000", textDecoration: "none"}}>Chú Thuật Hồi Chiến</Link> <span className="badge bg-danger">NEW</span>
                            </td>
                            <td>
                                <Avatar src="https://cdn0.fahasa.com/media/catalog/product/c/h/chu-thuat-hoi-chien---tap-1---ban-thuong-_the-qua-tang_-2.jpg">A</Avatar>

                            </td>
                            <td>30.000.000</td>
                            <td>
                                <small className="text-success mr-1">
                                    <i className="fas fa-arrow-up"></i>
                                    63%
                                </small>
                                87 Sold
                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/*    ONLINE VIEW STORE*/}
            <div className="card container">
                <div className="row">
                    <div className="col-lg-3 col-6">

                        <div className="small-box p-2 " style={{background: "aquamarine"}}>
                            <div className="inner">
                                <h3>150</h3>
                                <p>Đơn hàng mới</p>
                            </div>
                            <div className="icon">

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-3 col-6">

                        <div className="small-box p-2" style={{background: "#81c7c7"}}>
                            <div className="inner">
                                <h3>300</h3>
                                <p>Người dùng mới</p>
                            </div>
                            <div className="icon">

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-3 col-6">

                        <div className="small-box p-2" style={{background: "#ffdcae"}}>
                            <div className="inner">
                                <h3>1000</h3>
                                <p>Số lượng khách truy cập</p>
                            </div>
                            <div className="icon">

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-3 col-6">

                        <div className="small-box bg-danger p-2">
                            <div className="inner">
                                <h3>5<sup style={{fontSize: "20px"}}>%</sup></h3>
                                <p>Tỷ lệ hoàn </p>
                            </div>
                            <div className="icon">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchases;