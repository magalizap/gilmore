import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({cart}) => {
  return (
    <nav className='teal darken-4'>
      <div className="nav-wrapper">
        <NavLink to='/' className="brand-logo">Gilmore</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to='/Shop/'>Shop</NavLink>
          </li>
          <li>
            <a href="badges.html">Nosotros</a>
          </li>
          <li>
            <a href="collapsible.html">Contacto</a>
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

/**
 * Cambiar los href por NavLinks, crear componentes para nosotros y contacto
 */