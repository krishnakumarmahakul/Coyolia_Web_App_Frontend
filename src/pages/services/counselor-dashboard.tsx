// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// interface Booking {
//   name: string;
//   email: string;
//   date: string;
//   time: string;
//   reason: string;
// }

// interface AdminData {
//   _id: string;
//   email: string;
//   role: string;
//   createdAt: string;
//   updatedAt: string;
// }

// const CounselorDashboard = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [adminData, setAdminData] = useState<AdminData | null>(null);
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   useEffect(() => {
//     const verifyAdmin = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/v1/admin/status");
//         if (res.data.success) {
//           setAdminData({
//             _id: res.data.user?.id || '',
//             email: res.data.user?.email || '',
//             role: 'admin',
//             createdAt: new Date().toISOString(),
//             updatedAt: new Date().toISOString(),
//           });
          
//           // Load bookings from localStorage after verifying admin
//           const localBookings = JSON.parse(localStorage.getItem('careerCounselingBookings') || '[]');
//           setBookings(localBookings);
//         } else {
//           navigate("/services/counselor-login");
//         }
//       } catch (err) {
//         console.error("Auth check failed:", err);
//         setError("Failed to verify admin access.");
//         navigate("/services/counselor-login");
//       } finally {
//         setLoading(false);
//       }
//     };

//     verifyAdmin();
//   }, [navigate]);

//   // Rest of your component remains the same...
//   // ... (loading states, error handling, and return JSX)

//   return (
//     <div className="p-6 h-screen max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Counselor Dashboard</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {bookings.map((booking, index) => (
//             <li key={index} className="p-4 border rounded shadow">
//               <p><strong>Name:</strong> {booking.name}</p>
//               <p><strong>Email:</strong> {booking.email}</p>
//               <p><strong>Date:</strong> {booking.date}</p>
//               <p><strong>Time:</strong> {booking.time}</p>
//               <p><strong>Reason:</strong> {booking.reason}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CounselorDashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Booking {
  name: string;
  email: string;
  date: string;
  time: string;
  reason: string;
}

interface AdminData {
  _id: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AdminStatusResponse {
  success: boolean;
  user?: {
    _id: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
}

const CounselorDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const navigate = useNavigate();

  // Configure axios defaults
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:5000/api/v1/auth";

  useEffect(() => {
    const verifyAdminAndLoadData = async () => {
      try {
        setLoading(true);
        
        // 1. Verify admin status
        const statusRes = await axios.get<AdminStatusResponse>("/admin/status");
        
        if (!statusRes.data.success || !statusRes.data.user) {
          throw new Error("Admin authentication failed");
        }

        if (statusRes.data.user.role !== "admin") {
          throw new Error("Insufficient privileges");
        }

        // 2. Set admin data from actual API response
        setAdminData(statusRes.data.user);

        // 3. Load bookings from localStorage
        const localBookings = JSON.parse(
          localStorage.getItem("careerCounselingBookings") || "[]"
        );
        setBookings(localBookings);

      } catch (err) {
        console.error("Dashboard initialization error:", err);
        setError(
          err instanceof Error 
            ? err.message 
            : "Failed to verify admin access. Please login again."
        );
        
        // Redirect to login after showing error briefly
        setTimeout(() => navigate("/services/counselor-login"), 1500);
      } finally {
        setLoading(false);
      }
    };

    verifyAdminAndLoadData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post("/admin/logout");
      navigate("/services/counselor-login");
    } catch (err) {
      console.error("Logout error:", err);
      setError("Failed to logout. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg">Verifying your credentials...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md">
          <p className="font-bold">Error</p>
          <p>{error}</p>
          <p className="mt-2 text-sm">Redirecting to login page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Counselor Dashboard</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Logged in as: {adminData?.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <p className="text-blue-800">No bookings found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div key={index} className="p-4 border rounded shadow hover:shadow-md transition">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Name:</p>
                  <p>{booking.name}</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>{booking.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Date:</p>
                  <p>{booking.date}</p>
                </div>
                <div>
                  <p className="font-semibold">Time:</p>
                  <p>{booking.time}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold">Reason for consultation:</p>
                  <p>{booking.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CounselorDashboard;