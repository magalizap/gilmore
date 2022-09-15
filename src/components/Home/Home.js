import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='botonInicio'>
      <Link to='/Shop/' class="btn-large">Shop online</Link>
    </div>
  )
}

export default Home