import { useEffect, useRef } from "react";
import gsap from "gsap";
import homebanner from "../../assets/homebanner.webp";

export default function Hero() {
  const heroTextRef = useRef(null); // h1
  const subtitleRef = useRef(null); // subtitle
  const buttonsRef = useRef(null); // buttons container

  useEffect(() => {
    const tl = gsap.timeline();

    // Slide up subtitle
    tl.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    

    // Text gradient reveal after slide
    tl.to(heroTextRef.current, {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.2,
      ease: "power2.out"
    }, "+=0.2");

    // Slide up buttons container after h1 reveal
    tl.from(buttonsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "+=0.2");
  }, []);

  return (
    <section
      className="relative h-[440px] min-[360px]:h-[540px] md:h-[650px] lg:h-[850px] w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${homebanner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

      <div className="absolute inset-0 flex flex-col gap-3 md:gap-5 justify-center lg:justify-end md:items-center md:text-center text-white px-6 pt-20 lg:py-[100px] lg:pb-[120px]">

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm min-[360px]:text-base md:text-[22px] font-bold leading-tight tracking-wide uppercase md:text-center"
        >
          Finance Your Next Property Move
        </p>

        {/* Title */}
        <h1
          ref={heroTextRef}
          className="text-xl min-[360px]:text-2xl min-[425px]:text-3xl md:text-4xl lg:text-[45px] leading-normal md:text-center font-designer text-white"
          style={{ clipPath: "inset(0 100% 0 0)" }} // initial hidden
        >
          FUNDING SOLUTIONS FOR <br className="hidden md:flex" />
          PROPERTY INVESTORS
        </h1>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex md:items-center md:justify-center gap-2.5 flex-wrap mt-3"
        >
          <a className="border-flow relative overflow-hidden border border-white py-2.5 px-4 lg:px-[30px] lg:py-[20px] rounded-full text-center text-xs min-[375px]:text-base z-1">
            Contact Us
          </a>

          <a className="animate-btn text-white py-2.5 px-4 lg:px-[30px] lg:py-[20px] rounded-full text-center text-xs min-[375px]:text-base">
            Browse Properties
          </a>
        </div>

      </div>
    </section>
  );
}