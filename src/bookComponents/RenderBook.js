// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect, useState } from "react";
// import { Button, Card } from "react-bootstrap";
// import ThemeProvider from "react-bootstrap/ThemeProvider";
// import { Link } from "react-router-dom";
// // import CurrencyFormat from 'react-currency-format';
// import { connect } from "react-redux";
// import { AddCart } from "../actions";
// import axios from "axios";
// import {AiFillHeart} from "react-icons/ai";
// import {BsFillArrowRightCircleFill} from "react-icons/bs";

// const RenderBook = (props) => {
//     const [data, setData] = useState(null);

//     const categorySelect = (category) => {
//         // console.log(category)
//         setData(data.filter((a) => a.category === category));
//     };

//     const bookLove = async (id, name, chapter, image) => {
//         const requestOptions = {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//         };

//         // fetch(
//         //     'https://62baa4fb573ca8f832881fa9.mockapi.io/cart' ,
//         //     requestOptions
//         // ) .then((response) => response.json())
//         //     .then((data) => {
//         //         console.log("book like ");
//         //     });

//         try {
//         const res = await axios.post(
//             "https://62baa4fb573ca8f832881fa9.mockapi.io/cart",
//             {
//             name: name,
//             chapter: chapter,
//             image: image,
//             }
//         );
//         } catch (e) {
//         console.log("error axios");
//         }
//     };

//     useEffect(() => {
//         console.log("render book : ");
//         setData(props.data);
//     }, [props.data]);

//     var listBook = [];

//     if (data != null) {
//         data.map((item, id) => {
//             return listBook.push(
//                 <div className="col-md-4 col-sm-6 mt-4">
//                     <Card style={{width: '18rem'}}>
//                         <Card.Img variant="top" src={item.image}/>
//                         <Card.Body>
//                             <Link to={'/book/' + item.id}>
//                                 <Card.Title>{item.name}</Card.Title>
//                             </Link>
//                             <Card.Text>
                                
//                                 <Card.Text>
//                                     <div className="row">
//                                         <div className="col-sm-9" style={{
//                                             fontSize: "x-large",
//                                             color: "#856a91"
//                                         }}>
//                                             <ThemeProvider prefixes={{btn: 'my-btn'}}>
//                                                 {item.price} đ
//                                                 {/* <CurrencyFormat value={item.price} displayType={'text'} format="#### #### #### ####" /> */}
//                                             </ThemeProvider>
//                                         </div>
//                                         <p onClick={() =>categorySelect(item.category)}>
//                                             {item.category} <BsFillArrowRightCircleFill/>
//                                         </p>
//                                     </div>
//                                 </Card.Text>
//                             </Card.Text>
//                             <Card.Text className="text-center">
//                                 <Button variant="outline-danger" onClick={() =>bookLove(item.id,item.name,item.chapter,item.image)}>
//                                     <AiFillHeart/>
//                                 </Button>

//                                 <span> </span>
//                                 <Button
//                                     variant="outline-info"
//                                     onClick={() => props.AddCart(item)}
//                                 >
//                                     Add Cart
//                                 </Button>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             )
//         });
//     }
//     return (
//         <>
//         <div>
//         <div className="row">{listBook}</div>
//         </div>
//         <div className="blog">

//         </div>
//         </>
//     );
//     };

//     function mapDispatchToProps(dispatch) {
//     return {
//         AddCart: (item) => dispatch(AddCart(item)),
//     };
// }

// export default connect(null, mapDispatchToProps)(RenderBook);


import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AddCart } from "../actions";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Title from "react-vanilla-tilt";
import VanillaTilt from "vanilla-tilt";
import "../App.css";

const RenderBook = (props) => {
    const [data, setData] = useState(null);

    const categorySelect = (category) => {
        setData(data.filter((a) => a.category === category));
        window.scrollTo({
            top: 600,
            behavior: 'smooth',
        });
    };

    const bookLove = async (id, name, chapter, image) => {
        const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        };

        try {
        const res = await axios.post(
            "https://62baa4fb573ca8f832881fa9.mockapi.io/cart",
            {
            name: name,
            chapter: chapter,
            image: image,
            }
        );
        } catch (e) {
        console.log("error axios");
        }
    };

    useEffect(() => {
        console.log("render book  ");
        setData(props.data);
    }, [props.data]);

    var listBook = [];

    if (data != null) {
        data.map((item, id) => {
        return listBook.push(
            <div className="min-h-screen bg-gray-900 pb-20 col-md-4 col-sm-6 mt-4">
            {/* <div className="grid place-items-center col-4 _container gap-y-10"> */}
            <div className="">
                <Card className="card rounded-lg px-8 py-20 relative hover:shadow-xl">
                <Card.Img variant="top" src={item.image}  className="product" />
                <Card.Body>
                    <Link style={{ textDecoration: "none" }} to={"/book/" + item.id}>
                    <Card.Title>{item.name}</Card.Title>
                    </Link>
                    <Card.Text>
                    <Card.Text>
                        <div className="row">
                        <div
                            className="col-sm-9"
                            style={{
                            fontSize: "x-large",
                            color: "#856a91",
                            }}
                        >
                            <ThemeProvider prefixes={{ btn: "my-btn" }}>
                            {item.price} đ
                            </ThemeProvider>
                        </div>
                        <p onClick={() => categorySelect(item.category)}>
                            {item.category} <BsFillArrowRightCircleFill />
                        </p>
                        </div>
                    </Card.Text>
                    </Card.Text>
                    <Card.Text className="text-center">
                    <Button
                        variant="outline-danger"
                        onClick={() =>
                        bookLove(item.id, item.name, item.chapter, item.image)
                        }
                    >
                        <AiFillHeart />
                    </Button>

                    <span> </span>
                    <Button
                        variant="outline-info"
                        onClick={() => props.AddCart(item)}
                    >
                        Add Cart
                    </Button>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            </div>

            // <div className="col-md-4 col-sm-6 mt-4">
            //     <Card style={{width: '18rem'}}>
            //         <Card.Img variant="top" src={item.image}/>
            //         <Card.Body>
            //             <Link to={'/book/' + item.id}>
            //                 <Card.Title>{item.name}</Card.Title>
            //             </Link>
            //             <Card.Text>

            //                 <Card.Text>
            //                     <div className="row">
            //                         <div className="col-sm-9" style={{
            //                             fontSize: "x-large",
            //                             color: "#856a91"
            //                         }}>
            //                             <ThemeProvider prefixes={{btn: 'my-btn'}}>
            //                                 {item.price} đ
            //                             </ThemeProvider>
            //                         </div>
            //                         <p onClick={() =>categorySelect(item.category)}>
            //                             {item.category} <BsFillArrowRightCircleFill/>
            //                         </p>
            //                     </div>
            //                 </Card.Text>
            //             </Card.Text>
            //             <Card.Text className="text-center">
            //                 <Button variant="outline-danger" onClick={() =>bookLove(item.id,item.name,item.chapter,item.image)}>
            //                     <AiFillHeart/>
            //                 </Button>

            //                 <span> </span>
            //                 <Button
            //                     variant="outline-info"
            //                     onClick={() => props.AddCart(item)}
            //                 >
            //                     Add Cart
            //                 </Button>
            //             </Card.Text>
            //         </Card.Body>
            //     </Card>
            // </div>
        );
        });
    }

    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 55,
        speed: 1000,
        transition: true,
        scale: 1.1,
    });

    return (
        <div className="row" style={{ display: "flex", flexDirection:"row" }}>
            <div className="row">{listBook}</div>
        </div>
    );
    };

    function mapDispatchToProps(dispatch) {
    return {
        AddCart: (item) => dispatch(AddCart(item)),
    };
}

export default connect(null, mapDispatchToProps)(RenderBook);
