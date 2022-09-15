import React from 'react'
import { useEffect, useState } from 'react'
import { getItem } from '../../app/api'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() =>{
        getItem().then(res => setProducto(res.find(item => item.id === parseInt(id))))
    })

  return (
    <>
        <ItemDetail product={producto}/>
    </>
  )
}

export default ItemDetailContainer

/**
 *     useEffect(() =>{
        getItem().then((data) =>{
            setProducto(data)
        })
    },[])
 */