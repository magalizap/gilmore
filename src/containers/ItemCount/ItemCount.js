import { useState } from 'react';
const ItemCount = ({stock, initial, onAdd}) => {

  const [valor, setValor] = useState(1);
  return (
    <>
        <div className='alinear'>
        <button className='boton' onClick={() =>{ 
            valor < stock ? setValor(valor + 1) : setValor(stock)
        }}>+</button>

        <p>{valor}</p>

        <button className='boton' onClick={() =>{ 
            valor > initial ? setValor(valor - 1) : setValor(initial)
        }}>-</button>

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