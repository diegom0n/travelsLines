import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReservationForm from '../reservationForm/ReservationForm';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css'; // Archivo CSS para estilos personalizados del slider

const SliderComponent = () => {
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
          <img src="https://plus.unsplash.com/premium_photo-1663090281719-0b9087b34a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Imagen 1" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1485575397155-c9b47f81f645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Imagen 2" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1535655685871-dc8158ff167e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Imagen 3" className='img3'/>
        </div>
      </Slider>
      <div className="reservation-box">
        <h2>Reserva tu traslado</h2>
        {/* Aquí puedes agregar los campos del formulario de reserva */}
        <form>
          {/* Campos del formulario */}
          <input type="text" name="nombre" placeholder="Nombre" />
          <input type="email" name="email" placeholder="Email" />
          <input type="date" name="fecha" placeholder="Fecha" />
          <input type="submit" value="Reservar" />
        </form>
      </div>
    </div>
  );
};

export default SliderComponent;
