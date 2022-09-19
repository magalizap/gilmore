import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../containers/ItemCount/ItemCount'
const ItemDetail = ({product}) => { 
  const [count, setCount] = useState(0)
  return (

    <div className='card'>
      <img className='imgProductos' src= {product.imagen} alt='imagen'/>
      <h1 className='productoTitle'>{product.nombre}</h1>
      <footer className='footerProducto'>{product.stockDescripcion}</footer>
      {
        count === 0 ? 
        <ItemCount stock={product.stock} onAdd={()=>{
          setCount()
        }} />
        : <Link to='/cart/'>Terminar Compra</Link>
      }

    </div>

  )
}

export default ItemDetail

