import React, { useEffect, useState } from 'react';
import "./nav.css";
import logo from "./cloneflix.png";
import avatar from './avatar.png'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        
    });
    return() => {
        window.removeEventListener("scroll");
    };
}, []);
    
    return(
    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo"
        src={logo}
        alt="Cloneflix Logo"/>

<img className="nav_avatar"
        src={avatar}
        alt="Cloneflix Avatar"/>

    </div>
    )
}

export default Nav