import React from "react"
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Footer = ()=>{
    return (
        <footer className="w-full">
            <div className="container mx-auto flex items-center">
                <img src={logo} className="logo block max-w-xs" alt="logo" />
                <div className="grow block text-center">
                    <div>Derechos reservados ©</div>
                    <div>4Healthy <span className="text-primary">❤</span></div>
                </div>
                <div className="block text-right">
                <Link to="/Terminos">Términos y condiciones</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;