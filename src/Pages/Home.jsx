// src/Pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Home.css';

const Home = () => {
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMerchants = async () => {
      try {
        const res = await fetch('https://rez-backend.onrender.com/api/merchants');
        const data = await res.json();

        if (Array.isArray(data)) {
          setMerchants(data);
        } else if (Array.isArray(data.merchants)) {
          setMerchants(data.merchants);
        } else {
          console.error("Unexpected response:", data);
        }

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch merchants:", error);
        setLoading(false);
      }
    };

    fetchMerchants();
  }, []);

  if (loading) return <p>Loading merchants...</p>;

  return (
    <div className="home-container">
      <h2>Available Merchants</h2>
      <div className="merchant-list">
        {merchants.length > 0 ? (
          merchants.map((merchant) => (
            <Link to={`/merchant/${merchant._id}`} key={merchant._id} className="merchant-card">
              <h3>{merchant.name}</h3>
              <p>Category: {merchant.category}</p>
              <p>Cashback: {merchant.cashback}%</p>
            </Link>
          ))
        ) : (
          <p>No merchants found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
