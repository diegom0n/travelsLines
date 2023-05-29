import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReservationForm from '../reservationForm/ReservationForm';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css'; // Archivo CSS para estilos personalizados del slider

const SliderComponent = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleGoBack = () => {
    setSelectedService(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1656110074070-34939c497739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Imagen 1" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1485575397155-c9b47f81f645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Imagen 2" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1605410522294-80aa1f8b4153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" alt="Imagen 3" />
        </div>
      </Slider>
      <div className="reservation-box">
        {!selectedService ? (
          <>
            <h2>Cotiza tu viaje</h2>
            <div className="service-selection">
              <h3>Selecciona el tipo de servicio:</h3>
              <div className="service-buttons">
                <button onClick={() => handleServiceSelection('Empresas')}>EMPRESAS</button>
                <button onClick={() => handleServiceSelection('Mascotas')}>MASCOTAS</button>
                <button onClick={() => handleServiceSelection('Encomiendas')}>ENCOMIENDAS</button>
                <button onClick={() => handleServiceSelection('Particulares')}>PARTICULARES</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>Cotiza tu viaje</h2>
            <h3>Tipo de servicio seleccionado: {selectedService}</h3>
            <form>
              <input type="text" name="nombre" placeholder="Nombre" />
              <input type="email" name="email" placeholder="Email" />
              <input type="date" name="fecha" placeholder="Fecha" />
              <input type="submit" value="Reservar" />
            </form>
            <button onClick={handleGoBack}>Volver atrás</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SliderComponent;