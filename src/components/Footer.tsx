import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // {
    //   href: 'https://www.facebook.com/coyoliatech',
    //   Icon: Facebook,
    //   label: 'Facebook'
    // },
    // {
    //   href: 'https://www.instagram.com/coyoliatech',
    //   Icon: Instagram,
    //   label: 'Instagram'
    // },
    // {
    //   href: 'https://twitter.com/coyoliatech',
    //   Icon: Twitter,
    //   label: 'Twitter'
    // },
    {
      href: 'https://www.linkedin.com/company/coyolia/',
      Icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://www.youtube.com/@CoyoliaTechnologies',
      Icon: Youtube,
      label: 'Youtube'
    }
  ];

  return (
    <footer className="bg-[#21204C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <h3 className="text-xl font-bold mb-4">About Coyolia</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Coyolia is dedicated to delivering AI-powered solutions that empower your digital journey. We build with vision, design with passion, and support with care.
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#c3b3fa] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#c3b3fa] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#c3b3fa] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:text-[#c3b3fa] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Stay updated with our latest news and offerings.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7655b7]"
              />
              <button
                type="submit"
                className="bg-[#7655b7] hover:bg-[#8b6dd4] text-white py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#c3b3fa]" />
                +919739005000
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#c3b3fa]" />
                info@coyolia.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#c3b3fa]" />
                #405, Aakruti Nivas Apartments, Czech Colony Hyderabad, 500018
              </p>
            </div>
          </div>
        </div>

        
        <div className="mt-12 flex justify-center space-x-6">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white hover:text-[#c3b3fa] transition-transform transform hover:scale-110 duration-300"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-center text-sm text-gray-400">
            © {currentYear}{' '}
            <span className="font-semibold text-white">COYOLIA</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;