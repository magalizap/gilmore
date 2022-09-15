import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../containers/ItemCount/ItemCount'
const ItemDetail = ({product}) => {

  return (

    <div className='card'>
      <img className='imgProductos' src= {product.imagen} alt='imagen'/>
      <h1 className='productoTitle'>{product.nombre}</h1>
      <Link to={`/Item/:id`} className='botonProducto'>Ver detalle del producto</Link>
      <footer className='footerProducto'>{product.stockDescripcion}</footer>
      <ItemCount stock={product.stock} initial={1} onAdd={(valor)=>alert("Añadiste "+ valor + " productos al carrito")}/>
    </div>

  )
}

export default ItemDetail

