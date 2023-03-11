import React from 'react'
import './navbar.css';
import image from '../images/image.avif'
import Rules from './Rules';

function Navbar() {
  return (
   <div>
    <div className='navbar' style={{backgroundImage:`url(${image})`}}><span className='nav-text'>Snake - Water - Gun</span></div>
    </div>

  )
}

export default Navbar