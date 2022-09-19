//import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = ({cart}) => {
  
  return (
    <nav className='teal darken-4'>
      <div className="nav-wrapper">
        <NavLink to='/' className="brand-logo">Gilmore</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to='/ItemListContainer/'>Shop</NavLink>
          </li>
          <li>
            <NavLink to='/categoria/camperas' >Camperas</NavLink>
          </li>
          <li>
            <NavLink to='/categoria/remeras'>Remeras</NavLink>
          </li>
          <li>
            <NavLink to='/Nosotros/'>Nosotros</NavLink>
          </li>
          <li>
            <NavLink to='/Contacto/'>Contacto</NavLink>
          </li>
          <li className='flex'>
            <CartWidget/>
            <p>{cart}</p>
          </li>
        </ul>
      </div>

    </nav>  
    
  )
}


        

export default NavBar

