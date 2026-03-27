import React from "react";
// import your image later
import mainImg from "../../assets/james.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";

const Who = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px]">

        {/* MAIN FLEX */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-center lg:items-start">

          {/* LEFT IMAGE */}
          <div className="border-[4px] border-[#FACA51] p-[16px_19px] box-border">
            <img
              src={mainImg} // replace later
              alt="Who We Are"
              className="w-full max-w-[509px] h-auto lg:h-[551px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1">

            {/* HEADING */}
            <h2 className="text-[28px] md:text-[32px] lg:text-[35px] font-normal text-[#333333]">
              WHO WE ARE
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#333333] leading-relaxed">
              Johat Enterprises is a trusted name in property investment funding
              solutions. Based in Williamsburg, Michigan, we specialize in connecting
              property investors with private lenders who understand their needs.
              Our expertise lies in identifying the right funding partners who can
              help our clients acquire, renovate, and sell properties for maximum profit.
            </p>

            {/* CARDS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-[14px]">

              {/* CARD 1 */}
              <div className="bg-[#F4F1ED] rounded-[16px] p-6 w-full sm:w-[337px] h-auto sm:h-[247px]">
                
                {/* ICON */}
                <div className="w-10 h-10 mb-4">
                  <img
                    src={icon1} // replace later
                    alt="Vision Icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-[18px] md:text-[20px] font-normal text-[#333333]">
                  OUR VISION
                </h3>

                {/* DESC */}
                <p className="mt-3 text-[14px] md:text-[16px] text-[#333333] leading-relaxed">
                  To become the go-to partner for investors seeking tailored financial
                  solutions and professional consultation in the private lending space.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-[#F4F1ED] rounded-[16px] p-6 w-full sm:w-[337px] h-auto sm:h-[247px]">
                
                {/* ICON */}
                <div className="w-10 h-10 mb-4">
                  <img
                    src={icon2} // replace later
                    alt="Mission Icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-[18px] md:text-[20px] font-normal text-[#333333]">
                  OUR MISSION
                </h3>

                {/* DESC */}
                <p className="mt-3 text-[14px] md:text-[16px] text-[#333333] leading-relaxed">
                  To empower property investors with fast, flexible, and reliable
                  private lending options that make every real estate project a success.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Who;