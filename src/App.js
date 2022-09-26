import  Router  from './app/Router';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css'
import CartProvider from './app/CartContext';

const App = ()=> {
  return (
    <CartProvider> 
      <Router/> 
    </CartProvider>
  )
}

export default App;
