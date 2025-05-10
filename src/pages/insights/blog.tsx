// src/pages/Blog.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: {
    url: string;
  };
}

const Blog: React.FC = () => {
  // State management
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded credentials for development (replace with API call in production)
  const HARDCODED_CREDENTIALS = {
    email: "admin@coyolia.com",
    password: "admin123"
  };

  // Fetch blogs from API (or use mock data if API fails)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // First try to fetch from actual API
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data.data);
      } catch (error) {
        console.error('API fetch failed, using mock data:', error);
        // Fallback to mock data if API fails
        const mockBlogs: Blog[] = [
          {
            _id: '1',
            title: 'Sample Blog Post',
            content: 'This is a sample blog post content...',
            author: 'Admin',
            image: { url: 'https://via.placeholder.com/300' }
          }
        ];
        setBlogs(mockBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      // Validate against hardcoded credentials only
      if (loginCredentials.email !== HARDCODED_CREDENTIALS.email || 
          loginCredentials.password !== HARDCODED_CREDENTIALS.password) {

        throw new Error('Invalid email or password');
        
        
      }
  
      // Create mock JWT token (frontend-only solution)
      const mockTokenPayload = {
        email: HARDCODED_CREDENTIALS.email,
        role: "admin",
        exp: Math.floor(Date.now() / 1000) + 86400 // 1 day expiration
      };
  
      // Simple base64 encoding
      const mockToken = btoa(JSON.stringify(mockTokenPayload));
      console.log(mockTokenPayload);
      console.log("Login suscess fully ",HARDCODED_CREDENTIALS.email,HARDCODED_CREDENTIALS.password);
      
      
      // Store token and redirect
      localStorage.setItem('token', mockToken);
      navigate('/blogadmin');
      
    } catch (error: any) {
      setError(error.message || 'Login failed');
      console.error('Login failed:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white text-[#21204c] px-6 py-4">
      {/* Top Bar with Login Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Coyolia Blogs</h1>
        <button
          onClick={() => setShowLoginModal(true)}
          className="bg-[#21204c] text-white px-4 py-2 rounded-md font-medium hover:bg-[#1a1a3d] transition"
        >
          Admin Login
        </button>
      </div>

      {/* Blog List Display */}
      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white text-[#21204c] rounded-lg p-4 shadow-md">
              {blog.image?.url && (
                <img
                  src={blog.image.url}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm">{blog.content.slice(0, 120)}...</p>
            </div>
          ))}
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Admin Login</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginCredentials.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  placeholder="Try: admin@coyolia.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginCredentials.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  placeholder="Try: admin123"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#21204c] text-white py-2 rounded-md hover:bg-[#1a1a3d] transition"
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