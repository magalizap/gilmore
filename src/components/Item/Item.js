
import { Link } from 'react-router-dom'



const Item = ({producto}) => {
  
  return (
    <div className='card'>
       <img className='imgProductos' src= {producto.imagen} alt='imagen'/>
       <h1 className='productoTitle'>{producto.nombre}</h1>
       <Link to={`/item/${producto.id}`} className='botonProducto'>Ver detalle del producto</Link>
       <footer className='footerProducto'>{producto.stockDescripcion}</footer>

    </div>
  )
}

export default Item