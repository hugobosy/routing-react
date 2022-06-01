import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/Aside.css';

const list = [
    {name: "start", path: "/"},
    {name: "produkty", path: "/product"},
    {name: "kontakt", path: "/contact"},
    {name: "panel admina", path: "/admin"},
]

export const Aside = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))

    return (
        <aside>
            <nav className="main-nav">
                <ul>
                    {menu}
                </ul>
            </nav>
        </aside>
    )
}