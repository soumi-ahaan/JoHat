import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import {
  PhoneCallIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

export default function ContactForm() {
  /* =========================
     FORM SETUP
  ========================= */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
    },
  });

  /* =========================
     CAPTCHA LOGIC
  ========================= */
  const [captcha, setCaptcha] = React.useState({ num1: 0, num2: 0 });
  const [showCaptcha, setShowCaptcha] = React.useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2 });
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  /* =========================
     SUBMIT
  ========================= */
 const onSubmitForm = (data) => {
  // STEP 1: if captcha not shown → show it first
  if (!showCaptcha) {
    setShowCaptcha(true);
    generateCaptcha();
    return;
  }

  // STEP 2: captcha already visible → final submit
  console.log("Final Form Data:", data);
  console.log("Submitted Successfully");

  reset();
  setShowCaptcha(false);
  generateCaptcha();
};
const sectionRef = useRef(null);
const leftItemsRef = useRef([]);
const rightItemsRef = useRef([]);
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "play none none none", // no reverse
    },
  });

  // LEFT SIDE (slide from left)
  tl.from(leftItemsRef.current, {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.25,
  });

  // RIGHT SIDE (slide up)
  tl.from(
    rightItemsRef.current,
    {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
    },
    "-=0.8"
  );
}, []);
  const required = { required: "This field is required" };

  return (
   <section ref={sectionRef} className=" bg-white relative pb-[54px]">
        <div className="absolute w-full -top-[100px] ">
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px] ">

      {/* Card (overlay style) */}
      <div className="border-[10px] border-white shadow-md grid grid-cols-1 lg:grid-cols-2 ">

             {/* LEFT COLUMN */}
        <div className="bg-[#1C1C1C] text-white py-10  px-4 md:px-8 lg:pl-10 lg:pr-10  xl:pr-[150px] relative overflow-hidden  ">

          {/* TOP CONTENT */}
          <div ref={(el) => (leftItemsRef.current[0] = el)}>
            <h2 className="text-[28px] font-bold uppercase tracking-wide font-designer">
              Contact Information
            </h2>
            <p className="text-base text-[#C9C9C9] mt-5">
              Say something to start the contact
            </p>
          </div>
          <div ref={(el) => (leftItemsRef.current[1] = el)} className="py-20 space-y-9 text-base ">
              <a href="tel:+123 456 7890" className="flex gap-[25px]"><PhoneCallIcon size={24} color="#ededed" weight="fill" /> +123 456 7890</a>
              <a href="mailto:johat1o11953@outlook.com" className="flex gap-[25px]"><EnvelopeSimpleIcon size={24}  color="#ededed" weight="fill"/> johat1o11953@outlook.com<br/>james@johatenterises.com</a>
              <a href="https://maps.app.goo.gl/tCoLd3a9tuKC99aN6" className="flex gap-[25px]"><MapPinIcon size={24} color="#ededed" weight="fill" /> 3975 Pulverwoods Rd, Williamsburg, MI <br/>49690, USA</a>
            </div>

          {/* BOTTOM ICONS */}
          <div ref={(el) => (leftItemsRef.current[2] = el)} className="relative flex gap-4 pt-16 z-20">
            <a href="https://facebook.com" className="p-2.5 border border-[#FFFFFF80] rounded-full flex items-center justify-center hover:scale-105"><FacebookLogoIcon size={24}/></a>
            <a href="https://x.com/JohatEnter3002" className="p-2.5 border border-[#FFFFFF80] rounded-full flex items-center justify-center hover:scale-105"><XLogoIcon size={24}/></a>
            <a href="https://www.instagram.com/accounts/login/?next=%2Fjohatenterprises%2F&source=omni_redirect" className="p-2.5 border border-[#FFFFFF80] rounded-full flex items-center justify-center hover:scale-105"><InstagramLogoIcon size={24}/></a>
            <a href="https://www.linkedin.com/in/james-taylor-69b20544/" className="p-2.5 border border-[#FFFFFF80] rounded-full flex items-center justify-center hover:scale-105"><LinkedinLogoIcon size={24}/></a>
          </div>

          {/* DECORATIVE CIRCLES */}
          <div className="absolute bottom-0 right-0 z-0">
            <div className="w-[259px] h-[259px] bg-[#2A2727] rounded-full translate-x-1/4 translate-y-1/4"></div>
            <div className="w-[128px] h-[128px] bg-[#48484880] rounded-full absolute bottom-[70px] right-[140px] "></div>
          </div>

        </div>

            {/* RIGHT */}
            <div className="bg-white py-[60px] px-10 px-4 md:px-8 lg:pl-10 lg:pr-10 xl:pl-[50px] xl:pr-[112px]">
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
              >

                {/* FIRST NAME */}
                <div ref={(el) => (rightItemsRef.current[0] = el)}>
                  <label className="text-sm">First Name</label>
                  <input
                   
                    {...register("firstname", {
                      required: "Firstname is required",
                      pattern: {
                        value:
                          /^[A-Za-z\s]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
                    className="w-full border-b py-2"
                  />
                  {errors.firstname && (
                    <p className="text-red-500">{errors.firstname.message}</p>
                  )}
                </div>

                {/* LAST NAME */}
                <div ref={(el) => (rightItemsRef.current[1] = el)}>
                  <label className="text-sm">Last Name</label>
                  <input
                    {...register("lastname", {
                      required: "Lastname is required",
                      pattern: {
                        value:
                          /^[A-Za-z\s]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
                    className="w-full border-b py-2"
                  />
                  {errors.lastname && (
                    <p className="text-red-500">{errors.lastname.message}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div ref={(el) => (rightItemsRef.current[2] = el)}>
                  <label className="text-sm">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/,
                        message: "Invalid email",
                      },
                    })}
                    className="w-full border-b py-2"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* PHONE */}
                <div ref={(el) => (rightItemsRef.current[3] = el)}>
                  <label className="text-sm">Phone</label>
                  <input
                    {...register("phone", {
            required: "Phone number is required",
            validate: {
  validFormat: (value) => {
    if (value === "") return true;

    const plusCount = (value.match(/\+/g) || []).length;

    if (plusCount > 1) {
      return "Only one '+' is allowed";
    }

    if (value.includes("+") && !value.startsWith("+")) {
      return "'+' must be at the beginning";
    }

    if (!/^[+]?[0-9]*$/.test(value)) {
      return "Only digits and '+' at the beginning are allowed";
    }

    if (value.length > 16) {
      return "Phone number too long";
    }

    return true;
  },
}
          })}
          onInput={(e) => {
           e.preventDefault();
  let paste = (e.clipboardData || window.clipboardData).getData("text");

  paste = paste.replace(/[^0-9+]/g, "");

  if (paste.startsWith("+")) {
    paste = "+" + paste.slice(1).replace(/\+/g, "");
  } else {
    paste = paste.replace(/\+/g, "");
  }

  setValue("phone", paste.slice(0, 15));
  }}
  onPaste={(e) => {
  e.preventDefault();
  let paste = (e.clipboardData || window.clipboardData).getData("text");

  paste = paste.replace(/[^0-9+]/g, "");

  if (paste.startsWith("+")) {
    paste = "+" + paste.slice(1).replace(/\+/g, "");
  } else {
    paste = paste.replace(/\+/g, "");
  }

  setValue("phone", paste.slice(0, 15));
}}
                    className="w-full border-b py-2"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* MESSAGE */}
                <div ref={(el) => (rightItemsRef.current[4] = el)} className="md:col-span-2">
                  <label className="text-sm">Message</label>
                  <textarea className="w-full border-b py-2"></textarea>
                </div>

                {/* CAPTCHA */}
                {showCaptcha && (
  <div className="md:col-span-2">
    <label className="block text-sm mb-[4px]">
      Captcha: {captcha.num1} + {captcha.num2} = ?
    </label>

    <input
      type="text"
      placeholder="Your Answer"
      className={`w-full border-b border-[#8D8D8D] outline-none py-2 ${
        errors.captcha ? "is-invalid" : ""
      }`}
      {...register("captcha", {
        required: "Captcha is required",
        validate: (value) =>
          parseInt(value) === captcha.num1 + captcha.num2 ||
          "Incorrect captcha",
      })}
    />

    {errors.captcha && (
      <p className="text-red-500 text-base">{errors.captcha.message}</p>
    )}
  </div>
)}

                {/* BUTTON */}
                <div ref={(el) => (rightItemsRef.current[5] = el)} className="md:col-span-2 text-right">
                  <button className="animate-btn text-white px-[30px] py-3 rounded-full">
                    Submit
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
      <div className="py-[750px] md:py-[554px] lg:pb-[54px]"></div>
    </section>
  );
}