import { useCartContext } from '../../app/CartContext'
import { Link } from 'react-router-dom'
import tachito from '../../assets/img/papelera.png'
import './Cart.css'


const Cart = () => {
  const {cart, removeItem, emptyCart, totalQty, totalPrice} = useCartContext()
  const deleteFromCart = (id) =>{removeItem(id)}
  const deleteCart = () =>{emptyCart()}

  return (
    <main className='imgbq'>
      <div>
        <p className='title'>CARRITO DE COMPRAS</p>
        <div className='tamañoDesktop'>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => {
                
                return (
           
                  <li key={item.id}>

                    <div className='alinearCart'>
                      <img className='imgCart' src={item.imagen} alt='img'></img>
                      <section className='colum'>
                      <div  className='flex'>
                      <p className='nombre'>{item.nombre}</p>
                      <button className='button' onClick={() =>deleteFromCart(item)}>
                        <img className='eliminar' src={tachito} alt={tachito}></img>
                      </button>
                      </div>
                      <div className='flexRes'>
                      <p className='margin'>Cantidad: {item.quantity}</p>                       
                      <p className='margin'>Precio: ${new Intl.NumberFormat().format((item.precio))}</p> 
                      </div>                       
                      </section>                     
                    </div>
                  </li>

                  
                )
              })} 
              
            </ul>
            <section className='colum2'>
              <p>Cantidad total: {totalQty}</p>
              <p>Precio total: ${new Intl.NumberFormat().format(totalPrice)}</p>
              <div className='flex'>
                <button className='buttoncart' onClick={() =>deleteCart()}>Vaciar carrito</button>
                <button className='buttoncart'><Link to='/login' className='link'>Continuar</Link> </button>    
              </div>
            </section>
          </>
        ) :(  <>
                <section className='backround'>
                <p className='title'>No hay productos dentro</p> 
                <Link to='/ItemListContainer/' className='link2'>Seguir comprando</Link>
                </section>
              </>)}
              
        </div>  
      </div>        
    </main>
  )
}

export default Cart