
import { useEffect, useState } from 'react'
import {  getItems } from '../../app/api'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import imgLoading from '../../assets/img/Spinner-1s-200px(1).svg'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    /*useEffect(() =>{
      getItemById(id).then(item => setProducto(item) )
      setLoading(false)
    },[id])*/
    
    useEffect(() =>{
      getItems().then((res) =>{
          const productfiltrado = res.filter((item) => item.id === id )
          setProducto(productfiltrado[0])
          setLoading(false)
        } )
        
    },[id])

  return(
    loading ? 
      <div className='imgLogin'><img src={imgLoading} alt='img'/></div>
     : <ItemDetail  product={producto}/>
  )
 
}

export default ItemDetailContainer


/*useEffect(() =>{
  getItems(id).then((res) =>{
      const productfiltrado = res.filter((item) => item.id == id)
      setProducto(productfiltrado[0])
      setLoading(false)
    } )
    // VER ÚLTIMA GRABACIÓN PARA CAMBIAR EL GETITEMS POR GETITEMBYID
},[id])*/