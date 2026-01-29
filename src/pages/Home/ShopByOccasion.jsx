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

      {/* Mobile: All items in 2 columns */}
      <div className="md:hidden max-w-7xl mx-auto grid grid-cols-2 gap-3 px-4 ">
        {occasions.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group cursor-pointer justify-center"
          >
            <img
              src={item.img}
              alt={item.title}
              onClick={() => navigate(`/occasion/${item.slug}`)}
              className="
                w-full 
                rounded-xl
                h-40
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>

      {/* Desktop: Original layout */}
      <div className="hidden md:block">
        {/* FIRST ROW */}
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3">
          {occasions.slice(0, 3).map((item) => (
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
                  h-56
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-3 pt-5">
          {occasions.slice(3, 7).map((item) => (
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
                  h-56
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-105
                  rounded-xl
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
