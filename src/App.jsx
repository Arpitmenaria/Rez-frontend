import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MerchantDetail from "./Pages/MerchantDetail";
import BookingSuccess from "./Pages/BookingSuccess";
import Wallet from "./Pages/Wallet";
import RegisterUser from "./Pages/RegisterUser";
import UserList from "./Pages/UserList";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchant/:id" element={<MerchantDetail />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/wallet" element={<Wallet />} />
         <Route path="/register" element={<RegisterUser />} />
        <Route path="/users" element={<UserList />} /> 
      </Routes>
    </Router>
  );
};

export default App;
