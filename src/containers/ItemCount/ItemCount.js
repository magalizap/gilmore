import { useState } from 'react';
import './ItemCount.css'
import imgPlus from '../../assets/img/icono-signo-mas.png'
import imgMinus from '../../assets/img/icono-signo-menos.png'
const ItemCount = ({stock, onAdd}) => {

  const [quantity, setQuantity] = useState(1);


  return (
    <>
      <div className='alinear'>

        <button className='button' onClick={() =>{ 
          setQuantity(quantity + 1)}} disabled={quantity >= stock}>
            <img src={imgPlus} alt={imgPlus}></img>
        </button>

        <input className='input'  type='number'  onChange={() => setQuantity(quantity) } value={quantity}></input>
        <button className='button'  onClick={() =>{ 
          setQuantity(quantity - 1)}} disabled={quantity <= 1}>
             <img src={imgMinus} alt={imgMinus}></img>
        </button>

      </div>
    <div className='alinear'>
        <button className='addToCart'  onClick={() =>
          onAdd(quantity)
        }>
          
            Añadir al carrito
        </button>
        
    </div>
    </>

  )
}

export default ItemCount
