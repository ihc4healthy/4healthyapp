import React from "react"
import logo from '../logo.svg';

const Header = ()=>{
    return (
        <header className="container mx-auto">
            <img src={logo} className="logo" alt="logo" />
        </header>
    );
}

export default Header;