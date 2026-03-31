import aboutbanner from "../../assets/aboutbanner.webp";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
     const heroTextRef = useRef(null); // h1
  const subtitleRef = useRef(null); // subtitle


  useEffect(() => {
    const tl = gsap.timeline();

    // Slide up subtitle
    tl.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    // Slide up h1
    tl.from(heroTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "+=0.2");

    // Text gradient reveal after slide
    tl.to(heroTextRef.current, {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.2,
      ease: "power2.out"
    }, "+=0.2");

   
  }, []);


    return (
        <section
            className="relative h-[390px] min-[360px]:h-[390px] md:h-[450px] lg:h-[520px] xl:h-[630px] w-full overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutbanner})` }}
        >
            {/* Overlay (optional for readability) */}
            <div className="hero-content absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col gap-3 md:gap-5 justify-center lg:justify-end md:items-center md:text-center text-white px-6 pt-20 lg:py-[100px] lg:pb-[100px]">

                {/* Subtitle */}
                <p ref={subtitleRef} className="text-sm min-[360px]:text-base md:text-[20px] font-bold leading-tight tracking-wide uppercase md:text-center">
                    ABOUT US
                </p>

                {/* Title */}
                <h1 ref={heroTextRef} 
                className="text-xl min-[360px]:text-2xl min-[425px]:text-3xl md:text-4xl lg:text-[45px] leading-normal md:text-center font-designer bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-[length:200%_100%] bg-clip-text text-transparent"
          style={{ clipPath: "inset(0 100% 0 0)" }}>
                    BUILDING STRONG FOUNDATIONS <br className="hidden md:flex" />
                    FOR PROPERTY INVESTORS
                </h1>

                {/* NEW PARAGRAPH */}
                <p className="font-bold text-[14px] min-[360px]:text-[15px] md:text-[18px] lg:text-[20px] text-white leading-relaxed max-w-[900px]
        ">
                    At Johat Enterprises LLC, we connect investors with the right funding solutions to help them grow, scale, and succeed in real estate.
                </p>



            </div>
        </section>
    );
}