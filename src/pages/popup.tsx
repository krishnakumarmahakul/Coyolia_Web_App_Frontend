// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// const ContactPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [topic, setTopic] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [company, setCompany] = useState("");
//   const [designation, setDesignation] = useState("");

//   const contactOptions = [
//     "Technical curriculum dev for my employees",
//     "Skill development programs for our college",
//     "Consulting on AIML",
//     "AWS cloud services",
//     "Application monitoring and KloudMate observability tool",
//     "NEP/NCF 2023 teacher training programs",
//     "Staffing and recruitment services",
//     "Career counselling",
//   ];

//   const handleSubmit = () => {
//     alert(`Submitted:
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Topic: ${topic}
// Company: ${company || "(not provided)"}
// Designation: ${designation || "(not provided)"}`);
//     setIsOpen(false);
//   };

//   return (
//     <>
     
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 z-50 bg-[#21204C] text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//       >
//         📩 Contact Coyolia
//       </button>

      
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 30 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl relative"
//             >
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//               >
//                 <X size={20} />
//               </button>
//               <h2 className="text-2xl font-semibold text-[#21204C] mb-4">
//                 Contact Coyolia Team
//               </h2>

              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Reason for Contact
//                 </label>
//                 <select
//                   value={topic}
//                   onChange={(e) => setTopic(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                 >
//                   <option value="">-- Select an option --</option>
//                   {contactOptions.map((opt, idx) => (
//                     <option key={idx} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//               </div>

              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="e.g., John Doe"
//                 />
//               </div>

              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="you@example.com"
//                 />
//               </div>

              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="e.g., +91 9876543210"
//                 />
//               </div>

              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Company Name (optional)
//                 </label>
//                 <input
//                   type="text"
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="e.g., ABC Pvt Ltd"
//                 />
//               </div>

              
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Designation (optional)
//                 </label>
//                 <input
//                   type="text"
//                   value={designation}
//                   onChange={(e) => setDesignation(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="e.g., HR Manager"
//                 />
//               </div>

              
//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-[#21204C] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//               >
//                 Submit
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default ContactPopup;
// // **************************************************************************************************************************
// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import emailjs from '@emailjs/browser';
// const ContactPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [topic, setTopic] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [company, setCompany] = useState("");
//   const [designation, setDesignation] = useState("");
  
//   // New errors state
//   const [errors, setErrors] = useState<{
//     topic?: string;
//     name?: string;
//     email?: string;
//     phone?: string;
//   }>({});
//   const form = useRef<HTMLFormElement>(null);
//   const contactOptions = [
//     "Technical curriculum dev for my employees",
//     "Skill development programs for our college",
//     "Consulting on AIML",
//     "AWS cloud services",
//     "Application monitoring and KloudMate observability tool",
//     "NEP/NCF 2023 teacher training programs",
//     "Staffing and recruitment services",
//     "Career counselling",
//   ];

//   // Validation function
//   const validate = () => {
//     const newErrors: typeof errors = {};

//     if (!topic) newErrors.topic = "Please select a topic.";
//     if (!name.trim()) newErrors.name = "Name is required.";
//     if (!email.trim()) newErrors.email = "Email is required.";
//     else {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) newErrors.email = "Invalid email address.";
//     }
//     if (!phone.trim()) newErrors.phone = "Phone number is required.";
//     else {
//       const phoneRegex = /^[+\d][\d\s\-]{7,}$/;
//       if (!phoneRegex.test(phone)) newErrors.phone = "Invalid phone number.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validate()) return;

//     if (!form.current) return;

//     // Sending email using emailjs
//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID_Popup,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID_Popup,
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY_Popup
//       )
//       .then(() => {
//         console.log("SUCCESS!");
//         alert("Message sent successfully!");
//         setIsOpen(false);
//         form.current?.reset();

//         // Clear local states as well
//         setTopic("");
//         setName("");
//         setEmail("");
//         setPhone("");
//         setCompany("");
//         setDesignation("");
//         setErrors({});
//       })
//       .catch((error) => {
//         console.error("FAILED...", error.text);
//         alert("Failed to send message. Please try again.");
//       });
//       setIsOpen(false);
//   };


//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 z-50 bg-[#21204C] text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//       >
//         📩 Contact Coyolia
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 30 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl relative"
//             >
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//               >
//                 <X size={20} />
//               </button>
//               <h2 className="text-2xl font-semibold text-[#21204C] mb-4">
//                 Contact Coyolia Team
//               </h2>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Reason for Contact
//                 </label>
//                 <select
//                   value={topic}
//                   onChange={(e) => setTopic(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                 >
//                   <option value="">-- Select an option --</option>
//                   {contactOptions.map((opt, idx) => (
//                     <option key={idx} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.topic && (
//                   <p className="text-red-600 text-sm mt-1">{errors.topic}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="e.g., John Doe"
//                 />
//                 {errors.name && (
//                   <p className="text-red-600 text-sm mt-1">{errors.name}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="you@example.com"
//                 />
//                 {errors.email && (
//                   <p className="text-red-600 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="e.g., +91 9876543210"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Company Name (optional)
//                 </label>
//                 <input
//                   type="text"
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="e.g., ABC Pvt Ltd"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Designation (optional)
//                 </label>
//                 <input
//                   type="text"
//                   value={designation}
//                   onChange={(e) => setDesignation(e.target.value)}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   placeholder="e.g., HR Manager"
//                 />
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-[#21204C] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//               >
//                 Submit
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default ContactPopup;

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");

  const [errors, setErrors] = useState<{
    topic?: string;
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const form = useRef<HTMLFormElement>(null);

  const contactOptions = [
    "Technical curriculum dev for my employees",
    "Skill development programs for our college",
    "Consulting on AIML",
    "AWS cloud services",
    "Application monitoring and KloudMate observability tool",
    "NEP/NCF 2023 teacher training programs",
    "Staffing and recruitment services",
    "Career counselling",
  ];

  // Validation function
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!topic) newErrors.topic = "Please select a topic.";
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = "Invalid email address.";
    }
    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    else {
      const phoneRegex = /^[+\d][\d\s\-]{7,}$/;
      if (!phoneRegex.test(phone)) newErrors.phone = "Invalid phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_Popup,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setIsOpen(false);

        form.current?.reset();
        setTopic("");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setDesignation("");
        setErrors({});
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        alert("Failed to send message. Please try again.");
      });
      console.log(new FormData(form.current));

  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#21204C] text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        📩 Contact Coyolia
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-semibold text-[#21204C] mb-4">
                Contact Coyolia Team
              </h2>

              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Contact
                  </label>
                  <select
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="">-- Select an option --</option>
                    {contactOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.topic && (
                    <p className="text-red-600 text-sm mt-1">{errors.topic}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="e.g., John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="e.g., +91 9876543210"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name (optional)
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="e.g., ABC Pvt Ltd"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation (optional)
                  </label>
                  <input
                    name="designation"
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="e.g., HR Manager"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#21204C] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactPopup;
