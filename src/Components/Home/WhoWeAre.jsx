
import img1 from "../../assets/who-we-are-1.jpg";
import img2 from "../../assets/who-we-are-2.jpg";
import img3 from "../../assets/who-we-are-3.jpg";

const WhoWeAre = () => {
  return (
    <section className="bg-[#f4f1ee] py-20 lg:py-40 px-4">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-15 relative">

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center md:items-start">

          {/* LEFT IMAGE */}
          {/* 1. Main Container: Fixed to your SVG's 453:539 aspect ratio */}
          <div className="relative  w-full max-w-[200px] lg:max-w-[450px] aspect-[453/539] overflow-visible">

            {/* 2. The Kitchen Image: We use padding (p-4) to create that white border look */}
            <div className="absolute inset-0 p-[5%] lg:p-8">
              <img
                src={img1}
                alt="Modern Kitchen"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 3. The SVG Frame: Overlaying everything */}
            <img
              src="/svg.svg"
              alt=""
              className="absolute inset-0 w-full h-full pointer-events-none z-10 scale-[1.02]"
            />

            {/* 4. Small Headshot: Absolute positioned at the bottom right */}
            <div className="absolute -bottom-6 right-6 lg:-bottom-10 lg:right-10 z-20">
              <img
                src={img3}
                alt="Profile"
                className="w-24 h-24 lg:w-36 lg:h-36 object-cover border-[6px] border-white shadow-xl"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="md:max-w-[300px] lg:max-w-[550px] text-center md:text-left mt-0 lg:mt-4">
            <h5 className="uppercase tracking-widest text-[#1c1c1c] font-bold font-designer text-xl md:text:2xl lg:text-[35px] mb-4">
              Who We Are
            </h5>

            <p className="mb-6 text-[#333333] font-semibold italic text-[18px] lg:text-[35px] leading-[28px] lg:leading-[45px] font-lato">
              Johat Enterprises is a trusted name in property investment funding
              solutions. Based in Williamsburg, Michigan, we specialize in
              connecting property investors with private lenders who understand
              their needs. Our expertise lies in identifying the right funding
              partners who can help our clients acquire, renovate, and sell
              properties for maximum profit.
            </p>

            <button className="px-6 py-2 border border-green-800 text-green-800 rounded-full hover:bg-black hover:text-white transition">
              Learn More About Us
            </button>
          </div>

        </div>
        <div className="flex justify-center mt-10 absolute right-[10px] lg:right-[60px]  md:-bottom-0 lg:-bottom-[150px] xl:-bottom-[220px] md:mt-0 w-0 h-0 xl:w-[280px] xl:h-[287px] lg:w-[209px] lg:h-[209px] md:w-[175px] md:h-[175px]">

          {/* 3. THE IMAGE: Inside a wrapper with padding to create the white 'matte' look */}
          <div className="absolute inset-0 p-4">
            <img
              src={img2}
              alt="Modern House"

              className="w-full h-full object-cover"
            />
          </div>

          {/* 4. THE SVG FRAME: Matches the 309x316 container exactly */}
          <img
            src="/svg2.svg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none z-10 scale-[1.01]"
          />
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;