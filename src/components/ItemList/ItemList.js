
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {

  return (
    <main className='imgbq' >
      <div>
        <p className='title'>CATÁLOGO DE PRODUCTOS</p>
        <div className='alinearProductos'>
          {products.map((producto, id) => <Item key={id} producto = {producto}/>)}
        </div>
      </div>
    </main>
  )
}

export default ItemList

