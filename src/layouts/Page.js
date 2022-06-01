import React from "react";
// import {Route} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {ProductPage} from "../pages/ProductPage";
import {ContactPage} from "../pages/ContactPage";
import {AdminPage} from "../pages/AdminPage";
import {ErrorPage} from "../pages/ErrorPage";
import {Routes, Route} from "react-router";

export const Page = () => {
    return (
        <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route element={<ErrorPage/>}/>
        </Routes>
    )
}