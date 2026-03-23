import React, { useEffect, useState } from "react";
import { Bed, Bathtub, Ruler } from "phosphor-react";
import { getProperties } from "../../Api/Api";
import { useNavigate } from "react-router-dom";

const RecentSales = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // 🔥 DATE FORMAT FUNCTION
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";

    const str = dateStr.toString();

    const year = str.substring(0, 4);
    const month = str.substring(4, 6);
    const day = str.substring(6, 8);

    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    getProperties().then((res) => {

      // ✅ FILTER SOLD
      let sold = res.filter(
        (item) => item.acf?.status === "Sold"
      );

      // 🔥 SORT LATEST FIRST
      sold.sort((a, b) => {
        return (b.acf?.sold_date || 0) - (a.acf?.sold_date || 0);
      });

      setData(sold);
    });
  }, []);

  return (
    <div className="bg-[#f5f5f5] py-16">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-center text-[35px] font-[#1c1c1c] font-bold tracking-[2px] uppercase font-designer">
          Our Recent Sales
        </h2>

        <p className="text-center text-gray-500 mt-3 font-[#333333] max-w-[700px] mx-auto text-[16px] font-lato">
          We take pride in helping property investors turn great opportunities into profitable ventures.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {data.slice(0, 4).map((item) => {
            const image =
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* SOLD BADGE */}
                <div className="absolute top-4 right-4 backdrop-blur-md font-bold bg-white/20 text-yellow-400 text-xs px-4 py-1 rounded-full">
                  Sold Out
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 w-full p-6 text-white">

                  {/* TOP ROW */}
                  <div className="flex justify-between items-center">

                    {/* TITLE */}
                    <h3 className="text-lg font-medium">
                      {item.title.rendered}
                    </h3>

                    {/* ICONS */}
                    <div className="flex items-center gap-4 text-sm">

                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <Bed size={14} weight="fill" />
                        </span>
                        {item.acf?.bedrooms}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <Bathtub size={14} weight="fill" />
                        </span>
                        {item.acf?.bathrooms}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-full text-black">
                          <Ruler size={14} weight="fill" />
                        </span>
                        {item.acf?.sqft} Sqft
                      </div>

                    </div>
                  </div>

                  {/* SOLD DATE */}
                  <p className="text-sm mt-2 text-gray-300">
                    Sold on:{" "}
                    <span className="font-bold italic text-white text-[18px] font-designer">
                      {formatDate(item.acf?.sold_date)}
                    </span>
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
            View All Sold Properties
          </button>
        </div>

      </div>
    </div>
  );
};

export default RecentSales;