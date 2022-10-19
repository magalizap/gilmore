
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

import NavBar from '../components/NavBar/NavBar'

const Layout = () => {

  return (
    <>
        <NavBar  cart={3}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout