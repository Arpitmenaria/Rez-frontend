import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MerchantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [merchant, setMerchant] = useState(null);
  const [slot, setSlot] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/merchants/${id}`)
      .then((res) => setMerchant(res.data));
  }, [id]);

  const handleBooking = async () => {
    const userId = localStorage.getItem("userId") || "1234567890";
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/book`, {
      userId,
      merchantId: id,
      timeSlot: slot,
    });
    navigate("/success");
  };

  if (!merchant) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{merchant.name}</h2>
      <p>Category: {merchant.category}</p>
      <p>Cashback Offer: Get {merchant.cashback}% back on this visit</p>

      <label>Select a time slot:</label>
      <select value={slot} onChange={(e) => setSlot(e.target.value)}>
        <option value="">--Choose--</option>
        <option value="10am">10:00 AM</option>
        <option value="12pm">12:00 PM</option>
        <option value="2pm">2:00 PM</option>
      </select>

      <br />
      <button onClick={handleBooking} className="btn">
        Book Now
      </button>
    </div>
  );
};

export default MerchantDetail;
