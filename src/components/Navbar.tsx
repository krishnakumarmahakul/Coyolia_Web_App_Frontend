import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { menuItems } from "../data/menuItems";
import coyoliaLogo from "../assets/CoyoliaPrimarylogo.avif";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  const handleMouseEnter = (title: string) => setActiveSubmenu(title);
  const handleMouseLeave = () => setActiveSubmenu(null);

  const isActive = (path: string): boolean =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav ref={navbarRef} className="bg-white text-[#21204C] shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={coyoliaLogo}
              alt="COYOLIA Logo"
              className="h-16 object-contain transition-all duration-300 ease-in-out hover:scale-110"
            />
          </Link>

          
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu ? (
                  <>
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-lg font-medium flex items-center ${
                        isActive(item.path) ? "text-[#7655b7]" : "hover:text-[#7655b7]"
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </Link>
                    {activeSubmenu === item.title && (
                      <div className="absolute left-0 mt-2 w-56 bg-white text-[#21204C] rounded-md shadow-lg z-10">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 text-base ${
                              isActive(subItem.path)
                                ? "text-[#7655b7] bg-[#f0f0f0]"
                                : "hover:text-[#7655b7] hover:bg-[#f0f0f0]"
                            }`}
                            onClick={handleMenuItemClick}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-lg font-medium flex items-center ${
                      isActive(item.path) ? "text-[#7655b7]" : "hover:text-[#7655b7]"
                    }`}
                    onClick={handleMenuItemClick}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          
          <button
            className="md:hidden p-2 text-[#21204C]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        
        {isOpen && (
          <div className="md:hidden pb-4 bg-white text-[#21204C]">
            {menuItems.map((item) => (
              <div key={item.path} className="px-2">
                <Link
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.path) ? "text-[#7655b7]" : "hover:text-[#7655b7]"
                  }`}
                  onClick={handleMenuItemClick}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`block px-3 py-2 text-base font-medium ${
                          isActive(subItem.path)
                            ? "text-[#7655b7]"
                            : "hover:text-[#7655b7]"
                        }`}
                        onClick={handleMenuItemClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
