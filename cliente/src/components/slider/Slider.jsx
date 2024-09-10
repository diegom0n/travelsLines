import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import ReactImageSize from 'react-image-size';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css';

import image1 from '../../assets/img/empresas.jpg';
import image2 from '../../assets/img/encomiendas.jpg';
import image3 from '../../assets/img/mascotas.jpg';
import image4 from '../../assets/img/privado.jpg';

const images = [image1, image2, image3, image4];

const getLargestImageSize = async () => {
  let largestSize = { width: 0, height: 0 };

  for (const image of images) {
    const dimensions = await ReactImageSize(image);
    if (dimensions.width > largestSize.width || dimensions.height > largestSize.height) {
      largestSize = dimensions;
    }
  }

  return largestSize;
};

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
    let phoneNumber = '';

    switch (selectedService) {
      case 'Empresas':
        phoneNumber = '56939049349';
        break;
      case 'Mascotas':
        phoneNumber = '56939049349';
        break;
      case 'Encomiendas':
        phoneNumber = '56939049349';
        break;
      case 'Particulares':
        phoneNumber = '56939049349';
        break;
      default:
        phoneNumber = '';
    }

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

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    if (phoneNumber !== '') {
      window.open(whatsappLink, '_blank');
    } else {
      alert('Por favor selecciona un servicio antes de cotizar.');
    }
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
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <div className="slider-form-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <div className="slide-content">
                <img src={image} alt={`Imagen ${index + 1}`} />
              </div>
            </div>
          ))}
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
                {selectedService === 'Empresas' && (
                  <>
                    <input
                      type="text"
                      name="nombreEmpresa"
                      placeholder="Nombre de la empresa"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                    <input
                      type="number"
                      name="numeroPasajeros"
                      placeholder="Número de pasajeros"
                      value={numeroPasajeros}
                      onChange={(e) => setNumeroPasajeros(e.target.value)}
                    />
                  </>
                )}

                {selectedService === 'Mascotas' && (
                  <select name="tipoMascota" value={nombre} onChange={(e) => setNombre(e.target.value)}>
                    <option value="">Seleccione el tipo de mascota</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Otro">Otro</option>
                  </select>
                )}

                {selectedService === 'Encomiendas' && (
                  <input
                    type="text"
                    name="dimensionesEncomienda"
                    placeholder="Dimensiones de la encomienda"
                    value={direccionOrigen}
                    onChange={(e) => setDireccionOrigen(e.target.value)}
                  />
                )}

                {selectedService === 'Particulares' && (
                  <input
                    type="number"
                    name="numeroPasajeros"
                    placeholder="Número de pasajeros"
                    value={numeroPasajeros}
                    onChange={(e) => setNumeroPasajeros(e.target.value)}
                  />
                )}

                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  name="direccionOrigen"
                  placeholder="Dirección de origen"
                  value={direccionOrigen}
                  onChange={(e) => setDireccionOrigen(e.target.value)}
                />
                <input
                  type="text"
                  name="direccionDestino"
                  placeholder="Dirección de destino"
                  value={direccionDestino}
                  onChange={(e) => setDireccionDestino(e.target.value)}
                />
                <input
                  type="date"
                  name="fechaIda"
                  placeholder="Fecha de ida"
                  value={fechaIda}
                  onChange={(e) => setFechaIda(e.target.value)}
                />
                <input
                  type="date"
                  name="fechaRegreso"
                  placeholder="Fecha de regreso"
                  value={fechaRegreso}
                  onChange={(e) => setFechaRegreso(e.target.value)}
                />
                <input
                  type="time"
                  name="horaIda"
                  placeholder="Hora de ida"
                  value={horaIda}
                  onChange={(e) => setHoraIda(e.target.value)}
                />
                <input
                  type="time"
                  name="horaRegreso"
                  placeholder="Hora de regreso"
                  value={horaRegreso}
                  onChange={(e) => setHoraRegreso(e.target.value)}
                />
                <input type="button" value="Cotizar" onClick={handleSendMessage} />
                <button onClick={handleGoBack}>Volver atrás</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
