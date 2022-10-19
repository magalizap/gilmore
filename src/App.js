import  Router  from './app/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
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
