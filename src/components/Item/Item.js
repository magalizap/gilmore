
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({producto}) => {
  
  return (

    <div className="cards">
        <img className="cards-img" src= {producto.imagen} alt='imagen'/>
        <div className="cards-info">
          <div className="cards-text">
            <p className="text-title">{producto.nombre}</p>
            <p className="text-subtitle">Stock disponible: {producto.stock}</p>
          </div>

          <Link to={`/item/${producto.id}`} className="cards-icon">
            <svg viewBox="0 0 28 25">
              <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
            </svg>
          </Link>
        </div>
    </div>


  )
}



export default Item