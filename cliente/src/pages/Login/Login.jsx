import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import "./Login.scss";

const Login = () => {
  return (
    <div className='login'>
        <h1 className="loginTitle">Iniciar Sesión</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton">
                    <GoogleIcon className='icon'/>
                    Google
                </div>
                <div className="loginButton">
                    <FacebookIcon className='icon'/>
                    Facebook
                </div>
                <div className="loginButton">
                    <AppleIcon className='icon'/>
                    Apple
                </div>
            </div>
            <div className="center">
                <div className="line" />
                <div className="or"></div>
            </div>
            <div className="right">
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Clave" />
                <button>Ingresar</button>
            </div>
        </div>
    </div>
  )
}

export default Login