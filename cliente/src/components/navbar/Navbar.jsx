import "./Navbar.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link className="link" to="/">
          <span className="logoText">TRAVELSLINES</span>
        </Link>
      </div>
      <div className="navContainer">
        <div className="navItems">
              <WhatsAppIcon/>
              <Link className="link" to="https://api.whatsapp.com/send?phone=56953470232" target="_blank">
                <span className="contacto1">
                 +56 9 5347 0232
                </span>
              </Link>
              <h1 className="contacto">|</h1>
              <Link className="link" to="https://api.whatsapp.com/send?phone=56974492861" target="_blank">
                <span className="contacto2">
                  +56 9 7449 2861
                </span>
              </Link>
          <button onClick={toggleLoginForm} className="navLoginButton">
            Iniciar Sesión
          </button>
        </div>
      </div>
      {showLoginForm && <Login onClose={toggleLoginForm} />} {/* Muestra el componente Login cuando showLoginForm es true */}
    </div>
  );
};

export default Navbar;
