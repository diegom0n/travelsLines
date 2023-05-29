import "./navbar.css"
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import LoginModal from "../loginModal/LoginModal";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <Link className="link" to ="/">
          <span className="logoText">TRAVELSLINES</span>
        </Link>
      </div>
        <div className='navContainer'>
            <div className='navItems'>
            <WhatsAppIcon/>
              <span className="contacto">
              +56 9 5347 0232
              </span>
              <h1 className="contacto">|</h1>
              <span className="contacto">
                +56 9 7449 2861
              </span>
                    <LoginModal/>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar