import './aboutUs.css';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='aboutContainer'>
      <div className='aboutCard'>
        <h2>Quiénes Somos</h2>
        <p>Somos una empresa dedicada al transporte de pasajeros y a entregar una experiencia de viaje. Con modernos vehículos y excelente atención a nuestros pasajeros.</p>
      </div>

      <div className='aboutCard'>
        <h2>Misión</h2>
        <p>Trabajamos con los más altos estándares de calidad y de Seguridad, atravez de capacitaciones constantes a nuestros colaboradores para la Satisfacción de nuestros clientes.</p>
      </div>

      <div className='aboutCard'>
        <h2>Visión</h2>
        <p>Ser reconocida como una de las mejores empresas de Transporte que Otorga Servicios de Calidad Comodidad y Confianza en todo el Territorio Nacional.</p>
      </div>

      <div className='aboutCard'>
        <h2>Correo Corporativo</h2>
        <p>contacto@travelslines.cl</p>
      </div>
    </div>
  );
}

export default AboutUs;
