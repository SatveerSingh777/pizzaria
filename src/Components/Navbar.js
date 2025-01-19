import React, { useState } from 'react';
import './Index.css';
import './MediaQuires.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Navbar() {
    const [Style, setStyle] = useState(false);

    const clicked = () => {
        console.log('Hamburger icon clicked');
        setStyle(!Style);
    };

    const [isSticky,setIsSticky] = useState(false);
    const handleScroll = () =>{
        if (window.scrollY > 100) {
            setIsSticky(true);
            } else {
                setIsSticky(false)
    }
}
    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
    
      return () => {
        window.removeEventListener("scroll",handleScroll)
      }
    }, [])
    


    return (
        <div>
            <nav className={`navbar ${isSticky ? 'sticky' : ''}`} >
                <div className="nav-logo">
                    <Link to="" className="nav-link">
                        <p>PIZZA ART</p>
                    </Link>
                </div>

                <ul className="navbar-Icons" style={{ top: Style ? '85px' : '-250px' }}>
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Menu" className="nav-link">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <div className="ham-bar">
                    <FontAwesomeIcon className="Bar" icon={faBars} onClick={clicked} />
                </div>
            </nav>
            <Outlet />
        </div>
    );
}