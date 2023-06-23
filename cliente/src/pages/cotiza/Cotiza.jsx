import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './cotiza.css';

const Cotiza = () => {
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
            <button className="go-back-button" onClick={handleGoBack}>Volver atrás</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cotiza;
