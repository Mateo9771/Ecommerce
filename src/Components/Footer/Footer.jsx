import React from 'react'
import './Footer.css'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className='footerFooter col-12'>

        <div className='redesFooter'>
        <p>Nuestras redes sociales:</p>
        <SlSocialInstagram color='#776d6d' size='25px'/>
        <SlSocialFacebook color='#776d6d' size='25px'/>
        <SlSocialYoutube color='#776d6d' size='25px'/>
        </div>

        <div className='optionFooter'>
            <a href="">Inicio</a>
            <a href="">Quienes Somos</a>
            <a href="">Inicio sesión</a>
        </div>

        <div className='gpsFooter'>
            <p>Nos encontramos en: </p>
            <p>Calle falsa 123, Springfield</p>
        </div>
    </footer>
  )
}

export default Footer

