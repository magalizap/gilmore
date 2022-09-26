import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../app/CartContext'
import ItemCount from '../../containers/ItemCount/ItemCount'

const ItemDetail = ({product}) => { 
  const [count, setCount] = useState(true)
  const {addToCart} = useCartContext()

  const onAdd = (quantity) =>{
    setCount(false)
    addToCart(product, quantity)
    console.log(`se han agregado ${quantity} al carrito`)
  }

  return (

    <div className='card'>
      <img className='imgProductos' src= {product.imagen} alt='imagen'/>
      <h1 className='productoTitle'>{product.nombre}</h1>
      <p className='number'>${product.precio}</p>
      <footer className='footerProducto'>{product.stockDescripcion}</footer>

      {count ? <ItemCount stock={product.stock}  onAdd={onAdd} /> :
      <Link to='/cart/'>Terminar Compra</Link>}
      

    </div>

  )
}

export default ItemDetail



