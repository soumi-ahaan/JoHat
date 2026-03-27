import React, { useEffect, useState, useRef } from "react";
import { BedIcon, BathtubIcon, RulerIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { getProperties } from "../../Api/Api";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeatureProperties = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    getProperties().then((res) => setData(res));
  }, []);

  useEffect(() => {
    if (!data.length) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // 🔥 HEADING TEXT REVEAL (gradient wipe)
    tl.fromTo(
      headingRef.current,
      {
        y: 80,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        duration: 1.4,
        ease: "power4.out",
      }
    );

    // 🔥 CARDS SLOW STAGGER (one by one)
    tl.from(
      cardsRef.current,
      {
        y: 120,
        opacity: 0,
        duration: 1.6,
        ease: "power4.out",
        stagger: 0.5, // 🐢 slow motion
      },
      "-=0.6"
    );

  }, [data]);

  // reset refs every render
  cardsRef.current = [];

  return (
    <div ref={sectionRef} className="bg-[#f5f5f5] py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px]">

        {/* HEADING */}
        <h2
          ref={headingRef}
          className="text-center text-xl md:text-[35px] font-bold tracking-[2px] uppercase font-designer overflow-hidden"
        >
          <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-[length:200%_100%] bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
            Feature Properties
          </span>
        </h2>

        <p className="text-center text-gray-500 mt-3 max-w-[700px] mx-auto text-[16px]">
          To empower property investors with fast, flexible, and reliable
          private lending options that make every real estate project a success.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mt-[30px]">
          {data.slice(0, 4).map((item, index) => {
            const image =
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() => navigate(`/property/${item.id}`)}
                className="relative overflow-hidden cursor-pointer group"
              >
                {/* IMAGE */}
                <img
                  src={image}
                  alt=""
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* STATUS */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/20 text-yellow-400 text-xs px-4 py-1 rounded-full font-semibold">
                  {item.acf?.status}
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 w-full px-4 py-5 text-white">
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <h3 className="text-base lg:text-[22px] font-medium">
                      {item.title.rendered}
                    </h3>

                    <div className="flex items-center gap-3 text-sm mt-3">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <BedIcon size={14} />
                        </span>
                        <span>{item.acf?.bedrooms}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <BathtubIcon size={14} />
                        </span>
                        <span>{item.acf?.bathrooms}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <RulerIcon size={14} />
                        </span>
                        <span>{item.acf?.sqft} Sqft</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xl lg:text-[25px] font-bold italic mt-3 font-designer">
                    ${Number(item.acf?.price || 0).toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔥 TEXT SHINE ANIMATION */}
      <style>
        {`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        `}
      </style>
    </div>
  );
};

export default FeatureProperties;