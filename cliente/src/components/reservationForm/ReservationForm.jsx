import './ReservationForm.css'
import { useState } from 'react';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';

const ReservationForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la reserva al servidor o hacer otras operaciones
    console.log('Reserva enviada:', {
      pickupLocation,
      destination,
      date,
      time
    });
  };

  return (
    <div className="resFormContainer">
      <div className="resFormWrapper">

        <form onSubmit={handleSubmit} className='resForm'>
          <label>
            Lugar de recogida:
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className='resFormInput'
            />
          </label>

          <label>
            Destino:
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='resFormInput'
            />
          </label>

          <label>
            Fecha:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='resFormInput'
            />
          </label>

          <label>
            Hora:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className='resFormInput'
            />
          </label>

          <div><button type="submit" className='formButton'>Reservar</button></div>
        </form>
        
      </div>
    </div>
  );
};

export default ReservationForm;
