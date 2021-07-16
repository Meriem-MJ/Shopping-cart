import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">MJ SHOP</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link active">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Products" className="nav-link active">PRODUCTS</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>  
                    </div>
                    <div className="container1">
                        <FaCartPlus/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
