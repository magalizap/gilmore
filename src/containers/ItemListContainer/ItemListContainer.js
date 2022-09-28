import ItemList from '../../components/ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getItems } from '../../app/api'
import { useParams } from 'react-router-dom'
import imgLoading from '../../assets/img/Spinner-1s-200px(1).svg'
const ItemListContainer = () => {
  const [productos, setProductos] = useState()
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  useEffect(() =>{
    getItems().then((res) =>{
      if(categoryId){
        const filtrado = res.filter((data) => data.categoria == categoryId)
        setProductos(filtrado)
      }else{
        setProductos(res)
      }
      setLoading(false)
    })
    
    return() =>{
      setLoading(true)
    }
    
   
  },[categoryId])
  return(
    loading ?
      <div className='imgLogin'><img src={imgLoading} alt='img'/></div>
      : <ItemList  products = {productos}/>
  )
}

export default ItemListContainer





 