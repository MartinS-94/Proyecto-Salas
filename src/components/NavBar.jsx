import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {

    return (
    <>


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">LOGO</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="#">Productos</Link>
                    <Link className="nav-link" to="#">¡Promociones!</Link>
                    <Link className="nav-link" to="#">Info</Link>
                </div>
            </div>
            <CartWidget />
        </nav>
        

    
    </>
    );
}

export default NavBar
