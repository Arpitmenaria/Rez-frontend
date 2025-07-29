// src/components/Dashboard.jsx
export default function Dashboard({ user }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome, {user.name}!</h2>
      <p>Phone: {user.phone}</p>
      <p>Wallet Balance: ₹{user.wallet}</p>
    </div>
  );
}
