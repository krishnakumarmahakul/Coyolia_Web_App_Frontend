import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = "http://localhost:5000/api/v1/";
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true;

interface LoginResponse {
  success: boolean;
  user?: { id: string; email: string };
  message?: string;
  isAuthenticated?: boolean;
}

const CounselorLogin = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const res = await axios.post<LoginResponse>('/admin/login', {
        email,
        password,
      });

      if (res.data.success) {
        navigate('/services/counselor-dashboard');
      } else {
        setError(res.data.message || 'Login failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      let errorMsg = 'Login failed. Please try again.';

      if (err.response?.data?.message) {
        errorMsg = err.response.data.message;
      } else if (err.message === 'Network Error') {
        errorMsg = 'Cannot connect to server. Please check your connection.';
      } else if (err.request) {
        errorMsg = 'No response from server. Please try again later.';
      }

      setError(errorMsg);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#e0d4fc] to-[#f3e9ff]">
      <div
        className={`bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-700 ease-in-out ${
          showForm ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#7655b7] text-center">
          Counselor Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              📧 Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b29eff] focus:border-transparent transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              🔒 Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b29eff] focus:border-transparent transition duration-300"
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-500 text-center mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#7655b7] text-white py-2 rounded-lg font-semibold shadow-md hover:bg-[#6346a3] hover:shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-center text-gray-400 mt-6">
          © {new Date().getFullYear()} Sruti Career Counseling. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CounselorLogin;
