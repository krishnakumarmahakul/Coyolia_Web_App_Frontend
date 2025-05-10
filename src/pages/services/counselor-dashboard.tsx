import React, { useEffect, useState } from "react";

interface Booking {
  name: string;
  email: string;
  date: string;
  time: string;
  reason: string;
}

const CounselorDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings");
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
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
