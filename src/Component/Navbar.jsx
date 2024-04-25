import React, { useState } from "react";
import logo from "../assets/Dogbanacorn1 1.png";
import { Close, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="md:px-8 top-0 text-white sticky z-50 py-3 backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-14 w-14 object-cover mr-2" src={logo} alt="" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-20 text-white">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Roadmap</a>
            </li>
            <li>
              <a href="">Whitepaper</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href=""
              className="py-2 font-semibold px-6 border border-purple-700 text-purple-700 rounded-3xl"
            >
              Trade with BOM
            </a>
            <a
              href=""
              className="font-semibold bg-gradient-to-l from-purple-700 to-purple-500 py-2 px-4 rounded-3xl"
            >
              Buy $BOM
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={handleMenu}
              className="ease-in-out duration-1000 text-white"
            >
              {menuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden text-white fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
            <ul className="text-center">
              <li className="py-4">
                <a href="">Features</a>
              </li>
              <li className="py-4">
                <a href="">WorkFlow</a>
              </li>
              <li className="py-4">
                <a href="">Pricing</a>
              </li>
              <li className="py-4">
                <a href="">Testimonials</a>
              </li>
            </ul>
            <div className="sm:flex-row  flex flex-col items-center align-middle justify-center gap-4">
              <a
                href=""
                className="py-2 font-semibold px-6 border border-purple-700 text-purple-700 rounded-3xl"
              >
                Trade with BOM
              </a>
              <a
                href=""
                className="bg-gradient-to-l from-purple-700 to-purple-500 py-2 px-4 rounded-3xl"
              >
                Buy $BOM
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
