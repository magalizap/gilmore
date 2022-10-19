import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const {Provider} = CartContext

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) =>{
  const [cart, setCart] = useState([])
  const [totalQty, setTotalQty] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const addToCart = (product, quantity) =>{
    setTotalQty(totalQty + quantity)
    setTotalPrice(totalPrice + product.precio * quantity )
    
    if(isInCart(product.id)){
      
      const newCart = cart.map((item) =>{
        if(item.id === product.id){
          return {...item, quantity: item.quantity + quantity}
        }else{
          return item
        }
      })
      console.log(newCart)
      setCart(newCart)
      
    }else{
      setCart([...cart, {...product, quantity: quantity}])
      
      
    }
    
  }

  
  const isInCart = (id) =>{
    return cart.find((product) => product.id === id)
  }

  const removeItem = (item) =>{
    setTotalPrice(totalPrice - item.quantity * item.precio)
    setTotalQty(totalQty - item.quantity)
    const newCart = cart.filter((product) => product.id !== item.id) 
    setCart(newCart)
  }

  const emptyCart = () =>{
    setTotalPrice(0)
    setTotalQty(0)
    setCart([])
  }
  const valorDelContexto = {cart, addToCart, totalQty, totalPrice, removeItem, emptyCart }

  return <Provider value={valorDelContexto}>{children}</Provider>
}

export default CartProvider

