
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'

const Layout = () => {

  return (
    <>
        <NavBar  cart={3}/>
        <Outlet/>
    </>
  )
}

export default Layout