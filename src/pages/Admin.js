import React, { useEffect, useState } from 'react';
import { Button, Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";


const Admin = () => {
    const [data, setData] = useState();
    const [direction, setDirection] = useState(1);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(-1);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/book/';
        console.log(url, "url")
        // if (searchBook.length > 0) {
        //     url = url + '?search=' + searchBook;
        // }
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data, 'set data');

            })
    }, []);

    const doSearch = () => {
        console.log('searchTerm', searchTerm);
        let url =
            'https://62baa4fb573ca8f832881fa9.mockapi.io/book/?search=' +
            searchTerm;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSearchTerm('');
                setCurrentItems(data);
            });
    };
    useEffect(() => {
        if (data != null) {
            setPage(0);
            console.log(page, 'set item offset');
        }
    }, [data]);

    useEffect(() => {
        if (data != null) {
            // Fetch items from another resources.
            let itemsPerPage = 8;
            const starOffset = page * itemsPerPage;
            let endOffset = (page + 1) * itemsPerPage;
            if (endOffset > data.length) {
                endOffset = data.length;
            }
            setCurrentItems(data.slice(starOffset, endOffset));
            setPageCount(Math.ceil(data.length / itemsPerPage));
            window.scrollTo({
                top: 100,
                behavior: 'smooth',
            });
        }
    }, [page]);

    const handlePageClick = (event) => {
        setPage(event.selected);
    };

    let listBook = [];
    if (currentItems != null) {
        listBook = currentItems.map((item, id) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.details_shorts}</td>
                <td>
                    <img src={item.image} style={{ height: "40px" }} />
                </td>
                <td>{item.publishingYear}</td>
                <td>{item.amount}</td>
                <td>
                    <Rating
                        name="simple-controlled"
                        value={item.productRating}
                    />
                </td>

                {/*<td><Link to={'/book/' + item.id}><Button variant="outline-success">*/}
                {/*    Details*/}
                {/*</Button></Link></td>*/}
                <td><Link to={'/edit/' + item.id}><Button variant="outline-warning">
                    Edit
                </Button></Link></td>
                <td><Button variant="outline-danger" onClick={() => deleteUser(item.id)}>Delete</Button></td>
            </tr>
        )
        )
    }
    ;

    const deleteUser = (id) => {
        fetch('https://62baa4fb573ca8f832881fa9.mockapi.io/book/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('delete successful!!');
            let result = [...data];
            result = result.filter((item) => {
                return item.id != id;
            });
            setData(result);
        });
    };

    const sortColumn = (field, type) => {
        const sortData = [...currentItems];
        if (type == 'string') {
            sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
        } else if (type == 'number') {
            sortData.sort((a, b) => direction * (a[field] - b[field]));
        }
        setDirection(direction * -1);
        setCurrentItems(sortData);
    };
    return (
        <div className="container">
            <hr />

            <h1>Admin</h1>
            <Row>
                <Col xs={12} md={6}>

                    <div className="container">
                    <form className="form-inline">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                size="50"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn btn-info"
                                onClick={doSearch}
                            >
                                Search
                            </button>
                        </div>
                    </form>
                    </div>
                </Col>
                <Col xs={10} md={6} className="text-end">
                    <Link to='/edit/new'>
                        <Button variant="outline-info" className="mb-5">
                            Add new
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={() => sortColumn('id', 'number')}>ID</th>
                        <th onClick={() => sortColumn('name', 'string')}>Name</th>
                        <th onClick={() => sortColumn('price', 'number')}>Price</th>
                        <th onClick={() => sortColumn('category', 'string')}>Category</th>
                        <th>Details</th>
                        <th>Image</th>
                        <th>Date</th>
                        <th onClick={() => sortColumn('amount', 'number')}>Amount</th>
                        <th onClick={() => sortColumn('productRating', 'number')}>Product rating</th>
                        <th colSpan="3">More</th>
                    </tr>
                </thead>
                <tbody>
                    {listBook}
                </tbody>
            </Table>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
                forcePage={10}
            />
        </div>
    );
};

export default Admin;