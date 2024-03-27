import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Component/Layout'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Component/OrderCard'

function MyOrders() {
  
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1>My Orders</h1>
      </div>
      {
        context.orden[0] ?
        context.orden.map((order, index) => {
          return(
            <Link key={index} to={`/my-order/${index}`}>
              <OrderCard key={index}
                totalPrice={order.totalPrice}
                totalProds={order.totalProds} />
          </Link>
          )
        }) : (
          <p>No hay Ornes</p>
        )
      }
    </Layout>
  )
}

export default MyOrders
