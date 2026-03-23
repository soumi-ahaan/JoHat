import React, { useEffect, useState } from "react";
import { Bed, Bathtub, Ruler } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { getProperties } from "../../Api/Api";

const FeatureProperties = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProperties().then((res) => setData(res));
  }, []);

  return (
    <div className="bg-[#f5f5f5] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* HEADING */}
        <h2 className="text-center text-[35px] font-[#1c1c1c] font-bold tracking-[2px] uppercase font-designer">
          Feature Properties
        </h2>

        <p className="text-center text-gray-500 mt-3 font-[#333333] max-w-[700px] mx-auto text-[16px] font-lato">
          To empower property investors with fast, flexible, and reliable
          private lending options that make every real estate project a success.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {data.slice(0, 4).map((item) => {
            const image = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <div
                key={item.id}
                onClick={() => navigate(`/property/${item.id}`)}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
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
                <div className="absolute bottom-0 w-full p-6 text-white">
                  {/* TOP ROW */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                      {item.title.rendered}
                    </h3>

                    {/* ICONS INLINE */}
                    <div className="flex items-center gap-3 text-white text-sm mt-3">
                      {/* BED */}
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <Bed size={16} weight="fill" />
                        </span>
                        <span>{item.acf?.bedrooms}</span>
                      </div>

                      {/* BATH */}
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <Bathtub size={16} weight="fill" />
                        </span>
                        <span>{item.acf?.bathrooms}</span>
                      </div>

                      {/* AREA */}
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <Ruler size={16} weight="fill" />
                        </span>
                        <span>{item.acf?.sqft} Sqft</span>
                      </div>
                    </div>
                  </div>

                  {/* PRICE */}
                  <p className="text-[25px] font-bold italic mt-3 font-designer">
                    ${Number(item.acf?.price || 0).toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperties;
