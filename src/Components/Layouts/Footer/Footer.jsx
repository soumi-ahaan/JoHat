import React from 'react'
import { FacebookLogo, LinkedinLogoIcon, XLogo, InstagramLogo, CaretRight } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white w-full relative overflow-hidden">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px] pt-[80px] pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Links */}
        <div>
          <ul className="space-y-4 font-lato text-[16px] font-medium">
            {[
              { name: 'Home', link: '#' },
              { name: 'About Us', link: '#' },
              { name: 'Services', link: '#' },
              { name: 'Contact Us', link: '#' }
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="block cursor-pointer transition-all duration-300 hover:translate-x-2 no-underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <ul className="space-y-4 font-lato text-[16px] font-medium">
            {[
              { name: 'Privacy Policy', link: '#' },
              { name: 'Terms of Use', link: '#' }
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="block cursor-pointer transition-all duration-300 hover:translate-x-2 no-underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-designer text-[20px] font-normal mb-4">CONTACT US</h3>
          <a href="tel:+12314272289" className="font-lato text-[16px] font-medium mb-5 block no-underline" target="_blank" rel="noopener noreferrer">+1-231-427-2289</a>
          <a href="mailto:johat1011953@outlook.com" className="font-lato text-[16px] font-medium mb-5 block no-underline" target="_blank" rel="noopener noreferrer">johat1011953@outlook.com</a>
          <a href="#" className="text-[16px] font-medium mb-5 block no-underline" target="_blank" rel="noopener noreferrer">james@johatenterises.com</a>

          <h3 className="font-designer text-[20px] font-normal mb-4">LOCATION</h3>
          <a href="https://maps.app.goo.gl/tCoLd3a9tuKC99aN6" target="_blank" rel="noopener noreferrer" className="font-lato text-[16px] font-medium no-underline block">
            <span className="block">3975 Pulverwoods Rd,</span>
            <span className="block">Williamsburg, MI 49690, USA</span>
          </a>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-designer text-[20px] font-normal mb-4">SUBSCRIBE</h3>
          <p className="text-[16px] italic font-medium mb-6">
            Sign up for the latest updates and exclusive offers from Johat Enterprises.
          </p>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 text-[16px]"
            />

            <div className="flex items-center border-b border-white/50 focus-within:border-white">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full bg-transparent outline-none py-2 text-[16px]"
              />
              <button className="ml-2 w-7 h-6 flex items-center justify-center rounded-full bg-white text-[#FACA51] cursor-pointer border border-transparent transition-all duration-300 hover:bg-transparent hover:border-white">
                <CaretRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative">
        {/* Full width base line */}
        <div className="border-t border-white/0 w-full"></div>

        {/* Animated pulse line (inside 1440px container) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-4 md:px-8 lg:px-12 xl:px-[60px]">
          <div className="h-[1px] bg-white w-full animate-pulse-line origin-center"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px] lg:text-[16px] font-medium text-center md:text-left">
          © 2026 Johat Enterprises - All Rights Reserved. Designed And Developed By
          <a href="https://ahaansoftware.com/" target="_blank" rel="noopener noreferrer" className="font-extrabold text-[16px] no-underline ml-1">
            AHAAN SOFTWARE CONSULTING
          </a>
        </p>

        <div className="flex gap-4">
          {[
            { icon: <FacebookLogo size={28} />, link: "https://facebook.com" },
            { icon: <LinkedinLogoIcon size={28} />, link: "https://www.linkedin.com/in/james-taylor-69b20544/" },
            { icon: <XLogo size={28} />, link: "https://x.com/JohatEnter3002" },
            { icon: <InstagramLogo size={28} />, link: "https://www.instagram.com/accounts/login/?next=%2Fjohatenterprises%2F&source=omni_redirect" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 no-underline"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Background Big Text */}
      <h1 className="relative bottom-[20px] left-0 w-full text-center font-designer font-normal text-white/10 leading-none select-none pointer-events-none text-[30px] md:text-[40px] lg:text-[80px] xl:text-[110px]">
        JOHAT ENTERPRISES
      </h1>

      {/* Animation */}
      {/* <style jsx>{`
        @keyframes pulseLine {
          0%, 100% {
            transform: scaleX(0.7);
            opacity: 0.4;
        }
          50% {
           transform: scaleX(1.2);
           opacity: 1;
        }
      }
      .animate-pulse-line {
       animation: pulseLine 2s ease-in-out infinite;
      }
      `}</style> */}
    </footer>
  )
}

export default Footer