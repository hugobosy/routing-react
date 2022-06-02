import React from "react";

export const LoginPage = () => {
    return (
        <div>
            <form>
                <label htmlFor="login">Login: </label>
                <input type="text" id="login"/>
                <label htmlFor="pass">Hasło: </label>
                <input type="password" id="pass"/>
                <button type="submit">Zaloguj</button>
            </form>
        </div>
    )
}