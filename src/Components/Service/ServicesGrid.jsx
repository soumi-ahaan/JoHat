import React, { useEffect, useState } from "react";
import { getServices, getMediaById } from "../../Api/Api";

const ServicesGrid = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServices();

        const formatted = await Promise.all(
          data.map(async (item) => {
            let imageUrl = "https://via.placeholder.com/400x250";

            // 🔥 ACF image ID → fetch real URL
            if (item.acf?.image) {
              const media = await getMediaById(item.acf.image);
              imageUrl = media.source_url;
            }

            return {
              id: item.id,
              title: item.title.rendered,
              description: item.acf?.description || "",
              button: item.acf?.button_text || "Learn More",
              image: imageUrl,
            };
          })
        );

        setServices(formatted);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto">

        <h2 className="text-center text-xl md:text-[32px] lg:text-[35px] mb-12 font-designer">
          SMART FINANCING SOLUTIONS <br /> FOR EVERY INVESTOR
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={item.id}>

              <div className="border-2 border-yellow-400 p-2 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />
              </div>

              <h3 className="mt-4 text-[25px] font-bold uppercase font-designer">
                {item.title}
              </h3>

              <p className="text-gray-600 text-[16px] mt-2">
                {item.description}
              </p>

              <button className="mt-4 border border-teal-600 text-teal-600 px-5 py-2 rounded-full hover:bg-teal-600 hover:text-white transition">
                {item.button}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;