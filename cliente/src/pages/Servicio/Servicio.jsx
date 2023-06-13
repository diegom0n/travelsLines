import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Servicio.css';

const Servicio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['PARTICULARES', 'TOURS', 'PRIVADOS'];

  const servicesByCategory = {
    PARTICULARES: [
      {
        title: 'MATRIMONIOS:',
        description: 'Transporte de invitados a matrimonios de sus domicilios al lugar de la ceremonia, transporte al lugar de la fiesta y retorno a sus domicilios. (Servicio Puerta a Puerta)',
        imageUrl: 'https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      },
      {
        title: 'EVENTOS ESPECIALES:',
        description: 'Transporte de invitados a Bautizos, Cumpleaños, Fiesta Empresa, Partidos de Futbol, Presentaciones Artísticas y Culturales, Conciertos entre otros.',
        imageUrl: 'https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      },
      {
        title: 'VIAJES INTERREGIONALES:',
        description: 'Transporte de invitados a matrimonios de sus domicilios al lugar de la ceremonia, transporte al lugar de la fiesta y retorno a sus domicilios. (Servicio Puerta a Puerta)',
        imageUrl: 'https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      },
    ],
    TOURS: [
      {
        title: 'TOUR 1:',
        description: 'Descripción del Tour 1.',
        imageUrl: 'https://example.com/image1.jpg',
      },
      {
        title: 'TOUR 2:',
        description: 'Descripción del Tour 2.',
        imageUrl: 'https://example.com/image2.jpg',
      },
      {
        title: 'TOUR 3:',
        description: 'Descripción del Tour 3.',
        imageUrl: 'https://example.com/image3.jpg',
      },
    ],
    PRIVADOS: [
      {
        title: 'SERVICIO PRIVADO 1:',
        description: 'Descripción del Servicio Privado 1.',
        imageUrl: 'https://example.com/image4.jpg',
      },
      {
        title: 'SERVICIO PRIVADO 2:',
        description: 'Descripción del Servicio Privado 2.',
        imageUrl: 'https://example.com/image5.jpg',
      },
      {
        title: 'SERVICIO PRIVADO 3:',
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
          <img src={service.imageUrl} alt="" className="featuredImg" />
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
