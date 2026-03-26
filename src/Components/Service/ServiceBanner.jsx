import React from "react";
import servicebanner from "../../assets/ServiceBanner.webp";

const ServiceBanner = () => {
  return (
    <section
      className="relative h-[440px] min-[360px]:h-[540px] md:h-[650px] lg:h-[650px] w-full w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${servicebanner})` }}
    >
      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col gap-3 md:gap-5 justify-center lg:justify-end md:items-center md:text-center text-white px-6 pt-20 lg:py-[100px] lg:pb-[100px]">
        {/* Subtitle */}
        <p className="text-sm min-[360px]:text-base md:text-[22px] font-bold leading-tight tracking-wide uppercase md:text-center">
          our services
        </p>

        {/* Title */}
        <h1 className="text-xl min-[360px]:text-2xl  min-[425px]:text-3xl md:text-4xl lg:text-[45px] leading-normal md:text-center font-designer">
          Flexible Funding Solutions <br className="hidden md:flex" />
          for Property Investors
        </h1>

        {/* Buttons */}
        <p className="text-sm min-[360px]:text-base md:text-[22px] font-bold leading-tight tracking-wide  md:text-center">
          Get fast, reliable financing tailored to your real estate goals — from
          acquisition to expansion.
        </p>
      </div>
    </section>
  );
};

export default ServiceBanner;
