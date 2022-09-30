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
      console.log('1111111111111')
      const newCart = cart.map((item) =>{
        if(item.id === product.id){
          return {...item, quantity: item.quantity + quantity}
        }else{
          return item
        }
      })
      
      setCart(newCart)
      
    }else{
      setCart([...cart, {...product, quantity: quantity}])
      console.log('2222222222222')
      
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


























/**
 * import {createContext, useState} from 'react'

export const AppContext = createContext()
const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item, newQuantity) =>{
        const newCart = cart.filter(product => product.id !== item.id)
        newCart.push({...item, quantity: newQuantity})
        
        setCart(newCart)
    }
    
    console.log('carrito', cart)

    const clearCart = () => setCart([])
    
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    
    const removeItem = (itemId) => setCart(cart.filter(product => product.itemId !== itemId))

  return (
    <AppContext.Provider value={{clearCart, isInCart, removeItem, addItem, cart, setCart}}>
        {children}
    </AppContext.Provider>
  )
}

export default CartContext
 */