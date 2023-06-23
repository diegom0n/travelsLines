import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Work.css';

const Work = () => {
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

  const handleFormSubmit = () => {
    if (
      nombre &&
      apellido &&
      fechaNacimiento &&
      correoElectronico &&
      telefono &&
      aceptarCondiciones &&
      sistemaOperativo &&
      disponibilidadHoraria &&
      direccion &&
      region &&
      comuna &&
      genero &&
      tipoVehiculo &&
      estudiandoActualmente
    ) {
      console.log('Información del formulario:');
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Fecha de Nacimiento:', fechaNacimiento);
      console.log('Correo Electrónico:', correoElectronico);
      console.log('Teléfono:', telefono);
      console.log('Aceptar Condiciones:', aceptarCondiciones);
      console.log('Sistema Operativo:', sistemaOperativo);
      console.log('Disponibilidad Horaria:', disponibilidadHoraria);
      console.log('Dirección:', direccion);
      console.log('Región:', region);
      console.log('Comuna:', comuna);
      console.log('Género:', genero);
      console.log('Tipo de Vehículo:', tipoVehiculo);
      console.log('Estudiando Actualmente:', estudiandoActualmente);
    } else {
      alert('Por favor, completa todos los campos antes de enviar la solicitud.');
    }
  };

  return (
    <div className="w-nav">
      <Navbar />
      <Header />
      <div className="form-container">
        {formPart === 1 && (
          <div className="form-part">
            <h2>Trabaja con Nosotros</h2>
            <form>
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
            </form>
          </div>
        )}

        {formPart === 2 && (
          <div className="form-part">
            <h2>Trabaja con Nosotros</h2>
            <form>
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
                <button type="button" onClick={handleFormSubmit}>
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Work;
