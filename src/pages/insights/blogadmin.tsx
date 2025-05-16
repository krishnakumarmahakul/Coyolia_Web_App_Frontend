
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface AdminData {
  _id: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

const BlogAdmin: React.FC = () => {
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  // Configure axios to send credentials (cookies) with every request
  axios.defaults.withCredentials = true;

  useEffect(() => {
    alert("it reach the blog admin")
    const verifyAdmin = async () => {
      try {
        console.log("Checking admin status"); // Debug A
        const res = await axios.get('http://localhost:5000/api/v1/admin/status');
        console.log("Admin status response:", res.data); // Debug B
        
        if (res.data.success) {
          console.log("Admin verification successful"); // Debug C
          setAdminData({
            _id: res.data.user?.id || '',
            email: res.data.user?.email || 'admin@example.com',
            role: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
        } else {
          console.log("Admin verification failed - not authorized"); // Debug D
          navigate('/insights/Blog');
        }
      } catch (err) {
        console.error("Auth check failed:", err); // Debug E
        setError('Failed to verify admin privileges');
        navigate('/insights/Blog');
      } finally {
        console.log("Admin verification process completed"); // Debug F
        setLoading(false);
      }
    };

    verifyAdmin();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/admin/logout');
      navigate('/insights/Blog');
    } catch (err) {
      console.error('Logout error:', err);
      setError('Failed to logout. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600">Verifying admin access...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => navigate('/insights/Blog')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Return to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-6 text-white">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center mt-2">
            <span className="bg-blue-500 text-xs px-2 py-1 rounded-full capitalize">
              {adminData?.role}
            </span>
            <span className="ml-4 text-blue-100">
              Logged in as: {adminData?.email}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-gray-500">Total Posts</h3>
              <p className="text-3xl font-bold mt-2">24</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-gray-500">Active Users</h3>
              <p className="text-3xl font-bold mt-2">156</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-gray-500">Pending Actions</h3>
              <p className="text-3xl font-bold mt-2">3</p>
            </div>
          </div>

          {/* Admin Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Create New Post
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Manage Users
              </button>
              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                View Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-6 py-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Last login:{' '}
              {adminData?.updatedAt
                ? new Date(adminData.updatedAt).toLocaleString()
                : 'N/A'}
            </p>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;