
import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar/NavBar'

const Layout = () => {
  return (
    <div>
        <NavBar cart={3} />
        <Outlet/>
    </div>
  )
}

export default Layout