import React from "react"
import logo from '../logo.svg';

const Footer = ()=>{
    return (
        <footer className="w-full">
            <div className="container mx-auto grid grid-cols-3 items-center">
                <img src={logo} className="logo block w-full max-w-xs" alt="logo" />
                <div className="w-full block text-center">
                    <div>Derechos reservados ©</div>
                    <div>4Healthy <span className="text-primary">❤</span></div>
                </div>
                <div className="w-full block">Términos y condiciones</div>
            </div>
        </footer>
    );
}

export default Footer;