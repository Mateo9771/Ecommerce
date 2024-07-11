import React from 'react'
import './NavBar.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoIosTabletPortrait } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
      
      <div className='topNavBar col-11'>
      
      <div> 
      <Link to='/'><h3>E-C</h3></Link>
      </div>

      <div className='categoryNavBar'>
      <Link to='/'>Inicio</Link>
          <Link to='/about'>Quienes somos</Link>
          <Link to='/contact'>Contacto</Link>
          <Link to='/login'>Inicio sesión</Link>
      </div>

      <div>
            <CartWidget/>
      </div>

      </div>

      <div className='navButton'>
            <NavLink to={'/category/celular'} className='Button'><IoPhonePortraitOutline className='iconButton' size="30px" />Celulares</NavLink>
            <NavLink to={'/category/tablet'} className='Button'><IoIosTabletPortrait className='iconButton' size="30px" />Tablets</NavLink>
            <NavLink to={'/category/notebook'} className='Button'><IoIosLaptop className='iconButton' size="30px" />Notebooks</NavLink>
      </div>
     
    </nav>
  )
}

export default Navbar
