import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { MenuItem } from "../types";
import { menuItems } from "../data/menuItems";
import coyoliaLogo from "../assets/CoyoliaPrimarylogo.avif";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  const navbarRef = useRef<HTMLDivElement | null>(null);

  // Close all dropdowns when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setActiveSubmenu(null);
        setIsOpen(false);

      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubmenu = (title: string) => {
    // Close any currently open submenu before toggling the new one
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const handleMenuItemClick = (path: string) => {
    // Close the menu and reset active submenu after a submenu item is clicked
    setIsOpen(false);
    setActiveSubmenu(null); // Close the dropdown after selecting an item
  };

  const renderSubmenu = (items: MenuItem[]) => (
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50 text-lg">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-4 py-2 text-gray-800 hover:bg-[#7655b7] hover:text-white transition-colors"
          onClick={() => handleMenuItemClick(item.path)} // Close the dropdown after clicking a menu item
        >
          {item.title}
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      ref={navbarRef}
      className="bg-gradient-to-r from-[#7655b7] to-[#21204C] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={coyoliaLogo}
              alt="COYOLIA Logo"
              className="w-30 h-12 object-contain rounded-lg bg-white opacity-75 shadow-md ring-2 ring-white/20 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:opacity-100"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <div key={item.path} className="relative group">
                <button
                  className="px-3 py-2 rounded-md text-base font-medium hover:text-[#7655b7] flex items-center"
                  onClick={() => toggleSubmenu(item.title)}
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </button>
                {item.submenu &&
                  activeSubmenu === item.title &&
                  renderSubmenu(item.submenu)}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu with Gradient Background */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-gradient-to-r from-[#21204C] to-[#7655b7]">
            {menuItems.map((item) => (
              <div key={item.path}>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium hover:text-[#7655b7] flex items-center justify-between"
                  onClick={() => toggleSubmenu(item.title)}
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </button>
                {item.submenu && activeSubmenu === item.title && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-3 py-2 text-base font-medium hover:text-[#7655b7]"
                        onClick={() => handleMenuItemClick(subItem.path)} // Close the menu after clicking a submenu item
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
