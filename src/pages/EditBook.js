import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

const ProductEdit = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);
    const [countries, setCountries] = useState(null);
    // const [data, setData] = useState()
    let navigate = useNavigate();

    useEffect(() => {
        if (params.id != null && params.id != 'new') {
            let product_url =
                'https://62baa4fb573ca8f832881fa9.mockapi.io/book/' + params.id;

            fetch(product_url)
                .then((res) => res.json())
                .then((data) => {
                    var date = new Date(data.publishingYear);
                    data.publishingYear = date.toISOString().slice(0, 10);
                    setProduct(data);
                });
        } else {
            let initData = {};
            setProduct(initData);
        }

        let category_url =
            'https://62baa4fb573ca8f832881fa9.mockapi.io/category';

        fetch(category_url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "category api");
                setCategory(data);
            });
        // let countries_url =
        //     'https://62b0495de460b79df0422035.mockapi.io/countries/';

        // fetch(countries_url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('country api ');
        //         setCountries(data);
        //     });
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const saveProduct = () => {
        console.log(product);
        let method = 'POST';
        let id = '';
        if (product.id) {
            method = 'PUT';
            id = product.id;
        }

        const requestOptions = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        };
        fetch(
            'https://62baa4fb573ca8f832881fa9.mockapi.io/book/' + id,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("book api ");
                navigate(-1);
            });
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let data = { ...product };
        data[name] = value;
        setProduct(data);
    };

    return (
        <>
            {product != null ? (
                <div className="container">
                    <div className="container">
                        <div className="container">
                            <div className="col-lg-10 col-md-12 mx-auto col-sm-12">
                                <h1 className="text-center m3">{product.id ? 'EDIT ' : 'NEW '}</h1>
                                <br />
                                <div className="table-responsive">
                                    <table className="table table-user-information">
                                        <tbody>
                                            <tr>
                                                {product.id ? (
                                                    <td>
                                                        <strong>ID</strong>
                                                    </td>
                                                ) : null}
                                                <td className="text-primary">{product.id}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Name</strong>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={product.name}
                                                        name="name"
                                                        onChange={(e) => handleChange(e)}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Price</strong>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={product.price}
                                                        name="price"
                                                        onChange={(e) => handleChange(e)}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Category</strong>
                                                </td>
                                                <td>
                                                    <select
                                                        name="category"
                                                        value={product.category}
                                                        onChange={(e) => {
                                                            handleChange(e);
                                                        }}
                                                    >
                                                        {category != null
                                                            ? category.map((item) => (
                                                                <option value={item.category}>{item.category}</option>
                                                            ))
                                                            : 'loading'}
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Details</strong>
                                                </td>
                                                <td>
                                                    <textarea
                                                        type="text"
                                                        name="details"
                                                        className="form-control"
                                                        value={product.details}
                                                        onChange={(e) => handleChange(e)}>
                                                    </textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Details_Shorts</strong>
                                                </td>
                                                <td>
                                                    <textarea
                                                        type="text"
                                                        name="details_shorts"
                                                        className="form-control"
                                                        value={product.details_shorts}
                                                        onChange={(e) => handleChange(e)}>
                                                    </textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Image</strong>
                                                </td>
                                                <td>
                                                    <textarea
                                                        type="text"
                                                        name="image"
                                                        className="form-control"
                                                        value={product.image}
                                                        onChange={(e) => handleChange(e)}>
                                                    </textarea>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>PublishingYear</strong>
                                                </td>
                                                <td>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        value={product.publishingYear}
                                                        name="publishingYear"
                                                        onChange={(e) => handleChange(e)}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Author</strong>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={product.author}
                                                        name="author"
                                                        onChange={(e) => handleChange(e)}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Number Page</strong>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={product.numberPage}
                                                        name="numberPage"
                                                        onChange={(e) => handleChange(e)}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Amount</strong>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={product.amount}
                                                        name="amount"
                                                        onChange={(e) => handleChange(e)}
                                                    ></input>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>Product Rating</strong>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={product.productRating}
                                                        name="productRating"
                                                        onChange={(e) => handleChange(e)}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Status</strong>
                                                </td>
                                                <td>
                                                    <Form>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    label="Soldout"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-1`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Available"
                                                                    checked
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-2`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong></strong>
                                                </td>
                                                <td>
                                                    <div className="select-container">
                                                        {countries != null ? (
                                                            <select
                                                                name="origin"
                                                                value={product.origin}
                                                                onChange={(e) => {
                                                                    handleChange(e);
                                                                }}
                                                            >
                                                                {countries != null
                                                                    ? countries.map((item) => (
                                                                        <option
                                                                            key={item.id}
                                                                            value={item.country}
                                                                        >
                                                                            {item.country}
                                                                        </option>
                                                                    ))
                                                                    : <div><h1>''</h1></div>}
                                                            </select>
                                                        ) : (
                                                            <div><h1>(❁´◡`❁)</h1></div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                    <div className="m-3">
                                        <Button
                                            variant="outline-info"
                                            onClick={() => saveProduct()}
                                        >
                                            Save
                                        </Button>
                                        <span> </span>
                                        <Link to="/admin">
                                            <Button variant="outline-danger">
                                                Cancel
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div><h1>(❁´◡`❁)&nbsp;Loading&nbsp;(❁´◡`❁)</h1></div>
            )}
        </>
    );
};

export default ProductEdit;
