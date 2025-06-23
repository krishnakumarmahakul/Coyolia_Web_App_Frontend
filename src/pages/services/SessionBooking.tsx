import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentName: '',
    studentGrade: '',
    preferredDate: '',
    preferredTime: '',
    concerns: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get existing bookings or initialize empty array
    const existingBookings = JSON.parse(localStorage.getItem('careerCounselingBookings') || '[]';
    
    // Add new booking
    const newBooking = {
      ...formData,
      date: formData.preferredDate,
      time: formData.preferredTime,
      reason: formData.concerns,
      bookingDate: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('careerCounselingBookings', JSON.stringify([...existingBookings, newBooking]));
    
    setIsSubmitted(true);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-[#7655b7] mb-4">Booking Confirmed!</h2>
          <p className="text-lg mb-6">Thank you for booking your free session. We'll contact you shortly to confirm the details.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#7655b7] text-white px-6 py-2 rounded-full hover:bg-[#6346a3] transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 text-[#21204C]">


      <h1>this is the second components</h1>
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#7655b7]">Book Your Free Session</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Your Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Student Name*</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Student Grade/Class*</label>
              <select
                name="studentGrade"
                value={formData.studentGrade}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
              >
                <option value="">Select Grade</option>
                <option value="8th">8th Grade</option>
                <option value="9th">9th Grade</option>
                <option value="10th">10th Grade</option>
                <option value="11th">11th Grade</option>
                <option value="12th">12th Grade</option>
                <option value="College">College</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Preferred Date*</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Preferred Time*</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
              >
                <option value="">Select Time Slot</option>
                <option value="09:00-09:15">09:00 AM - 09:15 AM</option>
                <option value="11:00-11:15">11:00 AM - 11:15 AM</option>
                <option value="14:00-14:15">02:00 PM - 02:15 PM</option>
                <option value="16:00-16:15">04:00 PM - 04:15 PM</option>
                <option value="18:00-18:15">06:00 PM - 06:15 PM</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Main Concerns/Questions</label>
            <textarea
              name="concerns"
              value={formData.concerns}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
            ></textarea>
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#7655b7] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6346a3] transition duration-300 shadow-md"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessionBooking;