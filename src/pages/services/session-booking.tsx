import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Required to prevent broken layout
import { useNavigate } from "react-router-dom";

const allTimeSlots = ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
const trainees = ["Sruti"];

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

const SessionBooking: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTrainee, setSelectedTrainee] = useState(trainees[0]);
  const [showAvailability, setShowAvailability] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    reminder: false,
  });
  const [availabilityMap, setAvailabilityMap] = useState(getMockAvailability());
  const traineeAvailability = availabilityMap[selectedTrainee];
  const [showPaidOffer, setShowPaidOffer] = useState(false);
  const [paidConfirmed, setPaidConfirmed] = useState(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime("");
    setAvailabilityMap(getMockAvailability());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `✅ Free Session booked with ${selectedTrainee} on ${selectedDate?.toDateString()} at ${selectedTime}`
    );
    setShowPaidOffer(true);
  };

  const handlePaidSessionConfirm = () => {
    setPaidConfirmed(true);
    setShowPaidOffer(false);
    alert(
      "🎉 You’ve upgraded to a 60-minute paid session. Details will be emailed to you after payment!"
    );
    navigate("/services/paid-session");
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
        {/* Left Form Section */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-l-4 border-[#7655b7] pl-3 mb-2">
            <h3 className="text-xl font-semibold">👤 Your Details</h3>
            <p className="text-sm text-gray-500">
              We’ll use this to contact you about your session.
            </p>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
            maxLength={10}
            pattern="[0-9]{10}"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="City"
            className="w-full border px-4 py-2 rounded"
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              setShowAvailability(!showAvailability);
            }}
            className="w-full border border-[#7655b7] text-[#7655b7] font-semibold px-4 py-2 rounded hover:bg-[#f3ecff] transition text-sm"
          >
            {showAvailability
              ? "Hide Availability Panel"
              : "📅 Check Availability & Select Time"}
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

        {/* Right Availability Panel */}
        {showAvailability && (
          <div className="space-y-6">
            {/* Counselor Selection */}
            <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-[#7655b7] text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#21204C]">
                    Select Career Counselor
                  </h3>
                  <p className="text-sm text-[#7655b7]">
                    Connect with an expert
                  </p>
                </div>
              </div>

              <select
                className="w-full bg-white border-2 border-[#d6c4f4] rounded-lg px-4 py-2 text-[#21204C] focus:ring-2 focus:ring-[#7655b7] focus:border-transparent"
                value={selectedTrainee}
                onChange={(e) => {
                  setSelectedTrainee(e.target.value);
                  setSelectedTime("");
                }}
              >
                {trainees.map((t) => (
                  <option key={t} value={t} className="text-[#21204C]">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Picker - New Card Style */}
            <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-[#7655b7] text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#21204C]">
                    Choose a Date
                  </h3>
                  <p className="text-sm text-[#7655b7]">
                    Select your preferred day
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e9e1f7]">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  minDate={new Date()}
                  className="border-0 w-full"
                  tileClassName={({ date, view }) =>
                    view === "month"
                      ? `relative h-10 w-10 mx-auto flex items-center justify-center rounded-full
                 ${
                   date.getTime() === selectedDate?.getTime()
                     ? "bg-[#7655b7] text-white font-bold"
                     : date.getDay() === 0 || date.getDay() === 6
                     ? "text-[#a78bfa]"
                     : "text-[#21204C] hover:bg-[#f3ecff]"
                 }`
                      : ""
                  }
                  navigationLabel={({ date }) => (
                    <span className="text-[#21204C] font-bold">
                      {date.toLocaleString("default", { month: "long" })}{" "}
                      {date.getFullYear()}
                    </span>
                  )}
                  prevLabel={
                    <span className="text-[#7655b7] text-xl font-bold">‹</span>
                  }
                  nextLabel={
                    <span className="text-[#7655b7] text-xl font-bold">›</span>
                  }
                  formatShortWeekday={(locale, date) =>
                    ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
                  }
                  tileContent={({ date }) =>
                    date.getDate() === 1 && (
                      <div className="absolute -top-3 left-0 w-full text-xs text-center text-[#7655b7] font-medium">
                        {date.toLocaleString("default", { month: "short" })}
                      </div>
                    )
                  }
                />
              </div>
            </div>

            {/* Time Slot Selection */}
            <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-[#7655b7] text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#21204C]">
                    Select a Time Slot
                  </h3>
                  <p className="text-sm text-[#7655b7]">Available time slots</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {allTimeSlots.map((time) => {
                  const isAvailable = traineeAvailability[time];
                  const isSelected = selectedTime === time;

                  return (
                    <button
                      key={time}
                      onClick={() => isAvailable && setSelectedTime(time)}
                      disabled={!isAvailable}
                      className={`p-3 rounded-lg border-2 text-center transition-all
                ${
                  isSelected
                    ? "border-[#7655b7] bg-[#7655b7] text-white shadow-md"
                    : isAvailable
                    ? "border-[#d6c4f4] bg-white text-[#21204C] hover:border-[#7655b7] hover:bg-[#f3ecff]"
                    : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        {isAvailable ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ${
                              isSelected ? "text-white" : "text-green-500"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-red-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        <span className="font-medium">{time}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Session Summary */}
            {selectedDate && selectedTime && (
              <div className="bg-[#21204C] text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-[#7655b7] text-white p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">
                    Your Session Summary
                  </h3>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#a78bfa]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#a78bfa]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#a78bfa]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                    </svg>
                    <span>Counselor: {selectedTrainee}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {/* *************************************************************************** */}
      </div>

      {/* Paid Session Modal */}
      {showPaidOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-[#21204C]">
              🚀 Unlock a 60-min Deep Dive Session!
            </h3>
            <p className="text-gray-600 mb-6">
              Want to go deeper into your career plan? Upgrade now to a full
              60-minute 1-on-1 personalized session for just ₹299.
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

