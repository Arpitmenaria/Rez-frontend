import React, { useEffect, useState } from 'react';

const Wallet = ({ user: propUser }) => {
  const [user, setUser] = useState(propUser || null);

  useEffect(() => {
    if (!propUser) {
      const storedUser = localStorage.getItem('rezUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [propUser]);

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
