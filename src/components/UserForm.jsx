// src/components/UserForm.jsx
import { useState } from 'react';
import API from '../utils/api';
import Dashboard from './Dashboard';

export default function UserForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) return;

    setLoading(true);
    try {
      // Step 1: Check if user exists
      const res = await API.get(`/users/${phone}`);
      setUser(res.data.user);
    } catch (err) {
      // If not found, register
      try {
        const res = await API.post('/users', { name, phone });
        setUser(res.data.user);
      } catch (error) {
        alert('Error registering user');
      }
    }
    setLoading(false);
  };

  if (user) return <Dashboard user={user} />;

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Register or Login</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br /><br />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      /><br /><br />
      <button type="submit" disabled={loading}>
        {loading ? 'Please wait...' : 'Submit'}
      </button>
    </form>
  );
}
