// client/src/Pages/RegisterUser.jsx
import React, { useState } from 'react';
import API from '../utils/api';
import Wallet from './Wallet';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) return alert("Phone number is required");

    setLoading(true);
    try {
      // Try to find existing user
      const res = await API.get(`/users/${phone}`);
      setUser(res.data);
    } catch (err) {
      // If user not found, register new one
      try {
        const res = await API.post(`/users/register`, { name, phone });
        setUser(res.data.user);
      } catch (error) {
        console.error(error);
        alert('Error registering user.');
      }
    }
    setLoading(false);
  };

  if (user) return <Wallet user={user} />;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register or Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br /><br />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
