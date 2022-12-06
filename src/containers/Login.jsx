import React from "react";
import "../styles/login.scss";

function Login(){
    return ( 
    <div className="login">
        <div className="form-container">
            <img src="logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="" className="form">
                <label htmlFor="password"  className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <label htmlFor="new-password"  className="label">Re-enter your password</label>
                <input type="password" id="new-password" placeholder="*******" className="input new-password"/>
                <input type="submit" value="Confirm"  className="primary-button login-button" id="formularios"/>
            </form>
        </div>
    </div>
    )
}

export { Login }