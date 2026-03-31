import React from "react";
import { useForm } from "react-hook-form";
import {
 FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const GetInTouch = () => {
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

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  reset();
  };
  

  
const socialLinks = [
  { icon: FacebookLogoIcon, link: "https://facebook.com" },
  { icon: XLogoIcon, link: "https://x.com/JohatEnter3002" },
  { icon: InstagramLogoIcon, link: "https://www.instagram.com/accounts/login/?next=%2Fjohatenterprises%2F&source=omni_redirect" },
  { icon: LinkedinLogoIcon, link: "https://www.linkedin.com/in/james-taylor-69b20544/" },
];
const required = { required: "This field is required" };
  return (
    <section className="bg-[#F4F1ED] py-20 ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px]">
        
        {/* Title */}
        <h2 className="text-center text-xl md:text-[32px] lg:text-[35px] mb-12 font-designer">
          GET IN TOUCH WITH US
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 max-w-[420px] mt-3">
            
            <a href="tel:+12314272289" className="text-decoration-none text-xl md:text-2xl lg:text-[28px] font-bold">
              +1-231-427-2289
            </a>
            <a href="tel:+12314596853" className="text-decoration-none text-xl md:text-2xl lg:text-[28px] font-bold">
              +1-231-459-6853
            </a>

            <a href="mailto:johat1o11953@outlook.com" className="text-decoration-none text-xl md:text-2xl lg:text-[28px] font-bold break-words">
              johat1o11953@outlook.com
            </a>

            <a href="mailto:james@johatenterises.com" className="text-decoration-none text-xl md:text-2xl lg:text-[28px] font-bold break-words">
              james@johatenterises.com
            </a>

            <a href="https://maps.app.goo.gl/tCoLd3a9tuKC99aN6" className="text-decoration-none text-base md:text-lg text-gray-600 leading-relaxed">
              3975 Pulverwoods Rd,<br />
              Williamsburg, MI 49690, USA
            </a>

            <a
  href="https://maps.app.goo.gl/tCoLd3a9tuKC99aN6"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center border border-[#066478] text-[#066478] px-6 py-2 rounded-full hover:bg-[#066478] hover:text-white transition max-w-[180px]"
>
  Get Directions
</a>

            {/* Social */}
            <div>
              <p className="mb-3 font-designer text-sm md:text-base">
                FOLLOW US
              </p>

              <div className="flex gap-4">
  {socialLinks.map((item, i) => {
    const Icon = item.icon;

    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border rounded-full cursor-pointer hover:bg-gray-200 transition"
      >
        <Icon size={18} />
      </a>
    );
  })}
</div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 w-full"
          >
            
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs md:text-sm font-bold">
                  FIRST NAME
                </label>
                <input
                  {...register("firstname", {
                      required: "Firstname is required",
                      pattern: {
                        value:
                          /^[A-Za-z\s]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
                  className="w-full mt-1 p-3 bg-white outline-none"
                />
                {errors.firstname && (
                    <p className="text-red-500">{errors.firstname.message}</p>
                  )}
              </div>

              <div>
                <label className="text-xs md:text-sm font-bold">
                  LAST NAME
                </label>
                <input
                  {...register("lastname", {
                      required: "Lastname is required",
                      pattern: {
                        value:
                          /^[A-Za-z\s]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
                  className="w-full mt-1 p-3 bg-white outline-none"
                />
                {errors.lastname && (
                    <p className="text-red-500">{errors.lastname.message}</p>
                  )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs md:text-sm font-bold">
                  PHONE NO
                </label>
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
                  className="w-full mt-1 p-3 bg-white outline-none"
                />
                 {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
              </div>

              <div>
                <label className="text-xs md:text-sm font-bold">
                  EMAIL
                </label>
                <input
                  type="email"
                 {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/,
                        message: "Invalid email",
                      },
                    })}
                  className="w-full mt-1 p-3 bg-white outline-none"
                />
                 {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs md:text-sm font-bold">
                MESSAGE
              </label>
              <textarea
                rows="4"
                {...register("message")}
                className="w-full mt-1 p-3 bg-white outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full text-white font-medium 
              animate-btn hover:opacity-90 transition cursor-pointer"
            >
              Send
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;