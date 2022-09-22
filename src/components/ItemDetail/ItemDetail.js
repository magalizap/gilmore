import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../app/CartContext'

import ItemCount from '../../containers/ItemCount/ItemCount'
const ItemDetail = ({product}) => { 
  const [count, setCount] = useState(true)
  const {addItem} = useContext(AppContext)

  const onAdd = (quantity) =>{
    setCount(false)
    addItem(product, quantity)
    console.log(`se han agregado ${quantity} al carrito`)
  }

  return (

    <div className='card'>
      <img className='imgProductos' src= {product.imagen} alt='imagen'/>
      <h1 className='productoTitle'>{product.nombre}</h1>
      <footer className='footerProducto'>{product.stockDescripcion}</footer>
      {
        count ? 
        <ItemCount stock={product.stock}  onAdd={onAdd} />
        : <Link to='/cart/'>Terminar Compra</Link>
      }

    </div>

  )
}

export default ItemDetail



