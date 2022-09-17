//import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = ({category, cart}) => {
  
  return (
    <nav className='teal darken-4'>
      <div className="nav-wrapper">
        <NavLink to='/' className="brand-logo">Gilmore</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to='/ItemListContainer/'>Shop</NavLink>
          </li>
          <li>
            <NavLink to={`/categoria/${category.categoria}` }>Camperas</NavLink>
          </li>
          <li>
            <NavLink to={`/categoria/${category.categoria}` }>Remeras</NavLink>
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

/**
 * Cambiar los href por NavLinks, crear componentes para nosotros y contacto
 * 
 * 
 * 
* /// codigo de prueba, usar la lógica dentro del NavBar
      import { useEffect, useState } from 'react'
      import { useParams } from 'react-router-dom'
      import { getProductos } from '../../app/api'

      const [category, setCategory] = useState()
      const {caregoryId} = useParams() 

      useEffect(() =>{
        getProductos().then(res => setCategory(res.filter((category) => category.categoria == caregoryId)))
      }, [])
 */