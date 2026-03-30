import React, { useEffect } from "react";
import profileImg from "../../assets/james.png"; // replace later
import gsap from "gsap";
const AboutJames = () => {
    // Inside AboutJames:
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-container",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        tl.from(".black-bg-box", { scaleX: 0, transformOrigin: "left", duration: 1 })
            .from(".about-text", { opacity: 0, x: -30, duration: 0.6 }, "-=0.4")
            .from(".gold-frame", { opacity: 0, x: 50, duration: 0.8 }, "-=0.6");
    }, []);
    return (
        <div className="bg-[#ffffff] about-container">
            <div className="max-w-[1440px] w-full mx-auto  overflow-hidden ">

                {/* MAIN BOX */}
                <div className="black-bg-box relative flex flex-col lg:flex-row items-start">
                    <div className="bg-[#1C1C1C] w-full md:max-w-[680px] lg:max-w-[880px] xl:max-w-[980px] py-10 lg:py-12 xl:py-29  px-4 md:px-8 lg:px-12 xl:px-[60px]">

                    {/* LEFT CONTENT */}
                    <div className="text-white w-full md:max-w-[430px] lg:max-w-[550px] xl:max-w-[730px] pt-6 lg:pt-0 about-text ">

                        {/* HEADING */}
                        <h2 className="sm:w-full w-[65%] font-designer font-normal md:text-[22px]  lg:text-[35px] leading-snug">
                            ABOUT JAMES TAYLOR
                        </h2>

                        {/* SUBTEXT */}
                        <p className="sm:w-full w-[65%] font-bold text-sm md:text-base lg:text-[20px] mt-6 md:mt-0">
                            Committed To Helping Property Investors Succeed
                        </p>

                        {/* DESCRIPTION */}
                        <p className="font-normal text-sm md:text-base lg:text-lg xl:text-[20px] text-[#FFFFFFCC] leading-relaxed pt-2 sm:pt-0">
                            James Taylor is the driving force behind{" "}
                            <span className="font-medium text-white">Johat Enterprises</span>, bringing years of experience in real estate investment and private lending consultation. His mission is to help property investors access the right funding solutions quickly, securely, and strategically.
                            <br />
                            With a deep understanding of the real estate market and strong relationships with trusted private lenders, James ensures every client receives personalized guidance and reliable financial support.
                            <br />
                            At <span className="font-medium text-white">Johat Enterprises</span>, James leads with integrity and results — making sure every project runs smoothly from application to approval.
                        </p>

                    </div>
</div>
                    {/* RIGHT IMAGE */}
                    <div className="absolute mt-0 lg:mt-0 right-2 top-2  md:-right-[-20px] xl:-right-[-80px] md:-translate-y-1/2 md:top-1/2">

                        {/* BORDER BOX (The Container) */}
                        <div className="relative w-full  box-border gold-frame">

                            {/* 1. MAIN IMAGE WITH INNER SPACING */}
                           <div className="max-w-[120px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[420px] h-auto p-[6px_10px] sm:p-[11px_18px]">
                                <img
                                    src={profileImg}
                                    alt="James Taylor"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* 2. THE SVG FRAME: Overlays the main image */}
                            <img
                                src="/aboutsvg.svg"
                                alt=""
                                className="absolute inset-0 w-full h-full pointer-events-none z-10 scale-[1.02]"
                            />



                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutJames;