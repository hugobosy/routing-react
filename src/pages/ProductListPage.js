import React from 'react';
import {Link} from "react-router-dom";

const products = ['car', 'bike', 'motorcycle'];

export const ProductListPage = (props) => {
    console.log(props)
    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))

    return (
        <div className="product">
            <h2>Lista produktów</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    )
}