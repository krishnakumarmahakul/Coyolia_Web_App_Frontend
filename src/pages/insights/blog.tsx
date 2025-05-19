import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: { url: string };
}

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
// Base URL for blog-related API calls
const BLOG_API_URL = "http://localhost:5000/api/v1/blogs";

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true; // send cookies with requests
  axios.defaults.baseURL = API_BASE_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Fetching blogs from API...");
        const res = await axios.get(BLOG_API_URL);
        console.log("Blogs API response:", res); // Add this line
        const fetchedBlogs = res.data.data || [];
        
        setBlogs(fetchedBlogs);
      } catch (err: any) {
        console.error("Blog fetch failed:", err);
        let errorMsg = "Failed to load blogs. Please try again later.";
        
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          errorMsg = err.response.data.message || errorMsg;
        } else if (err.request) {
          console.error("No response received:", err.request);
          errorMsg = "No response from server. Check your connection.";
        }
        
        setError(errorMsg);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlogs();
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    console.log("Login attempt started");

    if (!email || !password) {
      console.log("Validation failed - missing email or password");
      setError("Please enter both email and password");
      return;
    }

    try {
      console.log("Making login request to server");
      const res = await axios.post<LoginResponse>("/admin/login", {
        email,
        password,
      });

      console.log("Login response received:", res.data);

      if (res.data.success) {
        console.log("Login successful, preparing to redirect");
        setShowLoginModal(false);
        setIsLoggedIn(true);
        alert("Login successful - about to redirect to /insights/blogadmin");

        setTimeout(() => {
          console.log("Now attempting navigation");
          navigate("/insights/blogadmin");
        }, 1000);
      } else {
        console.log("Login failed - server response unsuccessful");
        setError(res.data.message || "Login failed. Please try again.");
      }
    } catch (err: any) {
      console.error("Login error:", err);
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
      console.log("Attempting logout...");
      await axios.post("/auth/logout");
      setIsLoggedIn(false);
      console.log("Logout successful");
    } catch (err) {
      console.error("Logout error:", err);
      setError("Failed to logout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#21204c] px-4 py-6 md:px-6 md:py-8">
      {/* Header and login/logout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold">Coyolia Blogs</h1>
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

      {/* Loading spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#21204c]"></div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No blogs available.</p>
        </div>
      ) : (
        // Blog cards grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {blog.image?.url && (
                <img
                  src={blog.image.url}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">{blog.content}</p>
                <p className="text-xs text-gray-500 mt-3">By {blog.author}</p>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default Blog;