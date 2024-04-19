import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SingIn from '../SingIn';
import NotFound from '../NotFOund';
import NavBar from '../../Component/NavBar';
import Card from '../../Component/Card';
import ProductDetail from '../../Component/ProductDetail';
import { ShoppingCartProvider } from '../../Context';
import Carrito from '../../Component/Carrito';
import OrderCard from '../../Component/OrderCard';
import LogIn from '../LogIn';


const App = () => {
  return (      
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/sign-in' element={<SingIn/>} /> 
          <Route path='/all' element={<Home/>} />                   
          <Route path='/clothes' element={<Home/>} />
          <Route path='/electronics' element={<Home/>} />
          <Route path='/furniture' element={<Home/>} />
          <Route path='/others' element={<Home/>} />
          <Route path='/toys' element={<Home/>} />
          <Route path='/my-account' element={<MyAccount/>} />
          <Route path='/my-order' element={<LogIn/>} />
          <Route path='/my-orders' element={<MyOrders/>} />
          <Route path='//my-order/last' element={<MyOrder/>} /> {/* muestra la orden actual */}
          <Route path='/my-order/:id' element={<MyOrder/>} />
          <Route path='/carrito/:id' element={<Carrito/>} />
          <Route path='/*' element={<NotFound/>} />
          <Route path='/productDetail' element={<ProductDetail/>} />

          {/* ruta para el desarrollador */}
          <Route path='/card' element={<Card/>} />
          <Route path='/orderCard' element={<OrderCard/>} />
          <Route path='/login' element={<LogIn/>} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>    
  )
}

export default App
