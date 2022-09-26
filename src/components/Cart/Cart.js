import { useCartContext } from '../../app/CartContext'
const Cart = () => {
  const {cart, removeItem, emptyCart} = useCartContext()
  const deleteFromCart = (id) =>{removeItem(id)}
  const deleteCart = () =>{emptyCart()}
  return (
    <div>
        <p>SOY EL CART</p>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item, index) => {
                return (
                  <li key={index}>
                  <p>{item.nombre}</p>
                  <p>{item.quantity}</p>
                  <p>{item.quantity * item.precio}</p>
                  <button onClick={() =>deleteFromCart(item)}>Eliminar del carrito</button>
                </li>
                )
              })}
            </ul>
            <button onClick={() =>deleteCart()}>Vaciar carrito</button>
          </>
        ) :( <p>Cart is empty</p>)}

    </div>
  )
}

export default Cart

