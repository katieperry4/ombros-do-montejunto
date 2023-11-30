import { useState } from "react";
import logo from "../assets/logos/logo-white-black-bg.svg";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="gradient"></div>
      {/* <div className="bg-black h-28 w-full absolute -z-3"></div> */}
      <nav className="lg:mx-28 lg:my-4 sticky top-10 z-10 mx-auto">
        <div className="flex items-center justify-evenly md:justify-between mx-24 xl:mx-64">
          <div className="flex items-center">
            <a href="/" className="">
              <img
                src={logo}
                alt="Ombros Do Montejunto logo"
                className="h-16"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-6 text-white">
              <li className="li-nav">
                <a href="/about">About</a>
              </li>
              <li className="li-nav">
                <a href="/land">Land</a>
              </li>
              <li className="li-nav">
                <a href="/winery">Winery</a>
              </li>
              <li className="li-nav">
                <a href="/wines">Our Wines</a>
              </li>
              <li className="li-nav">
                <a href="/news">News</a>
              </li>
              <li className="li-nav">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="white"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && <Sidebar />}
      </nav>
    </>
  );
};

export default Navbar;
