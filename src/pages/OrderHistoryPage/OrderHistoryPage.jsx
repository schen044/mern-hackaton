import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function getOrders() {
      getAllUserOrders();
    }
  },[])

  // fetch orders for user
  // set order state
  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an OrderList component (needs to be coded) */}
      <OrderList orders={orders}/>
      {/* Render the existing OrderDetail component */}
      <OrderDetail />
    </main>
  );
}