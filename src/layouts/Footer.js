import React from "react";
import {Route} from "react-router-dom";
import {Outlet, Routes} from "react-router";

export const Footer = () => {
    return (
        <footer>
            <h2>Stopka</h2>
            <Routes>
                <Route path="/" exact render={(props) => {
                    console.log(props)
                    return (
                        <p>Dodatkowe informacje</p>
                    )
                }} />
            </Routes>
        </footer>
    )
}