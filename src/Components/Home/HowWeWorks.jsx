import React, { useState } from "react";

const stepsData = [
  {
    id: 1,
    title: "Submit Your Application",
    desc: "Fill out a quick and simple form to tell us about your investment goals and financial needs.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    id: 2,
    title: "Get Personalized Guidance",
    desc: "Our experts review your application and provide tailored advice to match you with the best funding options.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 3,
    title: "Secure Your Funding",
    desc: "Receive fast approval and access flexible financing solutions designed to support your property investment.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    id: 4,
    title: "Finalize Your Investment",
    desc: "We assist you through documentation and final steps to ensure a smooth and hassle-free closing process.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
];

const HowWeWorks = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-center text-[35px] font-[#1c1c1c] font-bold tracking-[2px] uppercase font-designer">
          How We Works
        </h2>

        <p className="text-center text-gray-500 mt-3 font-[#333333] max-w-[700px] mx-auto text-[16px] font-lato">
          We simplify the journey from funding to property ownership with a clear,
          step-by-step process designed for speed and confidence.
        </p>

        {/* MAIN BOX */}
        <div className="mt-12 bg-black p-4 rounded-lg relative">

          <div className="grid md:grid-cols-2 gap-4">

            {/* LEFT IMAGE */}
            <div className="h-[350px] md:h-[420px] overflow-hidden relative">
              <img
                key={active} // 🔥 IMPORTANT FIX
                src={stepsData[active].image}
                alt=""
                className="w-full h-full object-cover animate-fade"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center relative z-10">

              {stepsData.map((step, index) => (
                <div
                  key={step.id}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer px-6 py-4 transition-all duration-300 ${
                    active === index
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >

                  <h3 className="font-bold uppercase text-[15px] tracking-wide">
                    {step.id}. {step.title}
                  </h3>

                  <p className="text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <button className="w-full bg-gradient-to-r from-teal-700 to-green-600 text-white py-3 rounded-full font-semibold">
            Get Pre-Approved
          </button>
        </div>

      </div>
    </div>
  );
};

export default HowWeWorks;