import React from "react";
import {Product} from "../components/Product";
import {Link} from "react-router-dom";

export const ProductPage = (props) => {
    console.log(props)
    return (
        <div>
            <p>Wybrany produkt</p>
            <Product/>
            <Link to="/products">Powrót do listy produktów</Link>
        </div>
    )
}