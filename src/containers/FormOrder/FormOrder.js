import {useState} from 'react'
import { Link } from 'react-router-dom'
import { createItem, updateItem} from '../../app/api'
import { useCartContext } from '../../app/CartContext'
import './FormOrder.css'



const FormOrder = () => {
  const {cart, emptyCart} = useCartContext()
  const deleteCart = () =>{emptyCart()}
  const [order, setOrder] = useState(false)
  const [orderId, setOrderId] =useState()

  const [user, setUser] = useState({
        email: '',
        name: '',
        phone: ''
  })

  const handlerOrder = (e) =>{
    e.preventDefault()

    if(user.email === '' || user.name === '' || user.phone === ''){
            console.log('completa los campos')
    }else{
      const date = new Date()
      createItem({user, cart, date})
      .then((id) =>setOrderId(id))
      
      setOrder(true)

    }
    if(createItem){
      cart.map((item) =>{
        
        return(
          updateItem(item.id, item.stock = item.stock - item.quantity).then(() => deleteCart())
        )
        
      })
    }
  }

  if(order){
    return(
      <>
       <main className='imgbq'>
        <section className='backround'>
          <p>Gracias por tu compra!</p>
          <p>Tu número de orden es: {orderId}</p>
          <Link to='/ItemListContainer/' className='link'>Seguir mirando </Link>
        </section>
        </main>
      </>
    )
  }

  return (
    <>
    <main className='imgbq'>
      <div className='ajustar'>
        <form className='form' onSubmit={handlerOrder} >
        <p className='title'>FORMULARIO DE COMPRA:</p>
            <label>Email:</label>
            <input className='small'  type='email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} ></input>

            <label>Nombre:</label>
            <input className='small' type='text'  value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} ></input>

            <label>Teléfono:</label>
            <input className='small' type='number' value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})}  ></input>
            
            <button className='buttoncart'>Finalizar compra</button>
        </form>
        </div>
      </main>      
    </>
  )
}

export default FormOrder