import { useState } from 'react';
const ItemCount = ({stock, onAdd}) => {

  const [quantity, setQuantity] = useState(1);
  return (
    <>
        <div className='alinear'>
        <button className='boton' onClick={() =>{ 
          setQuantity(quantity + 1)}} disabled={quantity>=stock}>+</button>

        <p>{quantity}</p>

        <button className='boton' onClick={() =>{ 
          setQuantity(quantity - 1)}} disabled={quantity<=1}>-</button>

    </div>
    <div className='alinear'>
        <button onClick={onAdd}>
          
            Añadir al carrito
        </button>
    </div>
    </>

  )
}

export default ItemCount
