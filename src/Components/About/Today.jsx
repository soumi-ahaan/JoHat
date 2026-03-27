import React, { useState } from "react";

const stepsData = [
  {
    id: 1,
    title: "VIRTUAL TOUR",
    desc: "We guide you through the full application process — from preparing documents to submitting your request to the right private lender.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    id: 2,
    title: "ONLINE APPOINTMENT",
    desc: "Get expert advice tailored to your project. We help you evaluate funding options and choose the best path for maximum returns.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 3,
    title: "EASY SEARCH",
    desc: "We analyze your requirements and connect you with trusted private money lenders who align perfectly with your goals.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
];

const Today = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#F4F1ED] py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px]">

        {/* HEADING */}
        <h2 className="text-center text-xl md:text-[35px] text-[#1c1c1c] font-bold tracking-[2px] uppercase font-designer">
          Find Your Dream Home Today
        </h2>

        <p className="text-center text-gray-500 mt-3 max-w-[700px] mx-auto text-[16px] font-lato">
          Smart solutions and expert support to help you make confident real estate decisions.
        </p>

        {/* MAIN BOX */}
        <div className="mt-12 bg-black p-[12px] md:p-[15px] xl:p-[26px] relative">

          <div className="grid md:grid-cols-2 gap-4">

            {/* RIGHT CONTENT → NOW LEFT */}
            <div className="flex flex-col justify-center relative z-10 order-2 md:order-1">
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
                  <h3 className="font-normal uppercase text-[12px] md:text-[13px] lg:text-[20px] xl:text-[23px] tracking-wide font-designer">
                    {step.id}. {step.title}
                  </h3>

                  <p className="text-sm md:text-base mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* LEFT IMAGE → NOW RIGHT */}
            <div className="h-[274px] md:h-[405px] lg:h-[424px] xl:h-[382px] overflow-hidden relative order-1 md:order-2">
              <img
                key={active}
                src={stepsData[active].image}
                alt={stepsData[active].title}
                className="w-full h-full object-cover animate-fade"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Today;