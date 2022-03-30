import React from "react";


const NavBar = () => {

    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <a className="nav-link" href="#">Productos</a>
        <a className="nav-link" href="#">¡Promociones!</a>
        <a className="nav-link" href="#">Info</a>
    </div>
    </div>
</nav>
    
    </>
    );
}

export default NavBar
