import ItemList from '../../components/ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProductos } from '../../app/api'

const ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([])
  useEffect(() =>{
    getProductos().then((data) =>{
      setProductos(data)
    })
  }, [])
  return (
    <>
      <h1>{saludo}</h1>
      <ItemList products={productos}/>
    </>

  )
}

export default ItemListContainer