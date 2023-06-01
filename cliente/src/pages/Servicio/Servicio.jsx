import "./Servicio.css";
import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const Servicio = () => {
  return (
    <div className="servicio">
      <Navbar />
      <Header />
      <div className="content">
        <div className="section">
          <h2>PARTICULARES</h2>
          <div className="card">
            <h3>MATRIMONIOS:</h3>
            <p>Transporte de invitados a matrimonios de sus domicilios al lugar de la ceremonia, transporte al lugar de la fiesta y retorno a sus domicilios. (Servicio Puerta a Puerta)</p>
          </div>
          <div className="card">
            <h3>EVENTOS ESPECIALES:</h3>
            <p>Transporte de invitados a Bautizos, Cumpleaños, Fiesta Empresa, Partidos de Futbol, Presentaciones Artísticas y Culturales, Conciertos entre otros.</p>
          </div>
          <div className="card">
            <h3>VIAJES INTERREGIONALES</h3>
            <p>PLAYA:</p>
            <ul>
              <li>Transporte a Regiones: Valparaíso y Viña del Mar</li>
              <li>Transporte Santiago a Valparaiso, Viña del Mar, Reñaca, Concón, Quintay, Algarrobo, San Alfonso del Mar, El Quisco, Maitencillo.</li>
            </ul>
            <p>NIEVE:</p>
            <p>Transporte Valle Nevado - Farellones - El Colorado. Transporte privado desde domicilios - hoteles - Aeropuerto a Valle Nevado - Farellones - El Colorado y la Parva.</p>
            <p>CAMPO:</p>
            <p>Transporte a regiones del sur (falta detallar).</p>
          </div>
        </div>
        <div className="section">
          <h2>AEROPUERTO</h2>
          <div className="card">
            <p>TRANSLADO DESDE TODAS LAS COMUNAS DE SANTIAGO AL AEROPUERTO.</p>
          </div>
        </div>
        <div className="section">
          <h2>CASINOS</h2>
          <div className="card">
            <p>ENJOY: SANTIAGO-VIÑA DEL MAR, SANTIAGO- SAN ANTONIO DESDE DOMICIOLIO AEROPUERTO HOTELES.</p>
          </div>
          <div className="card">
            <p>MONTICCELLO: SAN FRANCISCO DE MOSTAZAL, DESDE AEROPUERTO DOMICILIO HOTEL.</p>
          </div>
        </div>
        <div className="section">
          <h2>CENTRO DE EVENTOS</h2>
          <div className="card">
            <p>(falta detallar)</p>
          </div>
        </div>
        <div className="section">
          <h2>FUNERALES</h2>
          <div className="card">
            <p>ACOMPAÑAMIENTO IGLESIA O DOMICLIO AL CEMENTERIO.</p>
          </div>
        </div>
        <div className="section">
          <h2>PRIVADOS</h2>
          <div className="card">
            <p>EMPRESAS PRIVADAS</p>
          </div>
          <div className="card">
            <p>EMPRESAS PUBLICAS</p>
          </div>
          <div className="card">
            <p>UNIVERSIDADES</p>
          </div>
          <div className="card">
            <p>DIRIGENTES DE CLUBES DEPORTIVOS</p>
          </div>
        </div>
        <div className="section">
          <h2>TOURS</h2>
          <div className="card">
            <p>ISLA NEGRA- POMAIRE</p>
          </div>
          <div className="card">
            <p>SANTIAGO - SANTUARIO LO VASQUEZ</p>
          </div>
          <div className="card">
            <p>SANTIAGO - SANTUARIO LOS ANDES</p>
          </div>
          <div className="card">
            <p>SANTIAGO-LITORAL CENTRAL</p>
          </div>
          <div className="card">
            <p>VALPARAISO-VIÑA DEL MAR</p>
          </div>
          <div className="card">
            <p>TOUR INCLUYEN: Seguro Pasajeros Todos los costos de transporte: Combustible, peajes, tags, estacionamientos y viático conductor.</p>
          </div>
          <div className="card">
            <p>TOUR NO INLCUYEN: Almuerzos, consumos de alimentos, entradas a museos y cualquier otro insumo que no se mencione en este programa.</p>
          </div>
        </div>
        <div className="section">
          <h2>CONDICIONES GENERALES Y FORMAS DE PAGO</h2>
          <div className="card">
            <p>Tipo Transporte: Transporte Privado de Pasajeros (Exclusivo) - No Compartido</p>
          </div>
          <div className="card">
            <p>Contrato de Transporte: Por tratarse de un transporte privado, la relación contractual se establece entre el contratante y nuestra empresa. En consecuencia, los itinerarios, horarios, pagos, etc. serán tratados entre ambas partes sin que intervengan en ello el conductor, terceras personas o pasajeros.</p>
          </div>
          <div className="card">
            <p>Costos Incluidos: Todos los costos están incluidos en el precio: combustible, peajes, tag, estacionamientos y viáticos conductores.</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Trans Lines. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Servicio;
