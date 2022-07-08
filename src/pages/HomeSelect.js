import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import HomeNoLogin from "./HomeNoLogin";

const HomeSelect = () => {
    return (

        <div className="container">
            
                <Link to="/loginHome" style={{position: "fixed", right: 200}}><Button variant="outline-info">Login</Button></Link>
            
            <HomeNoLogin/>
        </div>
    );
};

export default HomeSelect;