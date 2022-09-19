import ItemList from '../../components/ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProductos } from '../../app/api'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()
  useEffect(() =>{
    if(categoryId){
      getProductos().then(res => setProductos(res.filter((data) => data.categoria == categoryId)))
    
    }else{
      getProductos().then((data) =>{
        setProductos(data)
      })
    }

  },[categoryId])


  return (
    <>
      <ItemList  products = {productos}/>
    </>

  )
}

export default ItemListContainer



 