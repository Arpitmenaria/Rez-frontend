// client/src/Pages/Wallet.jsx
import React from 'react';

const Wallet = ({ user }) => {
  if (!user) return <p>User not loaded.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome, {user.name}</h2>
      <p>Phone: {user.phone}</p>
      <p>Your ReZ Coin Balance: ₹{user.wallet}</p>
    </div>
  );
};

export default Wallet;
