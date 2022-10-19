import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useCartContext } from '../../app/CartContext'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  const {totalQty} = useCartContext()
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dorado" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to='/' >Gilmore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/ItemListContainer/'>CATÁLOGO</Nav.Link>
            <NavDropdown title="CATEGORÍAS" id="collasible-nav-dropdown" bg='dark'>
              <NavDropdown.Item as={NavLink} to='/categoria/campera'>CAMPERAS</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/remera'>
                REMERAS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/jean'>JEANS Y PANTALONES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categoria/calzado'>
                CALZADO
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/login'>LOGIN</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='cart' as={NavLink} to='/cart'>
              <CartWidget/>
              <p>{totalQty}</p>
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default NavBar

