import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", Nav);
        };
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt="Netfix Logo"></img>
        <img className='nav_avatar'></img>
    </div>
  )
}

export default Nav