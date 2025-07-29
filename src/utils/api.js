// client/src/utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://rez-backend.onrender.com/api', // ✅ Use your Render backend URL
});

export default API;
