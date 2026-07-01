import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      // Login request
      const response = await api.post("/users/login", {
        username,
        password,
      });

      alert(response.data.Message || "Login successful!");

      // Redirect based on username
      if (username === "admin") {
        navigate("/Dashboard");
      } else {
        navigate("/books");
      }
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(err.response.data?.Message || "Invalid username or password.");
      } else {
        setError("Unable to connect to the server.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-100 text-red-700 border border-red-300 rounded-md p-3">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;