import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFOund';
import NavBar from '../../Component/NavBar';
import Card from '../../Component/Card';
import ProductDetail from '../../Component/ProductDetail';
import { ShoppingCartProvider } from '../../Context';
import Carrito from '../../Component/Carrito';

//---funcion para enrutar---
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
    { path: '/card', element: <Card /> },
    { path: '/productDetail', element: <ProductDetail /> },
  ])

  return routes
}

const App = () => {

  return (      
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <ProductDetail/>
        <Carrito/>
      </BrowserRouter>
    </ShoppingCartProvider>    
  )
}

export default App
