import './termsPayment.css';
import React from 'react';

const TermsPayment = () => {
  return (
    <div className='termsContainer'>
      <div className='termsCard'>
        <h2>Condiciones Generales</h2>
        <ul>
          <li>Tipo Transporte: Transporte Privado de Pasajeros (Exclusivo) - No Compartido</li>
          <li>Contrato de Transporte: Por tratarse de un transporte privado, la relación contractual se establece entre el contratante y nuestra empresa. En consecuencia, los itinerarios, horarios, pagos, etc. serán tratados entre ambas partes sin que intervengan en ello el conductor, terceras personas o pasajeros.</li>
          <li>Costos Incluidos: Todos los costos están incluidos en el precio: combustible, peajes, tag, estacionamientos y viáticos conductores.</li>
        </ul>
      </div>

      <div className='termsCard'>
        <h2>Condiciones de Pago</h2>
        <ul>
          <li>Transferencia Bancaria al momento de contratar el transporte o una vez finalizado previa aceptación por parte de la empresa.</li>
          <li>Tarjetas de Crédito o Débito Nacionales e Internacionales: Al momento de contratar el transporte directamente en nuestra página. (WebPay) - Recargo 4% sobre la tarifa informada.</li>
          <li>Tarjetas de Crédito o Débito a través de PayPal: Al momento de contratar el transporte directamente en nuestra página. (PayPal) - Recargo 15% sobre la tarifa informada.</li>
        </ul>
      </div>
    </div>
  );
}

export default TermsPayment;
