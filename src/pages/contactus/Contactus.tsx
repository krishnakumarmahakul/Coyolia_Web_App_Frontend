import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(() => {
      console.log('SUCCESS!');
      // alert('Message sent successfully!');
      form.current?.reset();
    })
    .catch((error) => {
      // console.error('FAILED...', error.text);
      // alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="relative py-16 bg-white text-[#21204c]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap rounded-xl shadow-lg overflow-hidden border ">
          
          <div className="w-full lg:w-5/12 bg-[#21204c] text-white p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Connect Us 
            </h2>
            <p className="text-lg opacity-90 mb-6">Let's get started.</p>

            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@coyolia.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+919739005000</span>
              </div>
            </div>
          </div>

          
          <div className="w-full lg:w-7/12 bg-white p-8 lg:p-12">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                  First Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  className="w-full px-4 py-3 border border-[#21204c] rounded-lg focus:ring-2 focus:ring-[#21204c] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 border border-[#21204c] rounded-lg focus:ring-2 focus:ring-[#21204c] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="user_phone" className="block text-sm font-semibold mb-1">
                  Phone Number
                </label>
                <input
                  id="user_phone"
                  name="user_phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-[#21204c] rounded-lg focus:ring-2 focus:ring-[#21204c] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-[#21204c] rounded-lg focus:ring-2 focus:ring-[#21204c] focus:border-transparent outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#21204c] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#1a1a3d] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
