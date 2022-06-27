import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Outshade Digital Media (IMS)</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Product</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create Category</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Category" className="nav-link">Category</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;