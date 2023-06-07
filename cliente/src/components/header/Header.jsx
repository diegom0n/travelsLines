import React from 'react';
import "./header.css";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUs');
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          {isHomePage && (
            <div className="headerListItem">
              <QuestionMarkRoundedIcon className="hListIcon" />
              <Link className="headLink" onClick={handleScrollToAboutUs}>
                <span>Conócenos</span>
              </Link>
            </div>
          )}
          <div className="headerListItem">
            <DirectionsCarIcon className="hListIcon" />
            <Link className="headLink" to="/servicios">
              <span>Servicios</span>
            </Link>
          </div>
          <div className="headerListItem">
            <ArticleIcon className="hListIcon" />
            <Link className="headLink" to="/cotiza">
              <span>Cotización</span>
            </Link>
          </div>
          <div className="headerListItem">
            <WorkIcon className="hListIcon" />
            <Link className="headLink" to="/servicios">
              <span>Trabaja con Nosotros</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
