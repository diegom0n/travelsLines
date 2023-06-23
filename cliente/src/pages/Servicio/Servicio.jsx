import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Servicio.css';

import imgMatri from '../../assets/img/matrimonioCard.jpg';
import imgTour from '../../assets/img/tourCard.jpg';
import imgCasino from '../../assets/img/casinoCard.jpg';

const Servicio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['PARTICULARES', 'TOURS', 'PRIVADOS'];

  const servicesByCategory = {
    PARTICULARES: [
      {
        title: 'MATRIMONIOS:',
        description: 'Transporte de invitados a matrimonios de sus domicilios al lugar de la ceremonia, transporte al lugar de la fiesta y retorno a sus domicilios. (Servicio Puerta a Puerta)',
        imageUrl: imgMatri,
      },
      {
        title: 'EVENTOS ESPECIALES:',
        description: 'Transporte de invitados a Bautizos, Cumpleaños, Fiesta Empresa, Partidos de Futbol, Presentaciones Artísticas y Culturales, Conciertos entre otros.',
        imageUrl: imgMatri,
      },
      {
        title: 'VIAJES INTERREGIONALES:',
        description: 'Transporte de invitados a matrimonios de sus domicilios al lugar de la ceremonia, transporte al lugar de la fiesta y retorno a sus domicilios. (Servicio Puerta a Puerta)',
        imageUrl: imgMatri,
      },
    ],
    TOURS: [
      {
        title: 'VIAJES A LA NIEVE',
        description: 'Transporte Valle Nevado - Farellones - El Colorado. Transporte privado desde domicilios - hoteles - Aeropuerto a Valle Nevado - Farellones - El Colorado y la Parva.',
        imageUrl: 'https://cdn.discordapp.com/attachments/981382192271859775/1118003777543356497/WhatsApp_Image_2023-06-12_at_10.24.06_PM.jpeg',
      },
      {
        title: 'VIAJES A LA PLAYA',
        description: 'Transporte a Regiones: Valparaíso y Viña del Mar. Transporte Santiago a Valparaiso, Reñaca, Concón, Quintay, Algarrobo, San Alfonso del Mar, El Quisco, Maitencillo.',
        imageUrl: imgTour,
      },
      {
        title: 'TRASLADOS A CASINOS',
        description: 'ENJOY: SANTIAGO-VIÑA DEL MAR, SANTIAGO- SAN ANTONIO DESDE DOMICIOLIO AEROPUERTO HOTELES. MONTICCELLO: SAN FRANCISCO DE MOSTAZAL, DESDE AEROPUERTO DOMICILIO HOTEL.',
        imageUrl: imgCasino,
      },
    ],
    PRIVADOS: [
      {
        title: 'EMPRESAS PRIVADAS/PÚBLICAS',
        description: 'Descripción del Servicio Privado 1.',
        imageUrl: 'https://example.com/image4.jpg',
      },
      {
        title: 'UNIVERSIDADES',
        description: 'Descripción del Servicio Privado 2.',
        imageUrl: 'https://example.com/image5.jpg',
      },
      {
        title: 'CLUBES DEPORTIVOS',
        description: 'Descripción del Servicio Privado 3.',
        imageUrl: 'https://example.com/image6.jpg',
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
