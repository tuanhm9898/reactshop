import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import "../App.css";
import { Button, Card } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { AddCart } from "../actions";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import mgg1 from "../image/mgg1.png";
import mgg2 from "../image/mgg2.png";
import FooterBook from "../bookComponents/menu/FooterBook";
import NavBarsBook from "../bookComponents/NavBarsBook";
import {MdClose} from "react-icons/md";


const DetailBook = (props) => {
    const params = useParams();
    const [data, setData] = useState(null);
    const [book, setBook] = useState(null);
    useEffect(() => {
        let url = "https://62baa4fb573ca8f832881fa9.mockapi.io/book/" + params.id;
        console.log(url,'url here')
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                data.publishingYear = new Date(data.publishingYear);
                console.log("publishingYear", data.publishingYear);
                setBook(data);
            });
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    // const bookLove = async (id, name, chapter, image) => {

    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(data),
    //     };

    //     try {
    //         const res = await axios.post('https://62baa4fb573ca8f832881fa9.mockapi.io/cart', {
    //             "name": name,
    //             "chapter": chapter,
    //             "image": image,
    //         })
    //     } catch (e) {
    //         console.log("error axios")
    //     }
    // }
    let navigate = useNavigate();
    return (
        <>
            <>
                <Button variant="outline-danger" onClick={() => navigate(-1)}
                style={{position: "fixed",
                    right: "10px",
                    top: "10px"}}
                >
                    <MdClose/>
                </Button>
            </>
            {book != null ? (
                <div className="container bootstrap snippets bootdey">
                    <div className="panel-body inf-content">
                        <div className="">
                            <h1>Book</h1>
                            <br />
                            <div className="carddt card-body2 shadow-xl mx-3 mx-md-4 mt-n6">
                                <div className="container">
                                    <div className="section text-center row">
                                        <div className="col-5">
                                            <Card style={{ border: "none" }}>
                                                <Card.Img variant="top" src={book.image} />
                                                <Card.Body>
                                                    <Card.Text className="text-center">
                                                        {/* <Button style={{width:'150px'}} variant="outline-info" onClick={() =>bookLove(book.id,book.name,book.chapter,book.image)}> */}
                                                        <Button
                                                            style={{ width: "150px" }}
                                                            variant="outline-info"
                                                        >
                                                            Like
                                                        </Button>
                                                        <span> </span>
                                                        <Button
                                                            style={{ width: "150px" }}
                                                            variant="outline-danger"
                                                            onClick={() => props.AddCart(book)}
                                                        >
                                                            Add Cart
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                        <div className="col-7">
                                            <h3 style={{ textAlign: "left" }}>
                                                <div className="fhs_event_delivery_label_icon"></div>
                                                {book.name}
                                            </h3>
                                            <br />
                                            <table className="table table-user-information">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Th??? lo???i</strong>
                                                    </td>
                                                    <td className="text-primary">{book.category}</td>
                                                    <td>
                                                        <strong>N??m xu???t b???n</strong>
                                                    </td>
                                                    <td className="text-primary">
                                                        {" "}
                                                        {formatDate(book.publishingYear)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>T??c gi???</strong>
                                                    </td>
                                                    <td className="text-primary">{book.author}</td>
                                                    <td>
                                                        <strong>H??nh th???c b??a</strong>
                                                    </td>
                                                    <td className="text-primary">B??a M???m</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div className="danhgia">
                                                <div className="sao">
                                                    <br></br>
                                                </div>
                                            </div>
                                            <div className="row gia" style={{ display: "flex" }}>
                                                <div className="col-2 giamoi">{book.price} ??</div>
                                                <div className="col-2 giacu">{book.chapter} ??</div>
                                                <div className="col-8" style={{ textAlign: "left" }}>
                                                    <span class="discount-percent">-15%</span>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row cochu" style={{ display: "flex" }}>
                                                <div className="col-3">Ch??nh s??ch ?????i tr???</div>
                                                <div className="col-5">
                                                    ?????i tr??? s???n ph???m trong 30 ng??y
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                            <br />
                                            <div className="flashsale-header">
                                                <img
                                                    className="fs_img"
                                                    src={
                                                        "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_coupon_red.svg?q=101087"
                                                    }
                                                    alt="loi"
                                                />
                                                <span className="flashsale-header-title">
                            ??A ????I LI??N QUAN
                            </span>
                                            </div>
                                            <div className="row">
                                                <p></p>
                                                <div className="col">
                                                    <img style={{ width: "100%" }} src={mgg1}></img>
                                                </div>
                                                <div className="col">
                                                    <img style={{ width: "100%" }} src={mgg2}></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="sanphamlienquan">
                                        <div className="flashsale-header">
                                            <img
                                                className="fs_img"
                                                src={
                                                    "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu_red.svg"
                                                }
                                                alt="loi"
                                            />
                                            <span className="flashsale-header-title">
                            TH??NG TIN S???N PH???M
                        </span>
                                        </div>
                                        <div className="thongtinsp">
                                            <table className="table table-user-information" style={{bordeColor: '#eceef1'}}>
                                                <tbody>
                                                <tr>
                                                    <td style={{width:'333px'}}>
                                                        <strong >M?? h??ng</strong>
                                                    </td>
                                                    <td className="text-primary">{book.id}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>T??n Nh?? Cung C???p</strong>
                                                    </td>
                                                    <td className="text-primary">Nh?? Nam</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>T??c gi???</strong>
                                                    </td>
                                                    <td className="text-primary">{book.author}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Ng?????i D???ch</strong>
                                                    </td>
                                                    <td className="text-primary">{book.author}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Nh?? Xu???t B???n</strong>
                                                    </td>
                                                    <td className="text-primary">NXB H???i Nh?? V??n</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>N??m Xu???t B???n</strong>
                                                    </td>
                                                    <td className="text-primary">
                                                        {formatDate(book.publishingYear)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Tr???ng l?????ng (gr)</strong>
                                                    </td>
                                                    <td className="text-primary">
                                                        650
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>K??ch Th?????c Bao B??</strong>
                                                    </td>
                                                    <td className="text-primary">
                                                        20.5 x 14 cm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>S??? trang</strong>
                                                    </td>
                                                    <td className="text-primary">510</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>H??nh th???c</strong>
                                                    </td>
                                                    <td className="text-primary">B??a M???m</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>S???n ph???m b??n ch???y nh???t</strong>
                                                    </td>
                                                    <td className="text-primary">Top 100 s???n ph???m {book.category}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <br/>
                                            <p>???M???t tr???i nghi???m v??n ch????ng gi??u h??nh ???nh.??? ???The New York Times.</p>
                                            <p>???B???n ????? C??c Ng??y cho th???y Ransom Riggs ??ang ?????t ?????nh cao phong ?????, l??m ng?????i h??m m??? trung th??nh h??o h???c mong ch??? t???p ti???p theo.??? ??? NY Journal of Books.</p>
                                            <b>GI???I THI???U S??CH:</b>
                                            <p style={{textAlign: 'justify'}}>Sau tr???n chi???n vang d???i ??? ?????ng Ma, gi??p c???ng ?????ng ng?????i ?????c bi???t ??? ch??u u tho??t kh???i s??? ??e d???a c???a h???n r???ng, Jacob Portman quy???t ?????nh tr??? v??? Florida ????? s???ng ti???p cu???c ?????i m???t h???c sinh trung h???c v???i gia ????nh. Th??? nh??ng s??? xu???t hi???n c???a c?? Peregrine v?? ????m tr??? ?????c bi???t, c??ng vi???c ph??t hi???n ra m???t h???m ng???m ch???a nhi???u b?? m???t trong c??n nh?? c?? c???a ??ng n???i Abe ???? l???i ????a h??? b?????c v??o m???t cu???c phi??u l??u m???i, kh??ng k??m ph???n ly k??? v?? nguy hi???m, ????? kh??m ph?? th??? gi???i ng?????i ?????c bi???t ??? qu?? h????ng n?????c M???.</p>
                                            <p>Tr???n b??? Tr???i tr??? ?????c bi???t c???a c?? Peregrine do Nh?? Nam ph??t h??nh:<br/>
                                                TR???I TR??? ?????C BI???T C???A C?? PEREGRINE (2015)<br/>
                                                TH??NH PH??? H???N R???NG (2016)<br/>
                                                TH?? VI???N LINH H???N (2017)<br/>
                                                B???N ????? C??C NG??Y (2021)<br/>
                                                H???I NGH??? C???A B???Y CHIM (s???p ph??t h??nh)<br/>
                                                ?????NG MA TI??U ??I???U (s???p ph??t h??nh)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="table-responsive">
                                        <table className="table table-user-information">
                                            <tbody>
                                            <tr>
                                                <td>
                                                <strong>Stt</strong>
                                                </td>
                                                <td className="text-primary">{book.id}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <strong> Name</strong>
                                                </td>
                                                <td className="text-primary">{book.name}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <strong>Price</strong>
                                                </td>
                                                <td className="text-primary">{book.price}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <strong>Category</strong>
                                                </td>
                                                <td className="text-primary">{book.category}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <strong>Author</strong>
                                                </td>
                                                <td className="text-primary">{book.author}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <strong>Publishing Year</strong>
                                                </td>
                                                <td className="text-primary">
                                                {formatDate(book.publishingYear)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <strong>Title</strong>
                                                </td>
                                                <td className="text-primary">{book.details_shorts}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <strong>Image</strong>
                                                </td>
                                                <td className="text-primary">
                                                <img src={book.image} className="img-circle" />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div> */}
                        </div>
                    </div>
                </div>
            ) : (
                "loading details book ....  (:"
            )}
            <FooterBook/>
        </>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        AddCart: (item) => dispatch(AddCart(item)),
    };
}

export default connect(null, mapDispatchToProps)(DetailBook);
// export default DetailBook;