import React from 'react'
import './Index.css'
import './MediaQuires.css';
import { useState } from 'react'
import Photo1 from './Assests/5842999aa6515b1e0ad75ae1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {

    const [Style, setStyle] = useState("none")

    const clicked = () => {
        setStyle(!Style);
      };

    return (
        <div >
            <nav className="navbar"  >
                <div className="nav-logo">
                <Link to="" className="nav-link"><img src={Photo1} alt="" /></Link>  
                </div>

                <ul className="navbar-Icons" style={{ top: Style ? '-250px' : '85px' }}>
                    <li className="nav-item active"><Link to="" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="menu" className="nav-link">Menu</Link></li>
                    <li className="nav-item"><Link to="about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="contact" className="nav-link">Contact</Link></li>
                </ul>
                <div className='ham-bar'>
                    <FontAwesomeIcon className='Bar' icon={faBars} onClick={clicked}/>
                </div>
                
            </nav>
            <Outlet />
        </div>
    )
}
