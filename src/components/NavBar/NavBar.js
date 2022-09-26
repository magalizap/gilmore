//import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useCartContext } from '../../app/CartContext'

const NavBar = () => {
  const {totalQty, totalPrice} = useCartContext()
  console.log(totalPrice)
  return (
    <nav className='teal darken-4'>
      <div className="nav-wrapper">
        <NavLink to='/' className="brand-logo">Gilmore</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to='/ItemListContainer/'>Catálogo</NavLink>
          </li>
          <li>
            <NavLink to='/categoria/campera' >Camperas</NavLink>
          </li>
          <li>
            <NavLink to='/categoria/remera'>Remeras</NavLink>
          </li>
          <li>
            <NavLink to='/Nosotros/'>Nosotros</NavLink>
          </li>
          <li>
            <NavLink to='/Contacto/'>Contacto</NavLink>
          </li>
          <li className='flex'>
            
           <NavLink  to='/cart/'><CartWidget/></NavLink>
            <p className='number'>{totalQty}</p>
            <p className='number'>${totalPrice}</p>
          </li>
        </ul>
      </div>

    </nav>  
    
  )
}


        

export default NavBar

