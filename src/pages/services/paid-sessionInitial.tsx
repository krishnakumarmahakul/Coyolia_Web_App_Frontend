// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; 
// import { useNavigate } from "react-router-dom";
// import emailjs from '@emailjs/browser';

// const allTimeSlots = ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
// const trainees = ["Sruti"];

// const getMockAvailability = () => {
//   const traineeAvailability: Record<string, Record<string, boolean>> = {};
//   trainees.forEach((trainee) => {
//     const availability: Record<string, boolean> = {};
//     allTimeSlots.forEach((slot) => {
//       availability[slot] = Math.random() > 0.3;
//     });
//     traineeAvailability[trainee] = availability;
//   });
//   return traineeAvailability;
// };

// const PaidsessionInitial: React.FC = () => {
//   const navigate = useNavigate();
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedTrainee, setSelectedTrainee] = useState(trainees[0]);
//   const [showAvailability, setShowAvailability] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     reminder: false,
//   });
//   const [availabilityMap, setAvailabilityMap] = useState(getMockAvailability());
//   const traineeAvailability = availabilityMap[selectedTrainee];

//   const handleDateChange = (date: Date) => {
//     setSelectedDate(date);
//     setSelectedTime("");
//     setAvailabilityMap(getMockAvailability());
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
  
//     if (!selectedDate || !selectedTime) {
//       alert("Please select a session date and time.");
//       return;
//     }
  
//     const adminParams = {
//       name: form.name,
//       email: form.email,
//       phone: form.phone,
//       city: form.city,
//       selectedDate: selectedDate.toDateString(),
//       selectedTime,
//       reminder: form.reminder ? "Yes" : "No",
//     };
  
//     // Send email to admin
//     emailjs
//       .send(
//         "service_9srmi1k", 
//         "template_2auizxp",
//         adminParams,
//         "5cozwUO-hH-zT5KSM" 
//       )
//       .then(() => {
//         // console.log("✅ Admin email sent");
//       })
//       .catch((error) => {
//         // console.error("❌ Admin email error:", error);
//       });

//     // Send confirmation email to user
//     emailjs.send(
//       "service_9srmi1k",
//       "template_534mian",
//       {
//         name: form.name,
//         selectedDate: selectedDate.toDateString(),     
//         selectedTime: selectedTime,                    
//         city: form.city,
//         phone: form.phone,
//         email: form.email,                             
//         to_email: form.email,                          
//         meetingLink: "https://meet.google.com/jxp-kwot-ztd" 
//       },
//       "5cozwUO-hH-zT5KSM"
//     )
//     .then((res) => {
//       // console.log("✅ User confirmation sent:", res);
//     })
//     .catch((error) => {
//       // console.error("❌ User confirmation error:", error);
//     });
    
//     // Show confirmation popup
//     navigate("/services/paid-session");
//     // setShowPopup(true);
//     // setTimeout(() => {
//     //   setShowPopup(false);
//     // }, 2500);
//   };

//   return (
//     <div className="p-8 max-w-5xl mx-auto text-[#21204C]">
//       <h2 className="text-3xl font-bold mb-6 text-[#7655b7] text-center">
//         Schedule Your 1 Hour Paid Session
//       </h2>

//       <div className="bg-white shadow-lg rounded-xl p-6 grid md:grid-cols-2 gap-8 items-start">
//         {/* Left Form Section */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="border-l-4 border-[#7655b7] pl-3 mb-2">
//             <h3 className="text-xl font-semibold">👤 Your Details</h3>
//             <p className="text-sm text-gray-500">
//               We'll use this to contact you about your session.
//             </p>
//           </div>

//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border px-4 py-2 rounded"
//             required
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full border px-4 py-2 rounded"
//             required
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full border px-4 py-2 rounded"
//             maxLength={10}
//             pattern="[0-9]{10}"
//             required
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="City"
//             className="w-full border px-4 py-2 rounded"
//             required
//             value={form.city}
//             onChange={(e) => setForm({ ...form, city: e.target.value })}
//           />

//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setShowAvailability(!showAvailability);
//             }}
//             className="w-full border border-[#7655b7] text-[#7655b7] font-semibold px-4 py-2 rounded hover:bg-[#f3ecff] transition text-sm"
//           >
//             {showAvailability
//               ? "Hide Availability Panel"
//               : "📅 Check Availability & Select Time"}
//           </button>

