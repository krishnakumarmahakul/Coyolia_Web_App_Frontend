import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogList from "./BlogList";

interface User {
  id: string;
  email: string;
}

interface LoginResponse {
  success: boolean;
  user?: User;
  message?: string;
}

// Base URL for authentication-related API calls
const API_BASE_URL = "http://localhost:5000/api/v1/auth";

const Blog: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true; // send cookies with requests
  axios.defaults.baseURL = API_BASE_URL;

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    

    if (!email || !password) {
     
      setError("Please enter both email and password");
      return;
    }

    try {
      
      const res = await axios.post<LoginResponse>("/admin/login", {
        email,
        password,
      });

      // console.log("Login response received:", res.data);

      if (res.data.success) {
        
        setShowLoginModal(false);
        setIsLoggedIn(true);
        // alert("Login successful - about to redirect to /insights/blogadmin");

        setTimeout(() => {
          // console.log("Now attempting navigation");
          navigate("/insights/blogadmin");
        }, 1000);
      } else {
        
        setError(res.data.message || "Login failed. Please try again.");
      }
    } catch (err: any) {
      // console.error("Login error:", err);
      let errorMsg = "Login failed. Please try again.";
      if (err.response?.data?.message) {
        errorMsg = err.response.data.message;
      } else if (err.message === "Network Error") {
        errorMsg = "Cannot connect to server. Please check your connection.";
      } else if (err.request) {
        errorMsg = "No response from server. Please try again later.";
      }
      setError(errorMsg);
    }
  };

  const handleLogout = async () => {
    try {
      
      await axios.post("/auth/logout");
      setIsLoggedIn(false);
      // console.log("Logout successful");
    } catch (err) {
      // console.error("Logout error:", err);
      setError("Failed to logout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#21204c] px-4 py-6 md:px-6 md:py-8">
      {/* Header and login/logout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold"> Coyolia Blog's</h1>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition w-full md:w-auto"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-[#21204c] text-white px-4 py-2 rounded-md font-medium hover:bg-[#1a1a3d] transition w-full md:w-auto"
          >
            Admin Login
          </button>
        )}
      </div>

      {/* Show error messages */}
      {error && !showLoginModal && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p>{error}</p>
        </div>
      )}

      {/* Admin Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Admin Login</h2>
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setError("");
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4 rounded">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#21204c]"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#21204c]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#21204c] text-white py-2 rounded-md font-semibold hover:bg-[#1a1a3d] transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
      <BlogList/>
    </div>
  );
};

export default Blog;