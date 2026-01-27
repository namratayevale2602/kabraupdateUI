import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  kabra2,
  kabra7,
  kabra11,
  kabra17,
  kabra15,
  kabra16,
  kabra13,
  occasionbg,
  kabra21,
  kabra14,
  kabra29,
  kabra12,
  kabra1,
} from "../../assets";

const occasionData = [
  {
    slug: "wedding",
    title: "Wedding Collection",
    description:
      "Explore luxurious sarees specially curated for weddings and grand celebrations.",
    subCategories: [
      {
        name: "Banarasi Sarees",
        children: [
          {
            name: "Banarasi Silk",
            products: [
              { id: 1, img: kabra2 },
              { id: 2, img: kabra7 },
              { id: 3, img: kabra11 },
              { id: 4, img: kabra16 },
            ],
          },
          {
            name: "Banarasi Kadhwa",
            products: [
              { id: 5, img: kabra21 },
              { id: 6, img: kabra11 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "festival",
    title: "Festival Collection",
    description:
      "Celebrate every festival with vibrant colors and elegant traditional sarees.",
    subCategories: [
      {
        name: "Festival Wear",
        children: [
          {
            name: "Organza Sarees",
            products: [
              { id: 7, img: kabra11 },
              { id: 8, img: kabra17 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "babyshower",
    title: "Baby Shower",
    description:
      "Celebrate every festival with vibrant colors and elegant traditional sarees.",
    subCategories: [
      {
        name: "Festival Wear",
        children: [
          {
            name: "Organza Sarees",
            products: [
              { id: 9, img: kabra11 },
              { id: 10, img: kabra21 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "engagement",
    title: "Engagement Collection",
    description:
      "Explore luxurious sarees specially curated for weddings and grand celebrations.",
    subCategories: [
      {
        name: "Festival Wear",
        children: [
          {
            name: "Organza Sarees",
            products: [
              { id: 11, img: kabra21 },
              { id: 12, img: kabra14 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "haldi",
    title: "Haldi Collection",
    description:
      "Celebrate every festival with vibrant colors and elegant traditional sarees.",
    subCategories: [
      {
        name: "Festival Wear",
        children: [
          {
            name: "Organza Sarees",
            products: [
              { id: 13, img: kabra11 },
              { id: 14, img: kabra1 },
              { id: 15, img: kabra13 },
              { id: 16, img: kabra15 },
              { id: 17, img: kabra29 },
            ],
          },
          {
            name: "Printed Sarees",
            products: [
              { id: 16, img: kabra15 },
              { id: 17, img: kabra29 },
            ],
          }
        ],
      },
    ],
  },
  {
    slug: "mehendi",
    title: "Mehendi Collection",
    description:
      "Celebrate every festival with vibrant colors and elegant traditional sarees.",
    subCategories: [
      {
        name: "Festival Wear",
        children: [
          {
            name: "Organza Sarees",
            products: [
              { id: 18, img: kabra11 },
              { id: 19, img: kabra29 },
              { id: 20, img: kabra21 },
              { id: 21, img: kabra12 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "pooja",
    title: "Pooja & Rituals",
    description:
      "Celebrate every festival with vibrant colors and elegant traditional sarees.",
    subCategories: [
      {
        name: "Festival Wear",
        children: [
          {
            name: "Organza Sarees",
            products: [
              { id: 22, img: kabra11 },
              { id: 23, img: kabra29 },
            ],
          },
        ],
      },
    ],
  },
];

export default function OccasionCategoryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const data = occasionData.find((item) => item.slug === slug);

  const [selectedCategory, setSelectedCategory] = useState(
    data?.subCategories?.[0] || null
  );
  const [selectedSub, setSelectedSub] = useState(
    data?.subCategories?.[0]?.children?.[0] || null
  );

  if (!data) {
    return (
      <p className="text-center py-20 text-gray-600">
        Occasion not found
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-sm text-red-700 mb-4">
        <button
          onClick={() => navigate("/")}
          className="hover:underline font-medium"
        >
          ← Home
        </button>
        <span>/</span>
        <span className="text-gray-800 font-medium">
          {data.title}
        </span>
      </div>

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        {data.title}
      </h1>
      <div className="w-20 h-1 bg-amber-500 mt-3 mb-4"></div>

      <p className="max-w-2xl text-gray-600 mb-8">
        {data.description}
      </p>

      {/* MAIN CATEGORIES */}
      <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
        {data.subCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSub(cat.children[0]);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
              selectedCategory?.name === cat.name
                ? "bg-amber-900 text-white shadow"
                : "bg-white text-black shadow hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* SUB CATEGORIES */}
      {selectedCategory && (
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide">
          {selectedCategory.children.map((sub) => (
            <button
              key={sub.name}
              onClick={() => setSelectedSub(sub)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition whitespace-nowrap ${
                selectedSub?.name === sub.name
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}

      {/* PRODUCT GRID */}
      {selectedSub && (
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-4 sm:gap-6
          "
        >
          {selectedSub.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden group"
            >
              <img
                src={product.img}
                alt="product"
                className="w-full h-[240px] sm:h-[280px] lg:h-[320px] object-cover group-hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
