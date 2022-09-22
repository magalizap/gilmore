import  Router  from './app/Router';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css'
import CartContext from './app/CartContext';

const App = ()=> {
  return (
    <CartContext> 
      <Router/> 
    </CartContext>
  )
}

export default App;
