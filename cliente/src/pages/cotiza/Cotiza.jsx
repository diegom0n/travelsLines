import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './cotiza.css';

const Cotiza = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccionOrigen, setDireccionOrigen] = useState('');
  const [direccionDestino, setDireccionDestino] = useState('');
  const [dimensionesEncomienda, setDimensionesEncomienda] = useState('');
  const [fechaIda, setFechaIda] = useState('');
  const [horaIda, setHoraIda] = useState('');
  const [showCompanyName, setShowCompanyName] = useState(false);
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [showPassengerNumber, setShowPassengerNumber] = useState(true);
  const [numeroPasajeros, setNumeroPasajeros] = useState('');
  const [tipoMascota, setTipoMascota] = useState('');

  const handleServiceSelection = (service) => {
    setSelectedService(service);

    if (service === 'Empresas') {
      setShowCompanyName(true);
      setShowPassengerNumber(true);
    } else if (service === 'Mascotas') {
      setShowCompanyName(false);
      setShowPassengerNumber(false);
    } else if (service === 'Encomiendas') {
      setShowCompanyName(false);
      setShowPassengerNumber(false);
    } else {
      setShowCompanyName(false);
      setShowPassengerNumber(true);
    }
  };

  const numberMap = {
    Empresas: '56977162821', // Reemplaza con el número de WhatsApp para el servicio de empresas
    Mascotas: '56977162821', // Reemplaza con el número de WhatsApp para el servicio de mascotas
    Encomiendas: '56953242008', // Reemplaza con el número de WhatsApp para el servicio de encomiendas
    Particulares: '56953242008' // Reemplaza con el número de WhatsApp para el servicio de particulares
  };
  
  const handleSendMessage = () => {
    if (!selectedService) {
      return;
    }
  
    let message = `Hola, estoy interesado en el servicio de ${selectedService}.\n`;
  
    if (selectedService === 'Empresas') {
      message += `Nombre de la empresa: ${nombreEmpresa}\n`;
      message += `Número de pasajeros: ${numeroPasajeros}\n`;
    } else if (selectedService === 'Mascotas') {
      message += `Tipo de mascota: ${tipoMascota}\n`;
    } else if (selectedService === 'Encomiendas') {
      message += `Dimensiones de la encomienda: ${dimensionesEncomienda}\n`;
    } else {
      message += `Número de pasajeros: ${numeroPasajeros}\n`;
    }
  
    message += `Nombre: ${nombre}\n`;
    message += `Email: ${email}\n`;
    message += `Teléfono: ${telefono}\n`;
    message += `Dirección de origen: ${direccionOrigen}\n`;
    message += `Dirección de destino: ${direccionDestino}\n`;
    message += `Fecha de ida: ${fechaIda}\n`;
    message += `Hora de ida: ${horaIda}`;
  
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = numberMap[selectedService] || ''; // Obtén el número de WhatsApp correspondiente al servicio seleccionado
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    if (phoneNumber) {
      window.open(whatsappLink, '_blank');
    } else {
      alert('No se ha encontrado un número de WhatsApp válido para el servicio seleccionado.');
    }
  };
  

  const handleGoBack = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="cotiza-form">
        <h2>Cotiza tu viaje</h2>
        {!selectedService ? (
          <div className="service-selection">
            <h3>Selecciona el tipo de servicio:</h3>
            <div className="service-buttons">
              <button onClick={() => handleServiceSelection('Empresas')}>EMPRESAS</button>
              <button onClick={() => handleServiceSelection('Mascotas')}>MASCOTAS</button>
              <button onClick={() => handleServiceSelection('Encomiendas')}>ENCOMIENDAS</button>
              <button onClick={() => handleServiceSelection('Particulares')}>PARTICULARES</button>
            </div>
          </div>
        ) : (
          <form>
            <h3>Tipo de servicio seleccionado: {selectedService}</h3>
            {showCompanyName && (
              <input
                type="text"
                name="nombreEmpresa"
                placeholder="Nombre de la empresa"
                value={nombreEmpresa}
                onChange={(e) => setNombreEmpresa(e.target.value)}
              />
            )}
            {selectedService === 'Mascotas' && (
              <select name="tipoMascota" value={tipoMascota} onChange={(e) => setTipoMascota(e.target.value)}>
                <option value="">Seleccione el tipo de mascota</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
              </select>
            )}
            <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="number" name="telefono" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            <input type="text" name="direccionOrigen" placeholder="Dirección de origen" value={direccionOrigen} onChange={(e) => setDireccionOrigen(e.target.value)} />
            <input type="text" name="direccionDestino" placeholder="Dirección de destino" value={direccionDestino} onChange={(e) => setDireccionDestino(e.target.value)} />
            {selectedService === 'Encomiendas' && (
              <input
                type="text"
                name="dimensionesEncomienda"
                placeholder="Dimensiones de la encomienda"
                value={dimensionesEncomienda}
                onChange={(e) => setDimensionesEncomienda(e.target.value)}
              />
            )}
            {showPassengerNumber && selectedService !== 'Encomiendas' && (
              <input
                type="number"
                name="numeroPasajeros"
                placeholder="Número de pasajeros"
                value={numeroPasajeros}
                onChange={(e) => setNumeroPasajeros(e.target.value)}
              />
            )}
            <input type="date" name="fechaIda" placeholder="Fecha de ida" value={fechaIda} onChange={(e) => setFechaIda(e.target.value)} />
            <input type="time" name="horaIda" placeholder="Hora de ida" value={horaIda} onChange={(e) => setHoraIda(e.target.value)} />
            <input type="button" value="Cotizar" onClick={handleSendMessage} />
            <button className="go-back-button" onClick={handleGoBack}>Volver atrás</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cotiza;
