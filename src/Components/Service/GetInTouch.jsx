import React from "react";
import { useForm } from "react-hook-form";
import {
  FacebookLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react";

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="bg-[#F4F1ED] py-16 px-4 md:px-10 lg:px-30">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Title */}
        <h2 className="text-center text-xl md:text-[32px] lg:text-[35px] mb-12 font-designer">
          GET IN TOUCH WITH US
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-6 max-w-[420px]">
            
            <p className="text-xl md:text-2xl lg:text-[28px] font-bold">
              +1-231-427-2289
            </p>

            <p className="text-xl md:text-2xl lg:text-[28px] font-bold break-words">
              johat1o11953@outlook.com
            </p>

            <p className="text-xl md:text-2xl lg:text-[28px] font-bold break-words">
              james@johatenterises.com
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              3975 Pulverwoods Rd,<br />
              Williamsburg, MI 49690, USA
            </p>

            <button className="border border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition">
              Get Directions
            </button>

            {/* Social */}
            <div>
              <p className="mb-3 font-designer text-sm md:text-base">
                FOLLOW US
              </p>

              <div className="flex gap-4">
                {[FacebookLogo, XLogo, InstagramLogo].map((Icon, i) => (
                  <div
                    key={i}
                    className="p-2 border rounded-full cursor-pointer hover:bg-gray-200 transition"
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
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
                  {...register("firstName", { required: true })}
                  className="w-full mt-1 p-3 bg-white outline-none"
                />
              </div>

              <div>
                <label className="text-xs md:text-sm font-bold">
                  LAST NAME
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className="w-full mt-1 p-3 bg-white outline-none"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs md:text-sm font-bold">
                  PHONE NO
                </label>
                <input
                  {...register("phone", { required: true })}
                  className="w-full mt-1 p-3 bg-white outline-none"
                />
              </div>

              <div>
                <label className="text-xs md:text-sm font-bold">
                  EMAIL
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full mt-1 p-3 bg-white outline-none"
                />
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
              bg-gradient-to-r from-teal-700 to-teal-500 hover:opacity-90 transition"
            >
              Send
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;