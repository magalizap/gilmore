import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/Home/Home';
import Shop from '../components/Shop/Shop';
import Layout from './Layout';


const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/Shop/" element={<Shop/>}/>
                 { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;