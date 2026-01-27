import React from "react";
import { useNavigate } from "react-router-dom";
import {
  shopbyoccasion1,
  shopbyoccasion2,
  shopbyoccasion3,
  shopbyoccasion4,
  shopbyoccasion5,
  shopbyoccasion6,
  shopbyoccasion7,
} from "../../assets";

export default function ShopByOccasion() {
  const occasions = [
    { id: 1, title: "Baby shower", img: shopbyoccasion1, slug: "babyshower" },
    { id: 2, title: "Wedding", img: shopbyoccasion7, slug: "wedding" },
    { id: 3, title: "Engagement", img: shopbyoccasion2, slug: "engagement" },
    { id: 4, title: "Haldi", img: shopbyoccasion4, slug: "haldi" },
    { id: 5, title: "Pooja & Ritual", img: shopbyoccasion6, slug: "pooja" },
    { id: 6, title: "Mehendi", img: shopbyoccasion5, slug: "mehendi" },
    { id: 7, title: "Festival", img: shopbyoccasion3, slug: "festival" },
  ];

  const navigate = useNavigate();
  const firstRow = occasions.slice(0, 3);
  const secondRow = occasions.slice(3, 7);

  return (
    <div className="w-full py-12 md:py-16">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#5c2c1a] mb-2">
          Shop by Occasion
        </h1>
        <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4" />
        <p className="text-sm md:text-lg mt-2 font-light text-gray-700">
          Styled For Every Moment
        </p>
      </div>

      {/* FIRST ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4 md:px-0">
        {firstRow.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              onClick={() => navigate(`/occasion/${item.slug}`)}
              className="
                w-full 
                rounded-xl
                h-48 sm:h-52 md:h-56
                object-cover
                transition-transform
                duration-300
                group-hover:scale-101
              "
            />
            {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-1.5 md:py-2 rounded-md">
              <p className="font-semibold text-[#5c2c1a] text-sm md:text-lg text-center">
                {item.title}
              </p>
            </div> */}
          </div>
        ))}
      </div>

      {/* SECOND ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 pt-5 px-4 md:px-0">
        {secondRow.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              onClick={() => navigate(`/occasion/${item.slug}`)}
              className="
                w-full
                h-40 sm:h-48 md:h-56
                object-cover
                transition-transform
                duration-300
                group-hover:scale-101
                rounded-xl
              "
            />
            {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-1.5 md:py-2 rounded-md">
              <p className="font-semibold text-[#5c2c1a] text-xs sm:text-sm md:text-lg text-center">
                {item.title}
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
