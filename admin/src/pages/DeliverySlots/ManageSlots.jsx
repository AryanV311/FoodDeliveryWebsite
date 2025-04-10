// src/components/ManageSlots.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSlots = () => {
  const [slots, setSlots] = useState([]);
  const [formData, setFormData] = useState({
    slotStart: '',
    slotEnd: '',
    maxOrders: 10
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchSlots = async () => {
    const token = localStorage.getItem('token');
    try {
      
      const res = await axios.get('https://super20backened.onrender.com/api/delivery-slots/available', {headers:{token}});
      console.log(res);
      setSlots(res.data);
    } catch (error) {
        console.log(error);
      setError('Failed to load delivery slots');
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const token = localStorage.getItem('token');

    try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${token}`
    //     }
    //   };
      const body = JSON.stringify(formData);
      const res = await axios.post('http://localhost:4000/api/delivery-slots/',body, {headers:{token}});
      console.log(res);
      setSuccess('Delivery slot created successfully');
      setFormData({ slotStart: '', slotEnd: '', maxOrders: 10 });
      fetchSlots();
    } catch (err) {
      setError(err.response.data.message || 'Failed to create slot');
    }
  };

  return (
    <div>
      <h2>Manage Delivery Slots</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Slot Start</label>
          <input
            type="datetime-local"
            className="form-control"
            name="slotStart"
            value={formData.slotStart}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Slot End</label>
          <input
            type="datetime-local"
            className="form-control"
            name="slotEnd"
            value={formData.slotEnd}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Max Orders</label>
          <input
            type="number"
            className="form-control"
            name="maxOrders"
            value={formData.maxOrders}
            onChange={onChange}
            min="1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Slot</button>
      </form>

      <h3 className="mt-5">Existing Slots</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Max Orders</th>
            <th>Current Orders</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(slots) && slots.map(slot => (
            <tr key={slot._id}>
              <td>{slot._id}</td>
              <td>{new Date(slot.slotStart).toLocaleString()}</td>
              <td>{new Date(slot.slotEnd).toLocaleString()}</td>
              <td>{slot.maxOrders}</td>
              <td>{slot.currentOrders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSlots;
