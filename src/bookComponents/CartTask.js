import React from 'react';
import ScrollBook from "./Customer/scrollBook";

const CartTask = () => {
    return (
        <div>
            <h1 className="text-start p-2">Trend</h1>
            <ScrollBook />
            <div >
                <h1 className="text-start p-2 mt-5">Hot</h1>
            </div>
            <ScrollBook />
        </div>
    );
};

export default CartTask;