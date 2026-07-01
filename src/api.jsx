import axios from 'axios';

// IMPORTANT: this must match the port shown in your terminal when you run
// "dotnet run" in the LibraryAPI folder (default is http://localhost:5000)
const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default api;
