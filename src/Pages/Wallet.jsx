// client/src/Pages/Wallet.jsx
import React from 'react';

const Wallet = ({ user }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome, {user.name} 👋</h2>
      <p>📱 Phone: {user.phone}</p>
      <p>💰 Wallet Balance: ₹{user.wallet}</p>
    </div>
  );
};

export default Wallet;
