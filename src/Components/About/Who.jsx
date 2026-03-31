import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import mainImg from "../../assets/house.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import gsap from "gsap";
import { useEffect } from "react";
const Who = () => {
  useEffect(() => {
    gsap.from(".left-image-box", {
      scrollTrigger: {
        trigger: ".left-image-box",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    });

    gsap.utils.toArray(".vision-mission-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
    });
    gsap.from(".who-heading", {
      scrollTrigger: {
        trigger: ".who-heading",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

  }, []);
  return (
    <div className="bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px] overflow-hidden">

        {/* MAIN FLEX: Stacked on mobile, side-by-side from lg (1024px) */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-8 xl:gap-18 items-center">

          {/* LEFT IMAGE BOX */}
          <div className="relative w-full md:max-w-[300px] lg:max-w-[450px] xl:max-w-[509px] h-auto left-image-box">
            <div className="p-[10px] md:p-[14px] lg:p-[19px]">
              <img
                src={mainImg}
                alt="Who We Are"
                className="w-full h-auto object-cover block rounded-sm"
              />
            </div>

            {/* SVG FRAME */}
            <img
              src="/aboutsvg.svg"
              alt=""
              className="absolute inset-0 w-full h-full pointer-events-none z-10 "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 text-left">
            <h2 className="who-heading text-xl md:text-2xl lg:text-[40px] font-normal text-[#333333] font-designer uppercase tracking-tight">
              Who We Are
            </h2>

            <p className="mt-2 lg:mt-6 text-sm lg:text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Johat Enterprises LLC is a trusted name in property investment funding
              solutions. Based in Williamsburg, Michigan, we specialize in connecting
              property investors with private lenders who understand their needs.
            </p>

            {/* CARDS CONTAINER: Stacked -> 2 Columns */}
            <div className="mt-5 lg:mt-8 xl:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* CARD 1 */}
              <div className="bg-[#F4F1ED] rounded-[20px] p-2 md:p-[10px] lg:p-5 xl:p-8 vision-mission-card flex flex-col items-start text-center text-left">
                <div className="w-8 h-8 lg:w-12 lg:h-12 mb-3 xl:mb-6">
                  <img src={icon1} alt="Vision" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg xl:text-xl font-bold text-[#333333] font-designer">OUR VISION</h3>
                <p className="mt-3 text-sm lg:text-base text-[#333333] leading-relaxed">
                  To become the go-to partner for investors seeking tailored financial
                  solutions and professional consultation.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-[#F4F1ED] rounded-[20px] p-2 md:p-[10px] lg:p-5 xl:p-8 vision-mission-card flex flex-col items-start text-center text-left">
                <div className="w-8 h-8 lg:w-12 lg:h-12 mb-3 xl:mb-6">
                  <img src={icon2} alt="Mission" className="w-full h-full object-contain" />
                </div>
                <p className="text-lg xl:text-xl font-bold text-[#333333] font-designer">OUR MISSION</p>
                <p className="mt-3 text-sm lg:text-base text-[#333333] leading-relaxed">
                  To empower property investors with fast, flexible, and reliable
                  private lending options that make every project a success.
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