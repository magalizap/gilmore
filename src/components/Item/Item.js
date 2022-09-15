import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../containers/ItemCount/ItemCount'


const item = ({producto}) => {

  return (
    <div className='card'>
       <img className='imgProductos' src= {producto.imagen} alt='imagen'/>
       <h1 className='productoTitle'>{producto.nombre}</h1>
       <Link to={`/Item/${item.id}`} className='botonProducto'>Ver detalle del producto</Link>
       <footer className='footerProducto'>{producto.stockDescripcion}</footer>
       <ItemCount stock={producto.stock} initial={1} onAdd={(valor)=>alert("Añadiste "+ valor + " productos al carrito")}/>
    </div>
  )
}

export default item