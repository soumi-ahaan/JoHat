import React from "react";
import profileImg from "../../assets/james.png"; // replace later

const AboutJames = () => {
    return (
        <div className="bg-[#ffffff]">
            <div className="max-w-[1440px] mx-auto ">

                {/* MAIN BOX */}
                <div className="relative bg-[#1C1C1C] max-w-[1440px] px-4 md:px-8 lg:px-12 xl:px-[60px] w-full lg:w-[980px] lg:h-[605px] xl:w-[1200px] py-30 flex flex-col lg:flex-row items-start">

                    {/* LEFT CONTENT */}
                    <div className="text-white max-w-[700px] pt-6 lg:pt-0">

                        {/* HEADING */}
                        <h2 className="font-designer font-normal text-[22px] md:text-[28px] lg:text-[35px] leading-snug">
                            ABOUT JAMES TAYLOR
                        </h2>

                        {/* SUBTEXT */}
                        <p className="font-bold text-[16px] md:text-[18px] lg:text-[20px] mt-3">
                            Committed To Helping Property Investors Succeed
                        </p>

                        {/* DESCRIPTION */}
                        <p className="font-normal text-[14px] md:text-[16px] lg:text-[18px] text-[#FFFFFFCC] mt-4 leading-relaxed">
                            James Taylor is the driving force behind{" "}
                            <span className="font-medium text-white">Johat Enterprises</span>, bringing years of experience in real estate investment and private lending consultation. His mission is to help property investors access the right funding solutions quickly, securely, and strategically.
                            <br /><br />
                            With a deep understanding of the real estate market and strong relationships with trusted private lenders, James ensures every client receives personalized guidance and reliable financial support.
                            <br /><br />
                            At <span className="font-medium text-white">Johat Enterprises</span>, James leads with integrity and results — making sure every project runs smoothly from application to approval.
                        </p>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative mt-10 lg:mt-0 lg:absolute lg:right-[-80px] xl:right-[-170px] top-[50px]">

                        {/* BORDER BOX */}
                        <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[380px] md:w-[380px] md:h-[450px] lg:w-[458px] lg:h-[513px]
    border-[4px] border-[#FACA51] box-border">

                            {/* IMAGE WITH INNER SPACING */}
                            <div className="w-full h-full p-[11px_18px] box-border">
                                <img
                                    src={profileImg}
                                    alt="James Taylor"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutJames;