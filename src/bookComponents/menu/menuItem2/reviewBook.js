import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../../App.css";

const ReviewBook = () => {
    const [data, setData] = useState(null);
    let url = "https://62baa4fb573ca8f832881fa9.mockapi.io/book";
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            console.log("review book ");
        });
    }, []);


    return (
        <div className="col-main" style={{ backgroundColor: "#254171" }}>
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2022/DDay_Main banner.jpg" alt="" width="100%"/>
            </div>
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2022/DDay_Banner_01.jpg" alt="" width="100%"/>
            </div>
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2022/DDay_Tagname chinh_01.jpg" alt="" width="100%"/>
            </div>
            <div className="page-banner">
                <img style={{marginTop:'66px'}} src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2022/DDay_Banner_02.jpg" alt="" width="100%"/>
            </div>
        </div>
    );

}
export default ReviewBook;