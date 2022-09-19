import ItemList from '../../components/ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProductos } from '../../app/api'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()
  useEffect(() =>{
    if(categoryId){
      getProductos().then(res => setProductos(res.filter((data) => data.category == categoryId)))
      
    }else{
      getProductos().then((data) =>{
        setProductos(data)
      })
    }
  },[])


  return (
    <>
      <h1>{saludo}</h1>
      <ItemList products={productos}/>
    </>

  )
}

export default ItemListContainer


/**
 *   useEffect(() =>{
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
 * 
 */