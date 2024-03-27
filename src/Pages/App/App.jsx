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
import OrderCard from '../../Component/OrderCard';

//---funcion para enrutar---
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-order/last', element: <MyOrder /> }, /* muestra la orden actual */
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order/:id', element: <MyOrder /> }, /* muestra una orden de la lista de mis ordenes */
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },    
    { path: '/productDetail', element: <ProductDetail /> },

    //urls para el programador - para ver los tipos de Cards
    { path: '/card', element: <Card /> },
    { path: '/orderCard', element: <OrderCard/>}
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
