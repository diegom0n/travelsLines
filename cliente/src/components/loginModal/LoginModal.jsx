import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el formulario de inicio de sesión
    // Por ejemplo, enviar una solicitud al servidor
  };

  return (
    <div className="login-modal">
      <button className="login-button" onClick={toggleModal}>
        Iniciar sesión
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleFormSubmit}>
              {/* Aquí puedes agregar los campos del formulario */}
              <label>
                Usuario:
                <input type="text" name="username" />
              </label>
              <label>
                Contraseña:
                <input type="password" name="password" />
              </label>
              <button type="submit">Iniciar sesión</button>
            </form>
            <button className="close-button" onClick={toggleModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