//           <label className="flex items-center space-x-2 text-sm">
//             <input
//               type="checkbox"
//               checked={form.reminder}
//               onChange={(e) => setForm({ ...form, reminder: e.target.checked })}
//             />
//             <span>Send me a session reminder via email</span>
//           </label>

//           <button
//             type="submit"
//             className="bg-[#7655b7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6346a3] transition"
//             disabled={!selectedDate || !selectedTime}
//           >
//             Confirm Booking
//           </button>
//         </form>

//         {/* Right Availability Panel */}
//         {showAvailability && (
//           <div className="space-y-6">
//             {/* Counselor Selection */}
//             <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
//               <div className="flex items-center space-x-3 mb-3">
//                 <div className="bg-[#7655b7] text-white p-2 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#21204C]">
//                     Select Career Counselor
//                   </h3>
//                   <p className="text-sm text-[#7655b7]">
//                     Connect with an expert
//                   </p>
//                 </div>
//               </div>

//               <select
//                 className="w-full bg-white border-2 border-[#d6c4f4] rounded-lg px-4 py-2 text-[#21204C] focus:ring-2 focus:ring-[#7655b7] focus:border-transparent"
//                 value={selectedTrainee}
//                 onChange={(e) => {
//                   setSelectedTrainee(e.target.value);
//                   setSelectedTime("");
//                 }}
//               >
//                 {trainees.map((t) => (
//                   <option key={t} value={t} className="text-[#21204C]">
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Date Picker - New Card Style */}
//             <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
//               <div className="flex items-center space-x-3 mb-3">
//                 <div className="bg-[#7655b7] text-white p-2 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#21204C]">
//                     Choose a Date
//                   </h3>
//                   <p className="text-sm text-[#7655b7]">
//                     Select your preferred day
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e9e1f7]">
//                 <Calendar
//                   onChange={handleDateChange}
//                   value={selectedDate}
//                   minDate={new Date()}
//                   className="border-0 w-full"
//                   tileClassName={({ date, view }) =>
//                     view === "month"
//                       ? `relative h-10 w-10 mx-auto flex items-center justify-center rounded-full
//                  ${
//                    date.getTime() === selectedDate?.getTime()
//                      ? "bg-[#7655b7] text-white font-bold"
//                      : date.getDay() === 0 || date.getDay() === 6
//                      ? "text-[#a78bfa]"
//                      : "text-[#21204C] hover:bg-[#f3ecff]"
//                  }`
//                       : ""
//                   }
//                   navigationLabel={({ date }) => (
//                     <span className="text-[#21204C] font-bold">
//                       {date.toLocaleString("default", { month: "long" })}{" "}
//                       {date.getFullYear()}
//                     </span>
//                   )}
//                   prevLabel={
//                     <span className="text-[#7655b7] text-xl font-bold">‹</span>
//                   }
//                   nextLabel={
//                     <span className="text-[#7655b7] text-xl font-bold">›</span>
//                   }
//                   formatShortWeekday={(locale, date) =>
//                     ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
//                   }
//                   tileContent={({ date }) =>
//                     date.getDate() === 1 && (
//                       <div className="absolute -top-3 left-0 w-full text-xs text-center text-[#7655b7] font-medium">
//                         {date.toLocaleString("default", { month: "short" })}
//                       </div>
//                     )
//                   }
//                 />
//               </div>
//             </div>

//             {/* Time Slot Selection */}
//             <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
//               <div className="flex items-center space-x-3 mb-3">
//                 <div className="bg-[#7655b7] text-white p-2 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#21204C]">
//                     Select a Time Slot
//                   </h3>
//                   <p className="text-sm text-[#7655b7]">Available time slots</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 {allTimeSlots.map((time) => {
//                   const isAvailable = traineeAvailability[time];
//                   const isSelected = selectedTime === time;

