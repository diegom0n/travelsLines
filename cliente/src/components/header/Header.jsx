import React, { useState, useEffect } from 'react';
import "./header.css";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [iconSize, setIconSize] = useState(30); // Tamaño de ícono por defecto

  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUs');
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const updateIconSize = () => {
      // Establecer el tamaño de ícono dependiendo del ancho de la pantalla
      setIconSize(window.innerWidth <= 768 ? 12 : 30);
    };

    // Agregar un listener para actualizar el tamaño del ícono cuando se redimensiona la ventana
    window.addEventListener('resize', updateIconSize);

    // Llamar a la función al cargar el componente para establecer el tamaño inicial
    updateIconSize();

    // Eliminar el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', updateIconSize);
  }, []);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          {isHomePage && (
            <div className="headerListItem">
              <QuestionMarkRoundedIcon className="hListIcon" style={{ fontSize: iconSize }} />
              <Link className="headLink" onClick={handleScrollToAboutUs}>
                <span>Conócenos</span>
              </Link>
            </div>
          )}
          <div className="headerListItem">
            <DirectionsCarIcon className="hListIcon" style={{ fontSize: iconSize }} />
            <Link className="headLink" to="/servicios">
              <span>Servicios</span>
            </Link>
          </div>
          <div className="headerListItem">
            <ArticleIcon className="hListIcon" style={{ fontSize: iconSize }} />
            <Link className="headLink" to="/cotiza">
              <span>Cotización</span>
            </Link>
          </div>
          <div className="headerListItem">
            <WorkIcon className="hListIcon" style={{ fontSize: iconSize }} />
            <Link className="headLink" to="/trabaja_con_nosotros">
              <span>Trabaja con Nosotros</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
