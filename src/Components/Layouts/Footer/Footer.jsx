import React, { useState } from 'react'
import {
  FacebookLogo,
  LinkedinLogoIcon,
  XLogo,
  InstagramLogo,
  CaretRight,
  PhoneCallIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
} from "@phosphor-icons/react";

const Footer = () => {

  const [success, setSuccess] = useState(false);

  return (
    <footer className="bg-[#1C1C1C] text-white w-full relative overflow-hidden">

      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px] pt-[80px] pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Links */}
        <div>
          <ul className="space-y-4 text-[16px] font-medium">
            {[
              { name: 'Home', link: '/' },
              { name: 'About Us', link: '/about' },
              { name: 'Services', link: '/service' },
              { name: 'Contact Us', link: '/contact' }
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
          <ul className="space-y-4 text-[16px] font-medium">
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

          {/* Phone */}
          <div className="flex items-start gap-2 mb-5">
            <PhoneCallIcon
              size={24}
              weight="fill"
              className="text-[#ededed] flex-shrink-0 mt-[2px]"
            />
            <div className="flex flex-col gap-1">
              <a href="tel:+12314272289" className="text-[16px] font-medium no-underline">
                +1-231-427-2289
              </a>
              <a href="tel:+12314596853" className="text-[16px] font-medium no-underline">
                +1-231-459-6853
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-2 mb-5">
            <EnvelopeSimpleIcon
              size={24}
              weight="fill"
              className="text-[#ededed] flex-shrink-0 mt-[2px]"
            />
            <div className="flex flex-col">
              <a
                href="mailto:johat1011953@outlook.com"
                className="text-[16px] font-medium no-underline"
              >
                johat1011953@outlook.com
              </a>
              <a
                href="mailto:james@johatenterprises.com"
                className="text-[16px] font-medium no-underline"
              >
                james@johatenterprises.com
              </a>
            </div>
          </div>

          {/* Location */}
          <h3 className="font-designer text-[20px] font-normal mb-4">LOCATION</h3>
          <a
            href="https://maps.app.goo.gl/tCoLd3a9tuKC99aN6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-lato text-[16px] font-medium no-underline flex items-start gap-2"
          >
            <MapPinIcon size={24} weight="fill" className="text-[#ededed]" />
            <div className="flex flex-col leading-snug">
              <span>3975 Pulverwoods Rd,</span>
              <span>Williamsburg, MI 49690, USA</span>
            </div>
          </a>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-designer text-[20px] font-normal mb-4">SUBSCRIBE</h3>

          <p className="text-[16px] italic font-medium mb-6">
            Sign up for the latest updates and exclusive offers from Johat Enterprises LLC.
          </p>

          {/* FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // 🚫 stop refresh

              const formData = new FormData(e.target);
              const name = formData.get("name");
              const email = formData.get("email");

              console.log({ name, email });

              setSuccess(true); // ✅ show success
              e.target.reset(); // clear inputs
            }}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              required
              className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 text-[16px]"
            />

            <div className="flex items-center border-b border-white/50 focus-within:border-white">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                className="w-full bg-transparent outline-none py-2 text-[16px]"
              />

              <button
                type="submit"
                className="ml-2 w-7 h-6 flex items-center justify-center rounded-full bg-white text-[#FACA51] cursor-pointer border border-transparent transition-all duration-300 hover:bg-transparent hover:border-white"
              >
                <CaretRight size={18} weight="bold" />
              </button>
            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="text-green-400 text-[14px]">
                Successfully submitted!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px] lg:text-[16px] font-medium text-center md:text-left">
          © 2026 Johat Enterprises LLC - All Rights Reserved. Designed And Developed By
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

      {/* Background Text */}
      <h1 className="relative bottom-[20px] left-0 w-full text-center font-designer font-normal text-white/10 leading-none select-none pointer-events-none text-[25px] md:text-[40px] lg:text-[65px] xl:text-[85px] 2xl:text-[100px]">
        JOHAT ENTERPRISES LLC
      </h1>

    </footer>
  )
}

export default Footer;