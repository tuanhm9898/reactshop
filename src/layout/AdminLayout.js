import React from 'react';
import NavBarAdmin from "../bookComponents/Admin/NavBarAdmin";
import FooterBook from "../bookComponents/menu/FooterBook";
import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <NavBarAdmin/>
            <Outlet/>
            <FooterBook/>
        </div>
    );
};

export default AdminLayout;