import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';


const HistoryOrder = () => {

    const [open, setOpen] = useState(false);
    const [row, setRow] = useState();
    const list = []

    const url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/info'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRow(data);
            });
    }, [])

    if (row != null) {
        row.map((row) => {
            list.push(
                <React.Fragment>
                    <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                        <TableCell>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                            </IconButton>
                        </TableCell>
                        <TableCell >{row.id}</TableCell>

                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>{row.address}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                            <Collapse style={{background:"#D6EFED"}} in={open} timeout="auto" unmountOnExit >
                                <Box sx={{margin: 1}}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Cart
                                    </Typography>
                                    <Table size="small" aria-label="purchases">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><b>Stt</b></TableCell>
                                                <TableCell><b>name</b></TableCell>
                                                <TableCell><b>quantity</b></TableCell>
                                                <TableCell><b>price</b></TableCell>
                                                <TableCell align="right"><b>Total price (VNĐ)</b></TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {row.cart.map((historyCart) => (
                                                <TableRow key={historyCart.id}>
                                                    <TableCell component="th" scope="row">
                                                        {historyCart.id}
                                                    </TableCell>
                                                    <TableCell>{historyCart.name}</TableCell>
                                                    <TableCell>{historyCart.quantity}</TableCell>
                                                    <TableCell>{historyCart.price}</TableCell>
                                                    <TableCell align="right">
                                                        {Math.round(historyCart.quantity * historyCart.price)}
                                                    </TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </React.Fragment>
            )
        })
    }

    list.propTypes = {
        row: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.number.isRequired,
            cart: PropTypes.arrayOf(
                PropTypes.shape({
                    quantity: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    total: PropTypes.number.isRequired,

                }),
            ).isRequired,
            total: PropTypes.number.isRequired,
            date: PropTypes.number.isRequired,
            address: PropTypes.number.isRequired,
        }).isRequired,
    };

    return (
        <TableContainer component={Paper}>
            <h1>History Order</h1>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell><b>id</b></TableCell>
                        <TableCell><b>name</b></TableCell>
                        <TableCell><b>phone</b></TableCell>
                        <TableCell><b>address</b></TableCell>
                        <TableCell><b>date</b></TableCell>
                        <TableCell><b>Total</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HistoryOrder;