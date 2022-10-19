import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../app/CartContext'
import ItemCount from '../../containers/ItemCount/ItemCount'
import './ItemDetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({product}) => { 
  const [count, setCount] = useState(true)
  const {addToCart} = useCartContext()

  const onAdd = (quantity) =>{
    setCount(false)
    addToCart(product, quantity)
    console.log(`se han agregado ${quantity} al carrito`) // agregar acá el alert
    toast.success(`se agregaron ${quantity} al carrito`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
     <main className='imgbq'>
        <div className='cardDetail'>
          <img className='imgProductos' src= {product.imagen} alt='imagen'/>
          <div className='cardInfoDetail' >
            <h1 className='productoTitle'>{product.nombre}</h1>
            <h2 className='number'>${new Intl.NumberFormat().format((product.precio))}</h2>
            <p className='cardDescription'>{product.descripcion}</p>
            <footer className='footerProducto'> Stock disponible: {product.stock}</footer>
            {count ? <ItemCount stock={product.stock}  onAdd={onAdd} /> : 
            <Link className='link' to='/cart/'>Ver carrito</Link>}
          </div>
        </div>
        <ToastContainer />
    </main> 
  )
}

export default ItemDetail



