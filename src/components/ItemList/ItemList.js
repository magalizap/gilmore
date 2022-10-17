
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {

  return (
    <main className='imgbq' >
      <div className='alinearProductos'>
        {products.map((producto, id) => <Item key={id} producto = {producto}/>)}
      </div>
    </main>
  )
}

export default ItemList

//{products.map(producto => <Item key={producto.id}  producto = {producto}/>)}