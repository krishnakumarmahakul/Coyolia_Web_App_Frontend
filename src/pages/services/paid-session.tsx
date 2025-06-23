import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CalendarCheck2, IndianRupee } from 'lucide-react';

const PaidSession = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handlePayment = () => {
    
    alert("");
  };

  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto text-[#21204C]">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-[#7655b7] flex justify-center items-center gap-3">
          <Sparkles className="text-[#ffc107]" size={36} />
          Welcome to Your 60-minute Deep Dive Session!
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Unlock your personalized career breakthrough with expert guidance 🎯
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#f8f5fd] to-white shadow-2xl rounded-2xl p-8"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-[#5b41a6] mb-2">
              What You'll Get
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>✅ One-on-one 60-minute in-depth counseling session</li>
              <li>✅ Tailored roadmap to align your goals and skills</li>
              <li>✅ Expert career and growth advice</li>
              <li>✅ Actionable next steps for long-term success</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-[#efe9fc] border border-[#d6c4f4] p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold flex items-center gap-2 text-[#4c328f]">
              <IndianRupee size={20} />
              Payment Details
            </h3>
            <p className="text-lg mt-2">💰 <strong>Amount:</strong> ₹299</p>
            <p className="text-lg">💳 <strong>Method:</strong> Credit/Debit Card or UPI</p>
            <p className="text-lg mt-3">
              📅 This session is an investment in your future and career clarity.
              We can’t wait to walk this journey with you!
            </p>
          </motion.div>

          {/* Terms & Conditions Block */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-[#5b41a6] mb-2">📜 Terms & Conditions</h4>
            <div className="h-40 overflow-y-scroll bg-white border border-gray-300 p-4 rounded-lg text-sm text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo, lorem a luctus viverra,
                sapien urna cursus risus, sed lacinia nisl erat ut sapien. Integer efficitur, justo nec commodo
                convallis, ex lacus facilisis metus, a suscipit ipsum neque in lorem. Mauris euismod, nisl at lacinia
                pretium, sapien nulla fermentum ligula, in fringilla nunc ipsum a nulla. Nulla facilisi.
              </p>
              <p className="mt-2">
                Suspendisse eget sem ac nulla faucibus viverra. Praesent nec sem sit amet mi ullamcorper malesuada.
                Etiam lobortis, mauris ut tincidunt convallis, lorem justo bibendum elit, sit amet cursus tortor lorem
                vel erat. Donec eget volutpat sapien, nec finibus eros. Morbi posuere lorem in velit consequat, sed
                ullamcorper felis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo, lorem a luctus viverra,
                sapien urna cursus risus, sed lacinia nisl erat ut sapien. Integer efficitur, justo nec commodo
                convallis, ex lacus facilisis metus, a suscipit ipsum neque in lorem. Mauris euismod, nisl at lacinia
                pretium, sapien nulla fermentum ligula, in fringilla nunc ipsum a nulla. Nulla facilisi.
                Suspendisse eget sem ac nulla faucibus viverra. Praesent nec sem sit amet mi ullamcorper malesuada.
                Etiam lobortis, mauris ut tincidunt convallis, lorem justo bibendum elit, sit amet cursus tortor lorem
                vel erat. Donec eget volutpat sapien, nec finibus eros. Morbi posuere lorem in velit consequat, sed
                ullamcorper felis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo, lorem a luctus viverra,
                sapien urna cursus risus, sed lacinia nisl erat ut sapien. Integer efficitur, justo nec commodo
                convallis, ex lacus facilisis metus, a suscipit ipsum neque in lorem. Mauris euismod, nisl at lacinia
                pretium, sapien nulla fermentum ligula, in fringilla nunc ipsum a nulla. Nulla facilisi.
                Suspendisse eget sem ac nulla faucibus viverra. Praesent nec sem sit amet mi ullamcorper malesuada.
                Etiam lobortis, mauris ut tincidunt convallis, lorem justo bibendum elit, sit amet cursus tortor lorem
                vel erat. Donec eget volutpat sapien, nec finibus eros. Morbi posuere lorem in velit consequat, sed
                ullamcorper felis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo, lorem a luctus viverra,
                sapien urna cursus risus, sed lacinia nisl erat ut sapien. Integer efficitur, justo nec commodo
                convallis, ex lacus facilisis metus, a suscipit ipsum neque in lorem. Mauris euismod, nisl at lacinia
                pretium, sapien nulla fermentum ligula, in fringilla nunc ipsum a nulla. Nulla facilisi.Suspendisse eget sem ac nulla faucibus viverra. Praesent nec sem sit amet mi ullamcorper malesuada.
                Etiam lobortis, mauris ut tincidunt convallis, lorem justo bibendum elit, sit amet cursus tortor lorem
                vel erat. Donec eget volutpat sapien, nec finibus eros. Morbi posuere lorem in velit consequat, sed
                ullamcorper felis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo, lorem a luctus viverra,
                sapien urna cursus risus, sed lacinia nisl erat ut sapien. Integer efficitur, justo nec commodo
                convallis, ex lacus facilisis metus, a suscipit ipsum neque in lorem. Mauris euismod, nisl at lacinia
                pretium, sapien nulla fermentum ligula, in fringilla nunc ipsum a nulla. Nulla facilisi.
              </p>
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
                I have read and agree to the Terms and Conditions.
              </label>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-6">
            <motion.button
              whileHover={{ scale: acceptedTerms ? 1.05 : 1 }}
              whileTap={{ scale: acceptedTerms ? 0.98 : 1 }}
              className={`px-8 py-4 rounded-full text-lg font-semibold shadow-md transition-all duration-300
                ${acceptedTerms ? "bg-[#7655b7] text-white hover:bg-[#6346a3]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
              onClick={handlePayment}
              disabled={!acceptedTerms}
            >
              🚀 Complete Payment & Book My Session
            </motion.button>
            <p className="text-sm text-gray-500 mt-3">
              You’ll receive a confirmation email with session details.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaidSession;
