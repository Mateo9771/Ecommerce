import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('*');
  };

  return (
    <div className="loginContainer">
        <div className='CardLogin'>
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          </div>
          <div>
          <input type="text" required />
          </div>

        <div>
          <label>Contraseña:</label>
          </div>
          <div>
          <input type="password" required />
        </div>
        <div>
        <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
