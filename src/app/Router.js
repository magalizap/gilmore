import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import Layout from './Layout'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer'
import Home from '../components/Home/Home'
import Cart from '../components/Cart/Cart'
import FormOrder from '../containers/FormOrder/FormOrder'

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route element={<Layout/>}>
                <Route path='/ItemListContainer/' element={<ItemListContainer/>}  />
                <Route index element={<Home/>}/>
                <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart/' element={<Cart/>}/>
                <Route path='/login/' element={<FormOrder/>}></Route>
                 { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router