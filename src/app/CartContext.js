import {createContext, useState} from 'react'

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