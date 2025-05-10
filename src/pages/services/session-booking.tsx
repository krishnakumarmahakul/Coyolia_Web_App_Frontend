import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const allTimeSlots = ['4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
const trainees = ['Sruti'];

const getMockAvailability = () => {
  const traineeAvailability: Record<string, Record<string, boolean>> = {};
  trainees.forEach((trainee) => {
    const availability: Record<string, boolean> = {};
    allTimeSlots.forEach((slot) => {
      availability[slot] = Math.random() > 0.3;
    });
    traineeAvailability[trainee] = availability;
  });
  return traineeAvailability;
};

const SessionBooking = () => {
  const navigate = useNavigate(); // Declare navigate here
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTrainee, setSelectedTrainee] = useState(trainees[0]);
  const [showAvailability, setShowAvailability] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    reminder: false,
  });

  const [availabilityMap, setAvailabilityMap] = useState(getMockAvailability());
  const traineeAvailability = availabilityMap[selectedTrainee];

  const [showPaidOffer, setShowPaidOffer] = useState(false);
  const [paidConfirmed, setPaidConfirmed] = useState(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime('');
    setAvailabilityMap(getMockAvailability());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ Free Session booked with ${selectedTrainee} on ${selectedDate?.toDateString()} at ${selectedTime}`);
    console.log({ selectedDate, selectedTime, selectedTrainee, ...form });
    setShowPaidOffer(true);
  };

  const handlePaidSessionConfirm = () => {
    setPaidConfirmed(true);
    setShowPaidOffer(false);
    alert('🎉 You’ve upgradeding to a 60-minute paid session. Details will be emailed to you after complete the payment!');
    
    // Use navigate instead of window.location.href
    navigate('/services/paid-session'); // Use navigate to go to the paid session page
  };

  const handlePaidSessionDecline = () => {
    setShowPaidOffer(false);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto text-[#21204C]">
      <h2 className="text-3xl font-bold mb-6 text-[#7655b7] text-center">
        Schedule Your Free 15-min Session
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-6 grid md:grid-cols-2 gap-8 items-start">

        {/* Left Section - Your Details */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-l-4 border-[#7655b7] pl-3 mb-2">
            <h3 className="text-xl font-semibold text-[#21204C]">👤 Your Details</h3>
            <p className="text-sm text-gray-500">We’ll use this to contact you about your session.</p>
          </div>

          <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Your Email" className="w-full border px-4 py-2 rounded" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="tel" placeholder="Phone Number" className="w-full border px-4 py-2 rounded" maxLength={10} pattern="[0-9]{10}" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input type="text" placeholder="City" className="w-full border px-4 py-2 rounded" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />

          <button
            onClick={(e) => {
              e.preventDefault();
              setShowAvailability(!showAvailability);
            }}
            className="w-full border border-[#7655b7] text-[#7655b7] font-semibold px-4 py-2 rounded hover:bg-[#f3ecff] transition text-sm"
          >
            {showAvailability ? 'Hide Availability Panel' : '📅 Check Availability & Select Time'}
          </button>

          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={form.reminder}
              onChange={(e) => setForm({ ...form, reminder: e.target.checked })}
            />
            <span>Send me a session reminder via email</span>
          </label>

          <button
            type="submit"
            className="bg-[#7655b7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6346a3] transition"
            disabled={!selectedDate || !selectedTime}
          >
            Confirm Booking
          </button>
        </form>

        {/* Right Section - Availability */}
        {showAvailability && (
          <div className="transition-all duration-500 ease-in-out">
            <div className="border-l-4 border-[#7655b7] pl-3 mb-3">
              <h3 className="text-xl font-semibold text-[#21204C]">🎓 Select Career Counselor</h3>
              <p className="text-sm text-gray-500">Pick someone you’d like to connect with.</p>
            </div>

            <select
              className="w-full border px-3 py-2 rounded mb-4"
              value={selectedTrainee}
              onChange={(e) => {
                setSelectedTrainee(e.target.value);
                setSelectedTime('');
              }}
            >
              {trainees.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <div className="mb-4">
              <h4 className="text-md font-medium mb-2">🗓 Choose a Date</h4>
              <Calendar onChange={handleDateChange} value={selectedDate} />
            </div>

            <div>
              <h4 className="text-md font-medium mb-2">⏰ Select a Time Slot</h4>
              <div className="flex gap-3 flex-wrap mb-4">
                {allTimeSlots.map((time) => {
                  const isAvailable = traineeAvailability[time];
                  const selectedClass =
                    isAvailable && selectedTime === time
                      ? 'bg-[#7655b7] text-white border-[#7655b7]'
                      : isAvailable
                      ? 'bg-gray-100 text-[#21204C] hover:bg-[#ebe4f9]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed';

                  return (
                    <button
                      key={time}
                      onClick={() => isAvailable && setSelectedTime(time)}
                      className={`px-4 py-2 rounded-full border text-sm font-medium transition ${selectedClass}`}
                      disabled={!isAvailable}
                    >
                      {isAvailable ? '✅' : '❌'} {time}
                    </button>
                  );
                })}
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-[#f8f5fd] border border-[#d6c4f4] p-4 rounded-lg text-sm">
                  <p><strong>📅 Date:</strong> {selectedDate.toDateString()}</p>
                  <p><strong>⏰ Time:</strong> {selectedTime}</p>
                  <p><strong>🎯 Counselor:</strong> {selectedTrainee}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Paid Session Modal */}
      {showPaidOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-[#21204C]">🚀 Unlock a 60-min Deep Dive Session!</h3>
            <p className="text-gray-600 mb-6">
              Want to go deeper into your career plan? Upgrade now to a full 60-minute 1-on-1 personalized session for just ₹299.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePaidSessionConfirm}
                className="bg-[#7655b7] text-white px-6 py-2 rounded-full hover:bg-[#6346a3]"
              >
                Upgrade Now
              </button>
              <button
                onClick={handlePaidSessionDecline}
                className="border border-gray-400 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-100"
              >
                No, Thanks
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionBooking;
