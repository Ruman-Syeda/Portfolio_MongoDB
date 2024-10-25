import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./logo.png";

export default function Layout() {
 return (
 <>
 <h1>My Portfolio</h1>
 <div className="logo-container">
                    <img 
                        src={Logo} 
                        alt="My Logo" 
                        className="logo" 
                    />
                </div>
 <nav>
 <Link to="/">Home Page</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link>| <Link to="/project">Projects</Link>| <Link to="/contact">Contact Me</Link>
 </nav>
<br/>
 <hr />
 
</>
 
 );
}
