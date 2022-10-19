import React from 'react'
import './Footer.css'
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <footer className='text-white py-4 bg-dark'>
            <div className='container'>

                    <ul className='footer'>
                        
                            <Link to='/' className='color'>
                                <i className="bi bi-linkedin"></i>
                            </Link>
                            <Link to='/' className='color'>
                                <i className="bi bi-instagram"></i>
                            </Link >
                            <Link to='/' className='color'>
                                <i className="bi bi-github"></i>
                            </Link>
                       
                    </ul>  
                    <p className='p'>© 2022 Copyright: Magali Zapata</p>

            </div>
        </footer> 
    </>
  )
}

export default Footer