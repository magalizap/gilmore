import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../app/CartContext'
import ItemCount from '../../containers/ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({product}) => { 
  const [count, setCount] = useState(true)
  const {addToCart} = useCartContext()

  const onAdd = (quantity) =>{
    setCount(false)
    addToCart(product, quantity)
    console.log(`se han agregado ${quantity} al carrito`)
  }

  return (
     <main className='imgbq'>
      <div className='cardDetail'>
        <img className='imgProductos' src= {product.imagen} alt='imagen'/>
        <div className='cardInfoDetail' >
          <h1 className='productoTitle'>{product.nombre}</h1>
          <h2 className='number'>${product.precio}</h2>
          <p className='cardDescription'>{product.descripcion}</p>
          <footer className='footerProducto'> Stock disponible: {product.stock}</footer>
          {count ? <ItemCount stock={product.stock}  onAdd={onAdd} /> : 
          <Link className='link' to='/cart/'>Terminar compra</Link>}
        </div>
      </div>
    </main> 
  )
}

export default ItemDetail



