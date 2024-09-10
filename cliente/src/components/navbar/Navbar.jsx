import "./Navbar.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [iconSize, setIconSize] = useState(30); // Tamaño del ícono por defecto

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  useEffect(() => {
    const updateIconSize = () => {
      // Establecer el tamaño del ícono dependiendo del ancho de la pantalla
      setIconSize(window.innerWidth <= 768 ? 20 : 30);
    };

    // Agregar un listener para actualizar el tamaño del ícono cuando se redimensiona la ventana
    window.addEventListener('resize', updateIconSize);

    // Llamar a la función al cargar el componente para establecer el tamaño inicial
    updateIconSize();

    // Eliminar el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', updateIconSize);
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <Link className="link" to="/">
          <span className="logoText">TRAVELSLINES</span>
        </Link>
      </div>
      <div className="navContainer">
        <div className="navItems">
          <WhatsAppIcon
            style={{ fontSize: iconSize }}
            className={window.innerWidth <= 768 ? "iconWsp hideOnSmallScreen" : "iconWsp"}
          />
          <Link className="link" to="https://api.whatsapp.com/send?phone=56977162821" target="_blank">
            <span className="contacto1">
             +56 9 7716 2821
            </span>
          </Link>
          <h1 className="contacto">|</h1>
          <Link className="link" to="https://api.whatsapp.com/send?phone=56953242008" target="_blank">
            <span className="contacto2">
              +56 9 5324 2008
            </span>
          </Link>
        </div>
      </div>
      {showLoginForm && <Login onClose={toggleLoginForm} />} {/* Muestra el componente Login cuando showLoginForm es true */}
    </div>
  );
};

export default Navbar;
