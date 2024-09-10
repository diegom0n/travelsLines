import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import igLogo from '../../assets/img/igLogo.png';
import imgLogo from '../../assets/logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="rrss">
          <a className="fLink" href="https://www.facebook.com/profile.php?id=100092330913643&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ fontSize: 40 }}/>
          </a>
          <a className="fLink" href="https://www.instagram.com/travels_lines/" target="_blank" rel="noopener noreferrer">
            <img src={igLogo} alt="Logo" className="igLogo" />
          </a>
        </div>
        <div className="logo">
          <img src={imgLogo} alt="Logo" className="logoImg" />
        </div>
      </div>
      <div className="footerCopyright">
        <p>&copy; {new Date().getFullYear()} TravelsLines. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