//                   return (
//                     <button
//                       key={time}
//                       onClick={() => isAvailable && setSelectedTime(time)}
//                       disabled={!isAvailable}
//                       className={`p-3 rounded-lg border-2 text-center transition-all
//                 ${
//                   isSelected
//                     ? "border-[#7655b7] bg-[#7655b7] text-white shadow-md"
//                     : isAvailable
//                     ? "border-[#d6c4f4] bg-white text-[#21204C] hover:border-[#7655b7] hover:bg-[#f3ecff]"
//                     : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
//                 }`}
//                     >
//                       <div className="flex items-center justify-center space-x-2">
//                         {isAvailable ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className={`h-4 w-4 ${
//                               isSelected ? "text-white" : "text-green-500"
//                             }`}
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         ) : (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-red-400"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         )}
//                         <span className="font-medium">{time}</span>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Selected Session Summary */}
//             {selectedDate && selectedTime && (
//               <div className="bg-[#21204C] text-white p-4 rounded-xl shadow-lg">
//                 <div className="flex items-center space-x-3 mb-2">
//                   <div className="bg-[#7655b7] text-white p-2 rounded-full">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//                       <path
//                         fillRule="evenodd"
//                         d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold">
//                     Your Session Summary
//                   </h3>
//                 </div>

//                 <div className="space-y-2 text-sm">
//                   <div className="flex items-center space-x-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-[#a78bfa]"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>
//                       {selectedDate.toLocaleDateString("en-US", {
//                         weekday: "long",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-[#a78bfa]"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>{selectedTime}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-[#a78bfa]"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
//                     </svg>
//                     <span>Counselor: {selectedTrainee}</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
      
//       {/* Confirmation Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white text-[#21204c] rounded-lg shadow-lg p-6 w-[90%] max-w-md text-center">
//             <p className="text-lg font-medium">
//               Thank You! Session Confirmed, You will receive a confirmation email
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaidsessionInitial;











import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from 'framer-motion';
import { Sparkles, IndianRupee } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

const PaidsessionInitial: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTrainee, setSelectedTrainee] = useState(trainees[0]);
  const [showAvailability, setShowAvailability] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    reminder: false,
  });
  const [availabilityMap, setAvailabilityMap] = useState(getMockAvailability());
  const traineeAvailability = availabilityMap[selectedTrainee];

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime("");
    setAvailabilityMap(getMockAvailability());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!selectedDate || !selectedTime) {
      alert("Please select a session date and time.");
      return;
    }
    
    // Show payment modal instead of sending emails immediately
    setShowPaymentModal(true);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const sendConfirmationEmails = (paymentId: string) => {
    const adminParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      selectedDate: selectedDate?.toDateString() || "",
      selectedTime,
      reminder: form.reminder ? "Yes" : "No",
      paymentId
    };

    // Send email to admin
    emailjs.send(
      "service_9srmi1k", 
      "template_2auizxp",
      adminParams,
      "5cozwUO-hH-zT5KSM" 
    ).catch(console.error);

    // Send confirmation email to user
    emailjs.send(
      "service_9srmi1k",
      "template_534mian",
      {
        ...adminParams,
        to_email: form.email,
        meetingLink: "https://meet.google.com/jxp-kwot-ztd" 
      },
      "5cozwUO-hH-zT5KSM"
    ).then(() => {
      setPaymentSuccess(true);
    }).catch(console.error);
  };

  const handlePayment = async () => {
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions");
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // In production, you should call your backend to create an order first
    const options = {
      key: "rzp_test_YOUR_KEY_ID", // Replace with your test/live key
      amount: "29900", // 299 INR in paise
      currency: "INR",
      name: "Career Counseling Session",
      description: "60-minute Deep Dive Session",
      image: "https://your-logo-url.png",
      order_id: "", // This should come from your backend
      handler: function(response: any) {
        sendConfirmationEmails(response.razorpay_payment_id);
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone
      },
      notes: {
        address: "Virtual Session",
        booking_date: selectedDate?.toDateString() || ""
      },
      theme: {
        color: "#7655b7"
      }
    };

    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="p-8 max-w-5xl mx-auto text-[#21204C]">
      <h2 className="text-3xl font-bold mb-6 text-[#7655b7] text-center">
        Schedule Your 1 Hour Paid Session
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-6 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Form Section */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-l-4 border-[#7655b7] pl-3 mb-2">
            <h3 className="text-xl font-semibold">👤 Your Details</h3>
            <p className="text-sm text-gray-500">
              We'll use this to contact you about your session.
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

            {/* Date Picker */}
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
      </div>
      
      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 sm:p-8">
              {paymentSuccess ? (
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-[#7655b7]">
                    Payment Successful!
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Your session has been booked successfully. A confirmation has been sent to {form.email}.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => {
                        setShowPaymentModal(false);
                        setPaymentSuccess(false);
                      }}
                      className="bg-[#7655b7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6346a3] transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-6"
                  >
                    <h2 className="text-3xl font-bold text-[#7655b7] flex justify-center items-center gap-3">
                      <Sparkles className="text-[#ffc107]" size={30} />
                      Complete Your Payment
                    </h2>
                    <p className="mt-2 text-gray-600">
                      You're almost there! Just one more step to book your session.
                    </p>
                  </motion.div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#5b41a6] mb-3">
                        Session Summary
                      </h3>
                      <div className="bg-[#f8f5fd] p-4 rounded-lg">
                        <p className="font-medium">
                          {selectedDate?.toLocaleDateString("en-US", {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric'
                          })}
                          {' '}at {selectedTime}
                        </p>
                        <p className="mt-1">With: {selectedTrainee}</p>
                      </div>
                    </div>

                    <div className="bg-[#efe9fc] border border-[#d6c4f4] p-4 rounded-xl">
                      <h3 className="text-lg font-bold flex items-center gap-2 text-[#4c328f]">
                        <IndianRupee size={18} />
                        Payment Details
                      </h3>
                      <p className="mt-2">💰 <strong>Amount:</strong> ₹299</p>
                      <p className="">💳 <strong>Method:</strong> Credit/Debit Card or UPI</p>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-[#5b41a6] mb-2">📜 Terms & Conditions</h4>
                      <div className="h-32 overflow-y-auto bg-white border border-gray-300 p-3 rounded-lg text-sm text-gray-700">
                        <p>By proceeding with payment, you agree to our terms and conditions:</p>
                        <ul className="mt-2 list-disc pl-5">
                          <li>All sessions must be paid in full before the scheduled time</li>
                          <li>Cancellations require 24 hours notice for a full refund</li>
                          <li>Rescheduling is subject to availability</li>
                          <li>No-shows will not be refunded</li>
                        </ul>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={acceptedTerms}
                          onChange={(e) => setAcceptedTerms(e.target.checked)}
                          className="w-4 h-4"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                          I agree to the Terms and Conditions
                        </label>
                      </div>
                    </div>

                    {/* Payment Button */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => setShowPaymentModal(false)}
                        className="flex-1 border border-[#7655b7] text-[#7655b7] font-semibold px-6 py-3 rounded-full hover:bg-[#f3ecff] transition"
                      >
                        Back
                      </button>
                      <button
                        onClick={handlePayment}
                        disabled={!acceptedTerms}
                        className={`flex-1 px-6 py-3 rounded-full font-semibold text-white transition
                          ${acceptedTerms ? "bg-[#7655b7] hover:bg-[#6346a3]" : "bg-gray-400 cursor-not-allowed"}`}
                      >
                        Pay Now ₹299
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PaidsessionInitial;











// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { motion } from 'framer-motion';
// import { Sparkles, IndianRupee } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// const allTimeSlots = ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
// const trainees = ["Sruti"];

// const getMockAvailability = () => {
//   const traineeAvailability: Record<string, Record<string, boolean>> = {};
//   trainees.forEach((trainee) => {
//     const availability: Record<string, boolean> = {};
//     allTimeSlots.forEach((slot) => {
//       availability[slot] = Math.random() > 0.3;
//     });
//     traineeAvailability[trainee] = availability;
//   });
//   return traineeAvailability;
// };

// const PaidsessionInitial: React.FC = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedTrainee, setSelectedTrainee] = useState(trainees[0]);
//   const [showAvailability, setShowAvailability] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     reminder: false,
//   });
//   const [availabilityMap, setAvailabilityMap] = useState(getMockAvailability());
//   const traineeAvailability = availabilityMap[selectedTrainee];

//   const handleDateChange = (date: Date) => {
//     setSelectedDate(date);
//     setSelectedTime("");
//     setAvailabilityMap(getMockAvailability());
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
  
//     if (!selectedDate || !selectedTime) {
//       alert("Please select a session date and time.");
//       return;
//     }
    
//     setShowPaymentModal(true);
//   };

//   const sendConfirmationEmails = (paymentId: string) => {
//     const adminParams = {
//       name: form.name,
//       email: form.email,
//       phone: form.phone,
//       city: form.city,
//       selectedDate: selectedDate?.toDateString() || "",
//       selectedTime,
//       reminder: form.reminder ? "Yes" : "No",
//       paymentId
//     };

//     // Send email to admin
//     emailjs.send(
//       "service_9srmi1k", 
//       "template_2auizxp",
//       adminParams,
//       "5cozwUO-hH-zT5KSM" 
//     ).catch(console.error);

//     // Send confirmation email to user
//     emailjs.send(
//       "service_9srmi1k",
//       "template_534mian",
//       {
//         ...adminParams,
//         to_email: form.email,
//         meetingLink: "https://meet.google.com/jxp-kwot-ztd" 
//       },
//       "5cozwUO-hH-zT5KSM"
//     ).then(() => {
//       setPaymentSuccess(true);
//     }).catch(console.error);
//   };

//   const handlePayment = () => {
//     if (!acceptedTerms) {
//       alert("Please accept the terms and conditions");
//       return;
//     }

//     // Replace this with your manually generated Razorpay payment link
//     const razorpayPaymentLink = "https://rzp.io/rzp/KYGSk6w";
//     // https://razorpay.me/@krishnakumarmahakul?amount=EPec5evqGoRk2C8icWNJlQ%3D%3D
    
//     // Open the payment link in a new tab
//     const paymentWindow = window.open(razorpayPaymentLink, '_blank');
    
//     if (!paymentWindow) {
//       alert("Please allow pop-ups for this site to proceed with payment");
//       return;
//     }

//     // Check for payment success periodically (this is a simplified approach)
//     // In a real app, you would use webhooks or have the user confirm payment
//     const checkPayment = setInterval(() => {
//       // This is just a simulation - in reality you'd need a proper payment verification mechanism
//       const isPaid = window.confirm("Have you completed the payment successfully?");
      
//       if (isPaid) {
//         clearInterval(checkPayment);
//         // Generate a mock payment ID for demo purposes
//         const mockPaymentId = 'pay_' + Math.random().toString(36).substring(2, 15);
//         sendConfirmationEmails(mockPaymentId);
//       }
//     }, 5000);
//   };

//   return (
//     <div className="p-8 max-w-5xl mx-auto text-[#21204C]">
//       <h2 className="text-3xl font-bold mb-6 text-[#7655b7] text-center">
//         Schedule Your 1 Hour Paid Session
//       </h2>

//       <div className="bg-white shadow-lg rounded-xl p-6 grid md:grid-cols-2 gap-8 items-start">
//         {/* Left Form Section */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="border-l-4 border-[#7655b7] pl-3 mb-2">
//             <h3 className="text-xl font-semibold">👤 Your Details</h3>
//             <p className="text-sm text-gray-500">
//               We'll use this to contact you about your session.
//             </p>
//           </div>

//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border px-4 py-2 rounded"
//             required
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full border px-4 py-2 rounded"
//             required
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full border px-4 py-2 rounded"
//             maxLength={10}
//             pattern="[0-9]{10}"
//             required
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="City"
//             className="w-full border px-4 py-2 rounded"
//             required
//             value={form.city}
//             onChange={(e) => setForm({ ...form, city: e.target.value })}
//           />

//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setShowAvailability(!showAvailability);
//             }}
//             className="w-full border border-[#7655b7] text-[#7655b7] font-semibold px-4 py-2 rounded hover:bg-[#f3ecff] transition text-sm"
//           >
//             {showAvailability
//               ? "Hide Availability Panel"
//               : "📅 Check Availability & Select Time"}
//           </button>

//           <label className="flex items-center space-x-2 text-sm">
//             <input
//               type="checkbox"
//               checked={form.reminder}
//               onChange={(e) => setForm({ ...form, reminder: e.target.checked })}
//             />
//             <span>Send me a session reminder via email</span>
//           </label>

//           <button
//             type="submit"
//             className="bg-[#7655b7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6346a3] transition"
//             disabled={!selectedDate || !selectedTime}
//           >
//             Confirm Booking
//           </button>
//         </form>

//         {/* Right Availability Panel */}
//         {showAvailability && (
//           <div className="space-y-6">
//             {/* Counselor Selection */}
//             <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
//               <div className="flex items-center space-x-3 mb-3">
//                 <div className="bg-[#7655b7] text-white p-2 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#21204C]">
//                     Select Career Counselor
//                   </h3>
//                   <p className="text-sm text-[#7655b7]">
//                     Connect with an expert
//                   </p>
//                 </div>
//               </div>

//               <select
//                 className="w-full bg-white border-2 border-[#d6c4f4] rounded-lg px-4 py-2 text-[#21204C] focus:ring-2 focus:ring-[#7655b7] focus:border-transparent"
//                 value={selectedTrainee}
//                 onChange={(e) => {
//                   setSelectedTrainee(e.target.value);
//                   setSelectedTime("");
//                 }}
//               >
//                 {trainees.map((t) => (
//                   <option key={t} value={t} className="text-[#21204C]">
//                     {t}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Date Picker */}
//             <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
//               <div className="flex items-center space-x-3 mb-3">
//                 <div className="bg-[#7655b7] text-white p-2 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#21204C]">
//                     Choose a Date
//                   </h3>
//                   <p className="text-sm text-[#7655b7]">
//                     Select your preferred day
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e9e1f7]">
//                 <Calendar
//                   onChange={handleDateChange}
//                   value={selectedDate}
//                   minDate={new Date()}
//                   className="border-0 w-full"
//                   tileClassName={({ date, view }) =>
//                     view === "month"
//                       ? `relative h-10 w-10 mx-auto flex items-center justify-center rounded-full
//                  ${
//                    date.getTime() === selectedDate?.getTime()
//                      ? "bg-[#7655b7] text-white font-bold"
//                      : date.getDay() === 0 || date.getDay() === 6
//                      ? "text-[#a78bfa]"
//                      : "text-[#21204C] hover:bg-[#f3ecff]"
//                  }`
//                       : ""
//                   }
//                   navigationLabel={({ date }) => (
//                     <span className="text-[#21204C] font-bold">
//                       {date.toLocaleString("default", { month: "long" })}{" "}
//                       {date.getFullYear()}
//                     </span>
//                   )}
//                   prevLabel={
//                     <span className="text-[#7655b7] text-xl font-bold">‹</span>
//                   }
//                   nextLabel={
//                     <span className="text-[#7655b7] text-xl font-bold">›</span>
//                   }
//                   formatShortWeekday={(locale, date) =>
//                     ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
//                   }
//                   tileContent={({ date }) =>
//                     date.getDate() === 1 && (
//                       <div className="absolute -top-3 left-0 w-full text-xs text-center text-[#7655b7] font-medium">
//                         {date.toLocaleString("default", { month: "short" })}
//                       </div>
//                     )
//                   }
//                 />
//               </div>
//             </div>

//             {/* Time Slot Selection */}
//             <div className="bg-[#f8f5fd] p-4 rounded-xl border border-[#d6c4f4]">
//               <div className="flex items-center space-x-3 mb-3">
//                 <div className="bg-[#7655b7] text-white p-2 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#21204C]">
//                     Select a Time Slot
//                   </h3>
//                   <p className="text-sm text-[#7655b7]">Available time slots</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 {allTimeSlots.map((time) => {
//                   const isAvailable = traineeAvailability[time];
//                   const isSelected = selectedTime === time;

//                   return (
//                     <button
//                       key={time}
//                       onClick={() => isAvailable && setSelectedTime(time)}
//                       disabled={!isAvailable}
//                       className={`p-3 rounded-lg border-2 text-center transition-all
//                 ${
//                   isSelected
//                     ? "border-[#7655b7] bg-[#7655b7] text-white shadow-md"
//                     : isAvailable
//                     ? "border-[#d6c4f4] bg-white text-[#21204C] hover:border-[#7655b7] hover:bg-[#f3ecff]"
//                     : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
//                 }`}
//                     >
//                       <div className="flex items-center justify-center space-x-2">
//                         {isAvailable ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className={`h-4 w-4 ${
//                               isSelected ? "text-white" : "text-green-500"
//                             }`}
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         ) : (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-red-400"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         )}
//                         <span className="font-medium">{time}</span>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Selected Session Summary */}
//             {selectedDate && selectedTime && (
//               <div className="bg-[#21204C] text-white p-4 rounded-xl shadow-lg">
//                 <div className="flex items-center space-x-3 mb-2">
//                   <div className="bg-[#7655b7] text-white p-2 rounded-full">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//                       <path
//                         fillRule="evenodd"
//                         d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
//                         clipRule="evenodd"
//                     />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold">
//                     Your Session Summary
//                   </h3>
//                 </div>

//                 <div className="space-y-2 text-sm">
//                   <div className="flex items-center space-x-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-[#a78bfa]"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>
//                       {selectedDate.toLocaleDateString("en-US", {
//                         weekday: "long",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-[#a78bfa]"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>{selectedTime}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-[#a78bfa]"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
//                     </svg>
//                     <span>Counselor: {selectedTrainee}</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
      
//       {/* Payment Modal */}
//       {showPaymentModal && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.2 }}
//             className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//           >
//             <div className="p-6 sm:p-8">
//               {paymentSuccess ? (
//                 <div className="text-center">
//                   <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//                     <svg
//                       className="h-6 w-6 text-green-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </div>
//                   <h2 className="mt-3 text-2xl font-bold text-[#7655b7]">
//                     Payment Successful!
//                   </h2>
//                   <p className="mt-2 text-gray-600">
//                     Your session has been booked successfully. A confirmation has been sent to {form.email}.
//                   </p>
//                   <div className="mt-6">
//                     <button
//                       onClick={() => {
//                         setShowPaymentModal(false);
//                         setPaymentSuccess(false);
//                       }}
//                       className="bg-[#7655b7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6346a3] transition"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center mb-6"
//                   >
//                     <h2 className="text-3xl font-bold text-[#7655b7] flex justify-center items-center gap-3">
//                       <Sparkles className="text-[#ffc107]" size={30} />
//                       Complete Your Payment
//                     </h2>
//                     <p className="mt-2 text-gray-600">
//                       You're almost there! Just one more step to book your session.
//                     </p>
//                   </motion.div>

//                   <div className="space-y-6">
//                     <div>
//                       <h3 className="text-xl font-semibold text-[#5b41a6] mb-3">
//                         Session Summary
//                       </h3>
//                       <div className="bg-[#f8f5fd] p-4 rounded-lg">
//                         <p className="font-medium">
//                           {selectedDate?.toLocaleDateString("en-US", {
//                             weekday: 'long',
//                             month: 'long',
//                             day: 'numeric'
//                           })}
//                           {' '}at {selectedTime}
//                         </p>
//                         <p className="mt-1">With: {selectedTrainee}</p>
//                       </div>
//                     </div>

//                     <div className="bg-[#efe9fc] border border-[#d6c4f4] p-4 rounded-xl">
//                       <h3 className="text-lg font-bold flex items-center gap-2 text-[#4c328f]">
//                         <IndianRupee size={18} />
//                         Payment Details
//                       </h3>
//                       <p className="mt-2">💰 <strong>Amount:</strong> ₹299</p>
//                       <p className="">💳 <strong>Method:</strong> Credit/Debit Card or UPI</p>
//                     </div>

//                     {/* Terms & Conditions */}
//                     <div className="mt-4">
//                       <h4 className="text-lg font-semibold text-[#5b41a6] mb-2">📜 Terms & Conditions</h4>
//                       <div className="h-32 overflow-y-auto bg-white border border-gray-300 p-3 rounded-lg text-sm text-gray-700">
//                         <p>By proceeding with payment, you agree to our terms and conditions:</p>
//                         <ul className="mt-2 list-disc pl-5">
//                           <li>All sessions must be paid in full before the scheduled time</li>
//                           <li>Cancellations require 24 hours notice for a full refund</li>
//                           <li>Rescheduling is subject to availability</li>
//                           <li>No-shows will not be refunded</li>
//                         </ul>
//                       </div>
//                       <div className="mt-3 flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           id="terms"
//                           checked={acceptedTerms}
//                           onChange={(e) => setAcceptedTerms(e.target.checked)}
//                           className="w-4 h-4"
//                         />
//                         <label htmlFor="terms" className="text-sm text-gray-600">
//                           I agree to the Terms and Conditions
//                         </label>
//                       </div>
//                     </div>

//                     {/* Payment Button */}
//                     <div className="flex gap-3 pt-4">
//                       <button
//                         onClick={() => setShowPaymentModal(false)}
//                         className="flex-1 border border-[#7655b7] text-[#7655b7] font-semibold px-6 py-3 rounded-full hover:bg-[#f3ecff] transition"
//                       >
//                         Back
//                       </button>
//                       <button
//                         onClick={handlePayment}
//                         disabled={!acceptedTerms}
//                         className={`flex-1 px-6 py-3 rounded-full font-semibold text-white transition
//                           ${acceptedTerms ? "bg-[#7655b7] hover:bg-[#6346a3]" : "bg-gray-400 cursor-not-allowed"}`}
//                       >
//                         Pay Now ₹299
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaidsessionInitial;