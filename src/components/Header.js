import React from "react"
import logo from '../logo.svg';
import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <header className="container mx-auto">
            <Link to="/">
                <img src={logo} className="logo max-h-14" alt="logo"/>
            </Link>
        </header>
    );
}

export default Header;