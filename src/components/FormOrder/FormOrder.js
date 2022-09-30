import {useState} from 'react'
import { createItem } from '../../app/api'
import { useCartContext } from '../../app/CartContext'

const FormOrder = () => {
  const {cart} = useCartContext()
  const [user, setUser] = useState({
        email: '',
        name: '',
        phone: null
  })

  const handlerOrder = (e) =>{
    e.preventDefault()
    const date = new Date()
    createItem({user, cart, date})
    
  }
  return (
    <>
        {console.log(user)}
        <form onSubmit={handlerOrder}>
            <label>Email:</label>
            <input type='text' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}></input>

            <label>Nombre:</label>
            <input type='text' value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}></input>

            <label>Teléfono:</label>
            <input type='number' value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} ></input>
            <button>Finalizar compra</button>
        </form>
        
    </>
  )
}

export default FormOrder