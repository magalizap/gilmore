import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main className='bg-fondo'>
      <div className='botonInicio'>
        <Link to='/ItemListContainer/' className="btn-large">Shop online</Link>
      </div>
    </main>

  )
}

export default Home