import { useCartContext } from '../../app/CartContext'
import { Link } from 'react-router-dom'
//import FormOrder from '../FormOrder/FormOrder'
import iconoeliminar from '../../assets/img/carrito-eliminar.png'
import './Cart.css'
const Cart = () => {
  const {cart, removeItem, emptyCart, totalQty, totalPrice} = useCartContext()
  const deleteFromCart = (id) =>{removeItem(id)}
  const deleteCart = () =>{emptyCart()}

  return (
    <main className='imgbq'>
        <p className='title'>CARRITO DE COMPRAS</p>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item, index) => {
                
                return (
                  <>                 
                  <li key={'index:' + index}>

                    <div className='alinearCart'>
                      <img className='imgCart' src={item.imagen} alt='img'></img>
                      <p>{item.nombre}</p>
                      <button className='button' onClick={() =>deleteFromCart(item)}>
                        <img className='eliminar' src={iconoeliminar} alt={iconoeliminar}></img>
                      </button>
                      
                    </div>
                    <section className='alinearCart'>
                        <p className='margin'>Cantidad: {item.quantity}</p>
                        
                        <p className='margin'>Precio: ${item.quantity * item.precio}</p>    
                    </section>
                  </li>
                  </>
                  
                )
              })} 
              
            </ul>
            <p>Cantidad total: {totalQty}</p>
            <p>Precio total: ${totalPrice}</p>
            <button className='buttoncart' onClick={() =>deleteCart()}>Vaciar carrito</button>
            <Link to='/form' >Terminar compra</Link>     
          </>
        ) :( <p>Cart is empty</p>) && (<Link to='/ItemListContainer/' >Seguir comprando</Link>)}
              
        
              
    </main>
  )
}

export default Cart