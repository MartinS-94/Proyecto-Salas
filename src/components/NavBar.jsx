import React from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Paginas/dropdown.css";


const NavBar = () => {

    const categorias = ['Rubia', 'Ipa', 'Apa', 'Negra', 'Roja'];

    return (
    <>


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">CERVE</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Productos</Link>
                    <Link className="nav-link" to="/promo">¡Promociones!</Link>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                        {categorias.map((cat, index) =>(
                            <Link to={'/category/'+cat} key={index}>{cat}</Link>
                        ))}
                    </NavDropdown>
                </div>
            </div>
            <CartWidget />
        </nav>
        

    
    </>
    );
}

export default NavBar
