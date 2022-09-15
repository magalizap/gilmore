
import Item from '../Item/Item'


const ItemList = ({products}) => {

  return (
    <main className='alinearProductos'>
        {products.map((producto, id) => <Item key={id} producto = {producto}/>)}
    </main>
  )
}

export default ItemList