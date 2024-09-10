import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Servicio.css';

import imgMatri from '../../assets/img/matrimonioCard.jpg';
import imgTour from '../../assets/img/tourCard.jpg';
import imgCasino from '../../assets/img/casinoCard.jpg';
import imgUni from '../../assets/img/uni2.jpg';
import imgClub from '../../assets/img/clubes.jpg';
import imgEjec from '../../assets/img/ejecutivos.jpg';
import imgNieve from '../../assets/img/nieve.jpg';
import imgEventos from '../../assets/img/eventos.jpg';
import imgInter from '../../assets/img/interregional.jpg';

const Servicio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['PARTICULARES', 'TOURS', 'PRIVADOS'];

  const servicesByCategory = {
    PARTICULARES: [
      {
        title: 'MATRIMONIOS:',
        description: 'Transporte de invitados desde sus domicilios al lugar de la ceremonia, particular y centros de eventos.',
        imageUrl: imgMatri,
      },
      {
        title: 'EVENTOS ESPECIALES:',
        description: 'Transporte de invitados a eventos como Bautizos, Cumpleaños, Fiesta Empresa, Presentaciones Artísticas y Culturales, Conciertos entre otros.',
        imageUrl: imgEventos,
      },
      {
        title: 'VIAJES INTERREGIONALES:',
        description: 'Viajes turísticos personalizados zona Norte, Sur y Centro.',
        imageUrl: imgInter,
      },
    ],
    TOURS: [
      {
        title: 'VIAJES A LA NIEVE',
        description: 'Transporte a Valle Nevado, El Colorado, Farellones y La Parva, desde domicilios, hoteles y Aeropuerto.',
        imageUrl: imgNieve,
      },
      {
        title: 'VIAJES A LA PLAYA',
        description: 'Transporte a Regiones: Valparaíso, Viña del Mar y todo el litoral central.',
        imageUrl: imgTour,
      },
      {
        title: 'TRASLADOS A CASINOS',
        description: 'Enjoy desde Santiago a Viña Del Mar y San Antonio desde Domicilio, Aeropuerto y Hoteles. Monticcello San Francisco De Mostazal desde Aeropuerto,  Domicilio y Hotel.',
        imageUrl: imgCasino,
      },
    ],
    PRIVADOS: [
      {
        title: 'EMPRESAS',
        description: 'Transporte para Empresas públicas y privadas.',
        imageUrl: imgEjec,
      },
      {
        title: 'UNIVERSIDADES',
        description: 'Transporte para salidas a terreno en todas sus Áreas todo el año.',
        imageUrl: imgUni,
      },
      {
        title: 'CLUBES DEPORTIVOS',
        description: 'Transporte a Recintos Deportivos, Estadios, Teatros, Canchas, Gimnasios y más.',
        imageUrl: imgClub,
      },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderServices = () => {
    if (!selectedCategory) {
      return null;
    }

    const selectedServices = servicesByCategory[selectedCategory];

    return selectedServices.map((service, index) => (
      <div className="serv-card" key={index}>
        <div className="serv-card-content">
          <h3>{service.title}</h3>
          <img src={service.imageUrl} alt="" className="serv-card-img" />
          <p className="description">{service.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="navigation">
      <Navbar />
      <Header />
      <div className="servicio">
        <div className="content">
          <div className="categories">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`category-card ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="services-container">
            {renderServices()}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Servicio;
