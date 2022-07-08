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
                                                        <strong>Thể loại</strong>
                                                    </td>
                                                    <td className="text-primary">{book.category}</td>
                                                    <td>
                                                        <strong>Năm xuất bản</strong>
                                                    </td>
                                                    <td className="text-primary">
                                                        {" "}
                                                        {formatDate(book.publishingYear)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Tác giả</strong>
                                                    </td>
                                                    <td className="text-primary">{book.author}</td>
                                                    <td>
                                                        <strong>Hình thức bìa</strong>
                                                    </td>
                                                    <td className="text-primary">Bìa Mềm</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div className="danhgia">
                                                <div className="sao">
                                                    <br></br>
                                                </div>
                                            </div>
                                            <div className="row gia" style={{ display: "flex" }}>
                                                <div className="col-2 giamoi">{book.price} đ</div>
                                                <div className="col-2 giacu">{book.chapter} đ</div>
                                                <div className="col-8" style={{ textAlign: "left" }}>
                                                    <span class="discount-percent">-15%</span>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row cochu" style={{ display: "flex" }}>
                                                <div className="col-3">Chính sách đổi trả</div>
                                                <div className="col-5">
                                                    Đổi trả sản phẩm trong 30 ngày
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
                            ƯA ĐÃI LIÊN QUAN
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
                            THÔNG TIN SẢN PHẨM
                        </span>
                                        </div>
                                        <div className="thongtinsp">
                                            <table className="table table-user-information" style={{bordeColor: '#eceef1'}}>
                                                <tbody>
                                                <tr>
                                                    <td style={{width:'333px'}}>
                                                        <strong >Mã hàng</strong>
                                                    </td>
                                                    <td className="text-primary">{book.id}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Tên Nhà Cung Cấp</strong>
                                                    </td>
                                                    <td className="text-primary">Nhã Nam</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Tác giả</strong>
                                                    </td>
                                                    <td className="text-primary">{book.author}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Người Dịch</strong>
                                                    </td>
                                                    <td className="text-primary">{book.author}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Nhà Xuất Bản</strong>
                                                    </td>
                                                    <td className="text-primary">NXB Hội Nhà Văn</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Năm Xuất Bản</strong>
                                                    </td>
                                                    <td className="text-primary">
                                                        {formatDate(book.publishingYear)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Trọng lượng (gr)</strong>
                                                    </td>
                                                    <td className="text-primary">
                                                        650
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Kích Thước Bao Bì</strong>
                                                    </td>
                                                    <td className="text-primary">
                                                        20.5 x 14 cm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Số trang</strong>
                                                    </td>
                                                    <td className="text-primary">510</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Hình thức</strong>
                                                    </td>
                                                    <td className="text-primary">Bìa Mềm</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Sản phẩm bán chạy nhất</strong>
                                                    </td>
                                                    <td className="text-primary">Top 100 sản phẩm {book.category}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <br/>
                                            <p>“Một trải nghiệm văn chương giàu hình ảnh.” —The New York Times.</p>
                                            <p>“Bản đồ Các Ngày cho thấy Ransom Riggs đang đạt đỉnh cao phong độ, làm người hâm mộ trung thành háo hức mong chờ tập tiếp theo.” — NY Journal of Books.</p>
                                            <b>GIỚI THIỆU SÁCH:</b>
                                            <p style={{textAlign: 'justify'}}>Sau trận chiến vang dội ở Đồng Ma, giúp cộng đồng người đặc biệt ở châu u thoát khỏi sự đe dọa của hồn rỗng, Jacob Portman quyết định trở về Florida để sống tiếp cuộc đời một học sinh trung học với gia đình. Thế nhưng sự xuất hiện của cô Peregrine và đám trẻ đặc biệt, cùng việc phát hiện ra một hầm ngầm chứa nhiều bí mật trong căn nhà cũ của ông nội Abe đã lại đưa họ bước vào một cuộc phiêu lưu mới, không kém phần ly kỳ và nguy hiểm, để khám phá thế giới người đặc biệt ở quê hương nước Mỹ.</p>
                                            <p>Trọn bộ Trại trẻ đặc biệt của cô Peregrine do Nhã Nam phát hành:<br/>
                                                TRẠI TRẺ ĐẶC BIỆT CỦA CÔ PEREGRINE (2015)<br/>
                                                THÀNH PHỐ HỒN RỖNG (2016)<br/>
                                                THƯ VIỆN LINH HỒN (2017)<br/>
                                                BẢN ĐỒ CÁC NGÀY (2021)<br/>
                                                HỘI NGHỊ CỦA BẦY CHIM (sắp phát hành)<br/>
                                                ĐỒNG MA TIÊU ĐIỀU (sắp phát hành)
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