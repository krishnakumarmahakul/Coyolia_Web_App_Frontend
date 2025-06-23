import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutTeam from "./pages/about/Team";
import AboutCulture from "./pages/about/Culture";
import AboutLeadership from "./pages/about/Leadership";
import SolutionsLearning from "./pages/solutions/Learning";
import SolutionsTalent from "./pages/solutions/Talent";
import SolutionsInnovation from "./pages/solutions/Innovation";
import ClientsTechPartners from "./pages/about/TechPartners";
import ClientsAcademicPartners from "./pages/clients/AcademicPartners";
import ClientsResellers from "./pages/clients/Resellers";
import CareersLife from "./pages/careers/Life";
import CareersOpenings from "./pages/careers/Openings";
import CareersBenefits from "./pages/careers/Benefits";
import InsightsBlogs from "./pages/insights/blog";
import InsightsEvents from "./pages/insights/events";
import InsightsWebinars from "./pages/insights/webinars";
import ServicesCareer from "./pages/services/career-counseling";
import AllpagePopup from "./pages/popup";
import Sessionbooking from "./pages/services/session-booking";
import Counselorlogin from "./pages/services/counselor-login";
import CounselorDashboard from "./pages/services/counselor-dashboard";
import PaidSession from "./pages/services/paid-session";
import Contactus from "./pages/contactus/Contactus";
// import BlogAdmin from "./pages/insights/Blogadmin";
import { AnimatePresence } from "framer-motion";
import Editech from "./pages/industries/edtech";
import BlogList from "./pages/insights/BlogList";
import Solution from "./pages/solutions/Solution";
import AboutUsSection from "./pages/about/aboutus";
import Services from "./pages/services/services";
import HR from "./pages/solutions/Hr";
import PaidsessionInitial from "./pages/services/paid-sessionInitial";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
    <h1 className="text-3xl font-bold text-[#21204c] mb-4">
          Our team is currently working on this page. Please check back soon!
    </h1>
    <p className="text-lg text-gray-700 mb-6">
      
    </p>
    {/* Optional: Add a link/button to go back home */}
    <a
      href="/"
      className="inline-block px-6 py-3 bg-[#21204c] text-white rounded-md hover:bg-[#5a3e9a] transition"
    >
      Go to Home
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Home & About */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUsSection />} />
              <Route path="/about/team" element={<AboutTeam />} />
              <Route path="/about/culture" element={<AboutCulture />} />
              <Route
                path="/about/tech-partners"
                element={<ClientsTechPartners />}
              />
              <Route path="/about/leadership" element={<AboutLeadership />} />

              {/* Solutions */}
              <Route path="/solutions" element={<Solution />} />
              <Route
                path="/solutions/learning"
                element={<SolutionsLearning />}
              />
              <Route path="/solutions/talent" element={<SolutionsTalent />} />
              <Route
                path="/solutions/innovation"
                element={<SolutionsInnovation />}
              />
              <Route path="/solutions/hr" element={<HR />} />

              {/* Clients */}
              <Route
                path="/clients/academic-partners"
                element={<ClientsAcademicPartners />}
              />
              <Route path="/clients/resellers" element={<ClientsResellers />} />

              {/* Careers */}
              <Route path="/careers/life" element={<CareersLife />} />
              <Route path="/careers/openings" element={<CareersOpenings />} />
              <Route path="/careers/benefits" element={<CareersBenefits />} />

              {/* Insights */}
              <Route path="/insights/Blog" element={<InsightsBlogs />} />
              <Route path="/insights/Events" element={<InsightsEvents />} />
              <Route path="/insights/Webinars" element={<InsightsWebinars />} />
              {/* <Route path="/insights/blogadmin" element={<BlogAdmin />} /> */}
              <Route path="/insights/bloglist" element={<BlogList />} />

              {/* Services */}
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/career-counseling"
                element={<ServicesCareer />}
              />
              <Route
                path="/services/sessionbooking"
                element={<Sessionbooking />}
              />
              <Route
                path="/services/counselor-login"
                element={<Counselorlogin />}
              />
              <Route
                path="/services/counselor-dashboard"
                element={<CounselorDashboard />}
              />
              <Route path="/services/paid-session" element={<PaidSession />} />
              <Route path="/services/paidsessioninitial" element={<PaidsessionInitial />} />

              {/* Industries */}
              <Route path="/industries/edtech" element={<Editech />} />
              <Route path="/industries/banking" element={<Editech />} />

              {/* Contact */}
              <Route path="/contactus" element={<Contactus />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>

          {/* Global Popup */}
          <AllpagePopup />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
