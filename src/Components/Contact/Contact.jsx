import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('*');
  };

  return (
    <div className="contactContainer">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
       <div>
          <label>Nombre:</label>
        </div>
        <div>
          <input type="text" required />
        </div>
        <div>        
          <label>Email:</label>
        </div>
        <div>
          <input type="email" required />
        </div>
        <div>
          <label>Mensaje:</label>
        </div>
        <div>
          <textarea required></textarea>
        </div>
        <div>
        <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
