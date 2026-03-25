
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="absolute w-full top-0 z-50">
        <div className="max-w-[1440px] mx-auto  px-4 md:px-8 lg:px-12 xl:px-[60px] py-[37px]">
        <div className="bg-transparent md:bg-[#F8FFFB] rounded-full pl-4 pr-2 lg:px-4 xl:pl-[21px] xl:pr-[11px] py-2 lg:py-[11px] flex items-center justify-between relative md:shadow-sm">

          {/* LEFT MENU */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-[50px] xl:mr-[71px] xl:py-[11px] text-xs lg:text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-2.5 py-[5px] xl:px-[20px] xl:py-[10px] bg-[#C7FFEE] rounded-full"
                  : "px-[5px] xl:px-[10px]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-2.5 py-[5px] xl:px-[20px] xl:py-[10px] bg-[#C7FFEE] rounded-full"
                  : "px-[5px] xl:px-[10px]"
              }
            >About Us</NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "px-2.5 py-[5px] xl:px-[20px] xl:py-[10px] bg-[#C7FFEE] rounded-full"
                  : "px-[5px] xl:px-[10px]"
              }
            >Services</NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-2.5 py-[5px] xl:px-[20px] xl:py-[10px] bg-[#C7FFEE] rounded-full"
                  : "px-[5px] xl:px-[10px]"
              }
            >Contact Us</NavLink>
          </nav>

          {/* LOGO (CENTER) */}
          <div className="left-0 absolute md:left-1/2 md:-translate-x-1/2">
            <a href="/" className="text-decoration-none"><img
              src={logo}
              alt="logo"
              className="w-[75px] h-[75px] lg:w-[119px] lg:h-[119px] xl:w-[139px] xl:h-[139px]  object-contain shadow-sm rounded-full"
            /></a>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="hidden md:flex items-center gap-2 xl:gap-[11px] xl:ml-[188px]">
            <a href="" className="text-sm lg:text-base bg-gradient cursor-pointer text-white py-2.5 px-3 xl:px-[30px] xl:py-[20px] rounded-full">
              Browse Properties
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-auto flex items-center rounded-lg  bg-white/10  text-white border border-white/20  justify-center h-10 w-10 text-[#066478]"
            onClick={() => setOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        </div>
      </header>

      {/* OFF-CANVAS MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white/20 backdrop-blur-md shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      ><button onClick={() => setOpen(false)} className=" p-6 text-2xl left-0 text-white">✕</button>
        <div className=" flex flex-col gap-6">         

          <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-[20px] py-[10px] bg-[#C7FFEE] "
                  : "px-[20px] py-[10px] bg-transparent text-white"
              }
            >Home</NavLink>
          <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-[20px] py-[10px] bg-[#C7FFEE]"
                  : "px-[20px] py-[10px] bg-transparent text-white"
              }
            >About</NavLink>
         <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "px-[20px] py-[10px] bg-[#C7FFEE]"
                  : "px-[20px] py-[10px] bg-transparent text-white"
              }
            >Services</NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-[20px] py-[10px] bg-[#C7FFEE]"
                  : "px-[20px] py-[10px] bg-transparent text-white"
              }
            >Contact Us</NavLink>

          
          <button className="mx-6 bg-gradient text-white px-[20px] py-[12px] rounded-full">
            Browse Properties
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Header