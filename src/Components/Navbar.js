import React from 'react'
import './Index.css'
import './MediaQuires.css';
import { useState } from 'react'
import Photo1 from './Assests/5842999aa6515b1e0ad75ae1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const [Style, setStyle] = useState("none")

    const clicked = () => {
        setStyle(!Style);
      };

    return (
        <div >
            <nav className="navbar"  >
                <div className="nav-logo">
                    <img src={Photo1} alt="" />
                </div>

                <ul className="navbar-Icons" style={{ top: Style ? '-250px' : '85px' }}>
                    <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="menu.html" className="nav-link">Menu</a></li>
                    <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                </ul>
                <div className='ham-bar'>
                    <FontAwesomeIcon className='Bar' icon={faBars} onClick={clicked}/>
                </div>
                
            </nav>
        </div>
    )
}
