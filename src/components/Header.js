import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">

            <Link to="/" className="logo">LOGO</Link>

            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/Review" className="nav-link">Blog</Link>
               
            </nav>

            <div className="buttons">
                <button className="header-button">Sign Up</button>
                <button className="header-button">Sign In</button>
            </div>
        </header>
    );
}

export default Header;
