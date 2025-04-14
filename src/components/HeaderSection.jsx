import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Explore Logo"
            className="md:mr-2 mr-1 md:w-14 md:h-14 w-9 h-9"
          />
          <span className="md:text-2xl font-bold">Explore Panglao</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#tours" className="font-medium">
            Tours
          </a>
          <a href="#packages" className="font-medium">
            Packages
          </a>
          <a href="#hotel" className="font-medium">
            Hotel
          </a>
          <a href="#promo" className="font-medium">
            Promo
          </a>
          <a href="#testimonial" className="font-medium">
            Testimonial
          </a>
          <a href="#blogs" className="font-medium">
            Blogs
          </a>
          <a href="#contact" className="font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 relative">
          <button className="bg-indigo-600 text-white md:px-6 px-4 py-2 md:py-3 rounded-md text-xs md:text-[16px] xl:text-[18px]">
            <a href="#contact">Get Exploration</a>
          </button>

          {/* Mobile Menu Toggle with Animation */}
          <div className="lg:hidden relative">
            <button
              onClick={toggleDropdown}
              className="btn btn-ghost rounded-xl border border-none hover:cursor-pointer w-10 h-10 flex items-center justify-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <ul className="absolute right-0 top-14 menu bg-base-100 rounded-box z-[50] w-40 p-2 shadow space-y-2">
                <li>
                  <a href="#tours" onClick={closeDropdown}>
                    Tours
                  </a>
                </li>
                <li>
                  <a href="#packages" onClick={closeDropdown}>
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#hotel" onClick={closeDropdown}>
                    Hotel
                  </a>
                </li>
                <li>
                  <a href="#promo" onClick={closeDropdown}>
                    Promo
                  </a>
                </li>
                <li>
                  <a href="#testimonial" onClick={closeDropdown}>
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="#blogs" onClick={closeDropdown}>
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeDropdown}>
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
