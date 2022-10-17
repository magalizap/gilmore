import {useState} from 'react'
import { createItem, updateItem } from '../../app/api'
import { useCartContext } from '../../app/CartContext'
import './FormOrder.css'



const FormOrder = ({id, stock, quantity}) => {
  const {cart, emptyCart} = useCartContext()


  const deleteCart = () =>{emptyCart()}
  console.log(cart)

  const [user, setUser] = useState({
        email: '',
        name: '',
        phone: null
  })

  const handlerOrder = (e) =>{
    e.preventDefault()

    if(user.email === '' || user.name === '' || user.phone === null){
            console.log('completa los campos')
    }else{
      const date = new Date()
      createItem({user, cart, date})
      updateItem(id, stock = stock - quantity).then(() => deleteCart())
    }

  }
  return (
    <>

        <form onSubmit={handlerOrder} >
            <label>Email:</label>
            <input type='mail' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}></input>

            <label>Nombre:</label>
            <input type='text'  value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}></input>

            <label>Teléfono:</label>
            <input type='number' value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} ></input>
            <button >Finalizar compra</button>
        </form>
        
    </>
  )
}

export default FormOrder