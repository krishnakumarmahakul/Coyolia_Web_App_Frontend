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

const CounselorDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/admin/status");
        if (res.data.success) {
          setAdminData({
            _id: res.data.user?.id || '',
            email: res.data.user?.email || '',
            role: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
          
          // Load bookings from localStorage after verifying admin
          const localBookings = JSON.parse(localStorage.getItem('careerCounselingBookings') || '[]');
          setBookings(localBookings);
        } else {
          navigate("/services/counselor-login");
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setError("Failed to verify admin access.");
        navigate("/services/counselor-login");
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, [navigate]);

  // Rest of your component remains the same...
  // ... (loading states, error handling, and return JSX)

  return (
    <div className="p-6 h-screen max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Counselor Dashboard</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking, index) => (
            <li key={index} className="p-4 border rounded shadow">
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Reason:</strong> {booking.reason}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CounselorDashboard;