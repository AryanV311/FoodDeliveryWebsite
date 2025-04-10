// src/components/ViewAllOrders.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const fetchOrders = async () => {
    const token = localStorage.getItem('token');
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      const res = await axios.get('/api/orders', config);
      setOrders(res.data);
    } catch (err) {
        console.log(err);
      setError('Failed to load orders');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>All Orders</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {Array.isArray(orders) && orders.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Details</th>
              <th>Scheduled Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name} ({order.user.email})</td>
                <td>{order.orderDetails}</td>
                <td>{new Date(order.scheduledTime).toLocaleString()}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default ViewAllOrders;
