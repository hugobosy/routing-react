import React from "react";
import {Route, Routes} from "react-router-dom";
import {HeaderImage} from "../components/HeaderImage";

import img1 from '../images/carp1.jpg';
import img2 from '../images/carp2.jpg';
import img3 from '../images/carp3.jpg';
import img4 from '../images/carp4.jpg';

export const Header = () => {
    return (
        <Routes>

            <Route path="/" element={<HeaderImage image={img1}/>}/>
            <Route path="/product" element={<HeaderImage image={img2}/>}/>
            <Route path="/contact" element={<HeaderImage image={img3}/>}/>
            <Route path="/admin" element={<HeaderImage image={img4}/>}/>
            <Route path="/login" element={<HeaderImage image={img4}/>}/>

        </Routes>
    )
}