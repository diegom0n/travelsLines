import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Servicio.css';

const Servicio = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
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
    {
      title: 'AEROPUERTO:',
      description: 'Transporte de invitados a Bautizos, Cumpleaños, Fiesta Empresa, Partidos de Futbol, Presentaciones Artísticas y Culturales, Conciertos entre otros.',
      imageUrl: 'https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    },
    {
      title: 'CASINOS:',
      description: 'Transporte de invitados a matrimonios de sus domicilios al lugar de la ceremonia, transporte al lugar de la fiesta y retorno a sus domicilios. (Servicio Puerta a Puerta)',
      imageUrl: 'https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    },
    {
      title: 'FUNERALES:',
      description: 'Transporte de invitados a Bautizos, Cumpleaños, Fiesta Empresa, Partidos de Futbol, Presentaciones Artísticas y Culturales, Conciertos entre otros.',
      imageUrl: 'https://images.unsplash.com/photo-1559050695-edde77c73609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    },
    // Agrega más objetos de servicios aquí según sea necesario
  ];

  const handleMouseEnter = (service) => {
    setSelectedService(service);
  };

  const handleMouseLeave = () => {
    setSelectedService(null);
  };

  return (
    <div className="navigation">
      <Navbar />
      <Header />
      <div className="servicio">
        <div className="content">
          <h2>PARTICULARES</h2>
          <div className="section">
            <div className="servicios-container">
              {services.map((service, index) => (
                <div
                  className="serv-card"
                  key={index}
                  onMouseEnter={() => handleMouseEnter(service)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="serv-card-content">
                    <h3>{service.title}</h3>
                    <img src={service.imageUrl} alt="" className="featuredImg" />
                    <p className="description">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Servicio;
