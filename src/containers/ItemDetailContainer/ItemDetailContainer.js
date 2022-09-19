
import { useEffect, useState } from 'react'
import { getItem } from '../../app/api'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const {id} = useParams()
    useEffect(() =>{
        getItem().then(res => setProducto(res.find((item) => item.id == id)))
        
    },[id])

  return  producto && <ItemDetail  product={producto}/>
}

export default ItemDetailContainer

