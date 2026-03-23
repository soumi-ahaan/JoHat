import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bed, Bathtub, Ruler } from "phosphor-react";
import { getPropertyById } from "../../Api/Api";

const PropertyDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getPropertyById(id).then((res) => setData(res));
  }, [id]);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  const image =
    data._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-10">

      {/* IMAGE */}
      <img
        src={image}
        alt=""
        className="w-full h-[400px] md:h-[450px] object-cover rounded-xl"
      />

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mt-6">
        {data.title.rendered}
      </h1>

      {/* INFO BOX */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">

        <span className="flex items-center gap-1 bg-yellow-400 px-3 py-1 rounded-full">
          <Bed size={16} weight="fill" />
          {data.acf?.bedrooms}
        </span>

        <span className="flex items-center gap-1 bg-yellow-400 px-3 py-1 rounded-full">
          <Bathtub size={16} weight="fill" />
          {data.acf?.bathrooms}
        </span>

        <span className="flex items-center gap-1 bg-yellow-400 px-3 py-1 rounded-full">
          <Ruler size={16} weight="fill" />
          {data.acf?.sqft}
        </span>

      </div>

      {/* PRICE */}
      <p className="text-2xl md:text-3xl font-bold mt-6">
        ${Number(data.acf?.price || 0).toLocaleString()}
      </p>

      {/* STATUS */}
      <p className="mt-2 text-gray-600 text-lg">
        Status: {data.acf?.status}
      </p>

      {/* 🔥 DESCRIPTION (MAIN UPDATE) */}
      <div
        className="mt-8 text-gray-600 text-[17px] md:text-[18px] leading-[1.9] font-light max-w-[900px]"
        dangerouslySetInnerHTML={{
          __html: data.content?.rendered || "",
        }}
      />

    </div>
  );
};

export default PropertyDetails;