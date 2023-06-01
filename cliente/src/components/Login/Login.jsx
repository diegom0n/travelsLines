import React, { useState } from 'react';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import CloseIcon from '@mui/icons-material/Close';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí
    console.log('Iniciar sesión con:', email, password);
    onClose(); // Cierra la tarjeta de inicio de sesión al iniciar sesión
  };

  const handleClose = () => {
    onClose(); // Cierra la tarjeta de inicio de sesión
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="close-button" onClick={handleClose}>
          <CloseIcon />
        </div>
        <h2 className="login-title">{isRegistering ? 'Registro' : 'Iniciar Sesión'}</h2>
        <div className="social-buttons">
          <button className="google-button">
            <GoogleIcon className="button-icon" />
            Iniciar sesión con Google
          </button>
          <button className="facebook-button">
            <FacebookIcon className="button-icon" />
            Iniciar sesión con Facebook
          </button>
          <button className="apple-button">
            <AppleIcon className="button-icon" />
            Iniciar sesión con Apple
          </button>
        </div>
        <div className="divider">
          <div className="line"></div>
          <div className="or">o</div>
          <div className="line"></div>
        </div>
        <form className="login-form">
          {isRegistering && (
            <input
              type="text"
              placeholder="Nombre completo"
              value={email}
              onChange={handleEmailChange}
            />
          )}
          <input
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          {isRegistering ? (
            <button className="register-button" onClick={handleLogin}>
              Registrarse
            </button>
          ) : (
            <button className="login-button" onClick={handleLogin}>
              Ingresar
            </button>
          )}
        </form>
        <div className="toggle-register">
          <button className="register-toggle-button" onClick={handleToggleRegister}>
            {isRegistering ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
