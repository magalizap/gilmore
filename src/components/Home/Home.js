import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Button from 'react-bootstrap/Button';
export const Home = () => {
  
  return (
    <main className='bg-fondo'>
      <div className='botonInicio'>
        <Button as={Link} to='/ItemListContainer/' variant="success">VER TIENDA</Button>
      </div>
    </main>

  )
}

export default Home

