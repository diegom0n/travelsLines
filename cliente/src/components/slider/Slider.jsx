import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css'; // Archivo CSS para estilos personalizados del slider

const SliderComponent = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccionOrigen, setDireccionOrigen] = useState('');
  const [direccionDestino, setDireccionDestino] = useState('');
  const [numeroPasajeros, setNumeroPasajeros] = useState('');
  const [fechaIda, setFechaIda] = useState('');
  const [fechaRegreso, setFechaRegreso] = useState('');
  const [horaIda, setHoraIda] = useState('');
  const [horaRegreso, setHoraRegreso] = useState('');

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleSendMessage = () => {
    const message = `Hola, estoy interesado en el servicio de ${selectedService}.
    Nombre: ${nombre}
    Email: ${email}
    Dirección de origen: ${direccionOrigen}
    Dirección de destino: ${direccionDestino}
    Número de pasajeros: ${numeroPasajeros}
    Fecha de ida: ${fechaIda}
    Fecha de regreso: ${fechaRegreso}
    Hora de ida: ${horaIda}
    Hora de regreso: ${horaRegreso}`;

    const phoneNumber = '56939049349'; // Reemplaza con el número de WhatsApp destino
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
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
        <div className="slide">
          <img src="https://www.expresito.com/expresito/wp-content/uploads/2018/06/expresito_carga-min.jpg" alt="Imagen 4" />
        </div>
      </Slider>
      <div className={`reservation-box ${selectedService ? 'expanded' : ''}`}>
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
              <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" name="direccionOrigen" placeholder="Dirección de origen" value={direccionOrigen} onChange={(e) => setDireccionOrigen(e.target.value)} />
              <input type="text" name="direccionDestino" placeholder="Dirección de destino" value={direccionDestino} onChange={(e) => setDireccionDestino(e.target.value)} />
              <input type="number" name="numeroPasajeros" placeholder="Número de pasajeros" value={numeroPasajeros} onChange={(e) => setNumeroPasajeros(e.target.value)} />
              <input type="date" name="fechaIda" placeholder="Fecha de ida" value={fechaIda} onChange={(e) => setFechaIda(e.target.value)} />
              <input type="date" name="fechaRegreso" placeholder="Fecha de regreso" value={fechaRegreso} onChange={(e) => setFechaRegreso(e.target.value)} />
              <input type="time" name="horaIda" placeholder="Hora de ida" value={horaIda} onChange={(e) => setHoraIda(e.target.value)} />
              <input type="time" name="horaRegreso" placeholder="Hora de regreso" value={horaRegreso} onChange={(e) => setHoraRegreso(e.target.value)} />
              <input type="button" value="Cotizar" onClick={handleSendMessage} />
            <button onClick={handleGoBack}>Volver atrás</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SliderComponent;