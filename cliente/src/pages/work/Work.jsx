import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Work.css';

const Work = () => {
  const form = useRef();
  const [formPart, setFormPart] = useState(1);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [aceptarCondiciones, setAceptarCondiciones] = useState(false);
  const [sistemaOperativo, setSistemaOperativo] = useState('');
  const [disponibilidadHoraria, setDisponibilidadHoraria] = useState('');
  const [direccion, setDireccion] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [genero, setGenero] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [estudiandoActualmente, setEstudiandoActualmente] = useState('');

  const handleNextPart = () => {
    if (aceptarCondiciones) {
      setFormPart(2);
    }
  };

  const handlePreviousPart = () => {
    setFormPart(1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Configuración de EmailJS
    emailjs.init("YOUR_USER_ID");

    emailjs
      .send("service_kl5yhaa", "template_2c8lrbx", data)
      .then((result) => {
        console.log(result.text);
        alert("Solicitud enviada correctamente.");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Hubo un error al enviar la solicitud.");
      });
  };

  return (
    <div className="w-nav">
      <Navbar />
      <Header />
      <div className="form-container">
        <div className="form-part">
          <h2>Trabaja con Nosotros</h2>
          <form ref={form} onSubmit={handleFormSubmit}>
            {formPart === 1 && (
              <>
                {/* Formulario Parte 1 */}
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
                <input
                  type="date"
                  name="fechaNacimiento"
                  placeholder="Fecha de Nacimiento"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                />
                <input
                  type="email"
                  name="correoElectronico"
                  placeholder="Correo Electrónico"
                  value={correoElectronico}
                  onChange={(e) => setCorreoElectronico(e.target.value)}
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
                <label>
                  <input
                    type="checkbox"
                    name="aceptarCondiciones"
                    checked={aceptarCondiciones}
                    onChange={(e) => setAceptarCondiciones(e.target.checked)}
                  />
                  Aceptar condiciones
                </label>
                <div className="form-buttons">
                  <button type="button" onClick={handleNextPart} disabled={!aceptarCondiciones}>
                    Siguiente
                  </button>
                </div>
              </>
            )}

            {formPart === 2 && (
              <>
                {/* Formulario Parte 2 */}
                <label>
                  Sistema Operativo:
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="sistemaOperativo"
                      value="iOS"
                      checked={sistemaOperativo === 'iOS'}
                      onChange={(e) => setSistemaOperativo(e.target.value)}
                    />
                    iOS
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sistemaOperativo"
                      value="Android"
                      checked={sistemaOperativo === 'Android'}
                      onChange={(e) => setSistemaOperativo(e.target.value)}
                    />
                    Android
                  </label>
                </label>

                <textarea
                  name="disponibilidadHoraria"
                  placeholder="Disponibilidad Horaria"
                  value={disponibilidadHoraria}
                  onChange={(e) => setDisponibilidadHoraria(e.target.value)}
                ></textarea>

                <input
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                />

                <input
                  type="text"
                  name="region"
                  placeholder="Región"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />

                <input
                  type="text"
                  name="comuna"
                  placeholder="Comuna"
                  value={comuna}
                  onChange={(e) => setComuna(e.target.value)}
                />

                <input
                  type="text"
                  name="genero"
                  placeholder="Género"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                />

                <label>
                  Tipo de Vehículo:
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="tipoVehiculo"
                      value="City Car"
                      checked={tipoVehiculo === 'City Car'}
                      onChange={(e) => setTipoVehiculo(e.target.value)}
                    />
                    City Car
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="tipoVehiculo"
                      value="Sedán"
                      checked={tipoVehiculo === 'Sedán'}
                      onChange={(e) => setTipoVehiculo(e.target.value)}
                    />
                    Sedán
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="tipoVehiculo"
                      value="SUV"
                      checked={tipoVehiculo === 'SUV'}
                      onChange={(e) => setTipoVehiculo(e.target.value)}
                    />
                    SUV
                  </label>
                </label>

                <label>
                  ¿Estás estudiando actualmente?
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="estudiandoActualmente"
                      value="Sí"
                      checked={estudiandoActualmente === 'Sí'}
                      onChange={(e) => setEstudiandoActualmente(e.target.value)}
                    />
                    Sí
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="estudiandoActualmente"
                      value="No"
                      checked={estudiandoActualmente === 'No'}
                      onChange={(e) => setEstudiandoActualmente(e.target.value)}
                    />
                    No
                  </label>
                </label>

                <div className="form-buttons">
                  <button className='go-back-button' type="button" onClick={handlePreviousPart}>
                    Volver
                  </button>
                  <input type="submit" value="Enviar Solicitud" />
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
