
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
//
/*
import { useEffect, useState } from 'react'
import { getItem } from './api'
import { useParams } from 'react-router-dom'*/

const Layout = () => {

  /*const [category, setCategory] = useState([])
  const {categoryId} = useParams()
  
  useEffect(() =>{
      getItem().then(res => setCategory(res.filter((category) => category.id == categoryId)))
  },[])*/

  return (
    <>
        <NavBar  cart={3}/>
        <Outlet/>
    </>
  )
}

export default Layout