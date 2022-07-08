import React from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import DetailBook from "./pages/DetailsBook";
import Test from "./bookComponents/Test";
import Order from "./bookComponents/Order";
import FlashSale from "./bookComponents/flashSale";
import Coupon from "./bookComponents/menu/menuItem1/coupon";
import Trending from "./bookComponents/menu/menuItem1/trending";
import MarketBook from "./bookComponents/menu/menuItem1/marketBook";
import NewBook from "./bookComponents/menu/menuItem1/newBook";
import BestSellerBook from "./bookComponents/menu/menuItem2/bestSellerBook";
import ReviewBook from "./bookComponents/menu/menuItem2/reviewBook";
import Manga from "./bookComponents/menu/menuItem2/manga";
import About from "./bookComponents/menu/menuItem2/about";
import CustomerLayout from "./layout/CustomerLayout";
import AdminLayout from "./layout/AdminLayout";
import Admin from "./pages/Admin";
import HistoryOrder from "./bookComponents/Admin/HistoryOrder";
import Account from "./bookComponents/Admin/Account";
import EditBook from "./pages/EditBook";
import BookLike from "./bookComponents/Customer/bookLike";
import HomeSelect from "./pages/HomeSelect";
import Purchases from "./bookComponents/Admin/Purchases";
import NoPage from "./pages/page404/NoPage";
import Login from "./pages/Login";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeSelect/>}/>
                <Route path="*" element={<NoPage />} />
                <Route path="/test" element={<Test />} />

                <Route path="/login" element={<Login/>}></Route>

                <Route path="/customer" element={<CustomerLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="cart" element={<CartDetails/>}/>
                    <Route path="bookLike" element={<BookLike/>}/>
                    <Route path="test" element={<Test/>}/>
                    <Route path="order" element={<Order/>}/>
                    <Route path="flashSale" element={<FlashSale/>}/>
                    <Route path="coupon" element={<Coupon/>}/>
                    <Route path="trending" element={<Trending/>}/>
                    <Route path="marketBook" element={<MarketBook/>}/>
                    <Route path="newBook" element={<NewBook/>}/>
                    <Route path="bestSeller" element={<BestSellerBook/>}/>
                    <Route path="reviewBook" element={<ReviewBook/>}/>
                    <Route path="manga" element={<Manga/>}/>
                    <Route path="about" element={<About/>}/>
                </Route>
                <Route path="/book/:id" element={<DetailBook/>}/>

                <Route path="/edit/:id" element={<EditBook/>}/>
                <Route path="/edit/new" element={<EditBook/>}/>

                <Route path="/admin" element={<AdminLayout/>}>
                    <Route index element={<Admin/>}/>
                    <Route path="historyOrder" element={<HistoryOrder/>}/>
                    <Route path="account" element={<Account/>}/>
                    <Route path="" element={<Home/>}/>
                    <Route path="purchases" element={<Purchases/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}


export default App;
