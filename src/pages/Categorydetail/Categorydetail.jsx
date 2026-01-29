import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as images from "../../assets";

// Your complete category data structure
const categoryData = {
  sarees: {
    title: "Sarees Collection",
    description: "Premium silk sarees for all occasions.",
    subCategories: [
      {
        name: "Kanchipuram Sarees",
        children: [
          {
            name: "Kanchipuram Pure Silk Sarees",
            slug: "kanchipuram-pure-silk",
            images: [
              images.KanchipuramBrocket,
              images.kanchipuramsaree1,
              images.kanchipuramsaree2,
            ],
          },
          {
            name: "Kanchipuram Pure Half Fine Jari",
            slug: "kanchipuram-half-fine-jari",
            images: [
              images.KanchipuramPureHalfFineJari,
              images.kanchipuram_half_fine2,
            ],
          },
        ],
      },
      {
        name: "Banarasi Sarees",
        children: [
          {
            name: "Banarasi Silk Sarees",
            slug: "banarasi-silk",
            images: [images.banarasi1, images.banarasi2],
          },
          {
            name: "Banarasi Kadhwa Sarees",
            slug: "banarasi-kadhwa",
            images: [images.BanarasiKadhwa],
          },
          {
            name: "Banarasi Tussar Weaving",
            slug: "banarasi-tussar",
            images: [images.PureTussarEmbroidery],
          },
          {
            name: "Banarasi Organza",
            slug: "banarasi-organza",
            images: [images.BanarasiOrganza],
          },
          {
            name: "Banarasi Georgette Saree",
            slug: "banarasi-georgette",
            images: [images.BanarasiGeorgette],
          },
          {
            name: "Banarasi Tissue Saree",
            slug: "banarasi-tissue",
            images: [images.BanarasiTissue],
          },
        ],
      },
      {
        name: "Designer Sarees",
        children: [
          {
            name: "Pure Designer Embroidery Saree",
            slug: "pure-designer-embroidery",
            images: [
              images.desginerSaree1,
              images.desginerSaree2,
              images.PureDesignerEmbroidery,
            ],
          },
          {
            name: "Fancy Sarees",
            slug: "fancy-sarees",
            images: [images.FancySaree],
          },
          {
            name: "Organza Sarees",
            slug: "organza-sarees",
            images: [images.OrganzaSaree],
          },
          {
            name: "Bandhani Sarees",
            slug: "bandhani-sarees",
            images: [images.BandhaniSaree],
          },
          {
            name: "Fancy Weaving Saree",
            slug: "fancy-weaving",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Ready Blouse Sarees",
            slug: "ready-blouse",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Pure Tussar Embroidery Sarees",
            slug: "pure-tussar-embroidery",
            images: [images.PureTussarEmbroidery],
          },
          {
            name: "Ready To Wear Saree",
            slug: "ready-to-wear",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Handloom Silk Embroidery Sarees",
            slug: "handloom-silk-embroidery",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
        ],
      },
      {
        name: "Pure Handloom Silk Saree",
        children: [
          {
            name: "Handloom Sarees",
            slug: "handloom-sarees",
            images: [
              images.pureHandloomSilk,
              images.pureHandloomSilk1,
              images.banarasisilk3,
            ],
          },
          {
            name: "Gadwal Silk",
            slug: "gadwal-silk",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Paithani Sarees",
            slug: "paithani-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Chanderi Saree",
            slug: "chanderi-saree",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Ikkat & Patola Saree",
            slug: "ikkat-patola",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Keta Silk Saree",
            slug: "keta-silk",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Patan Patola",
            slug: "patan-patola",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Pashmina Sarees",
            slug: "pashmina-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
        ],
      },
      {
        name: "Printed Saree",
        children: [
          {
            name: "Designer Printed Saree",
            slug: "designer-printed",
            images: [
              images.banarasisilk,
              images.banarasisilk1,
              images.banarasisilk3,
            ],
          },
          {
            name: "Tussar Printed Saree",
            slug: "tussar-printed",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Kalamkari Silk Saree",
            slug: "kalamkari-silk",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Silk Printed Saree",
            slug: "silk-printed",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
        ],
      },
      {
        name: "Occasion",
        children: [
          {
            name: "Wedding Saree",
            slug: "wedding-saree",
            images: [
              images.banarasisilk,
              images.banarasisilk1,
              images.banarasisilk3,
            ],
          },
          {
            name: "Festive Wear Saree",
            slug: "festive-wear",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Party Wear Saree",
            slug: "party-wear-saree",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Mehendi Sarees",
            slug: "mehendi-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Reception sarees",
            slug: "reception-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
          {
            name: "Haldi Sarees",
            slug: "haldi-sarees",
            images: [images.banarasikadhwa, images.banarasikadhwa1],
          },
        ],
      },
    ],
  },
  lehengas: {
    title: "Lehenga Collection",
    description: "Premium lehengas for weddings & celebrations.",
    subCategories: [
      {
        name: "Style",
        children: [
          {
            name: "Ready To Ship",
            slug: "ready-to-ship-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Bridal Lehenga",
            slug: "bridal-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Designer Lehenga",
            slug: "designer-lehenga",
            images: [images.designerlehenga, images.designerlehenga1],
          },
          {
            name: "Jacket Lehenga",
            slug: "jacket-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Bridesmaids Lehenga",
            slug: "bridesmaids-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Crop Top Lehenga",
            slug: "crop-top-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Bandhani Lehenga",
            slug: "bandhani-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Fishcut Lehenga",
            slug: "fishcut-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
        ],
      },
      {
        name: "Occasions",
        children: [
          {
            name: "Wedding Lehenga",
            slug: "wedding-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Reception Lehenga",
            slug: "reception-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Party Wear Lehenga",
            slug: "party-wear-lehenga",
            images: [images.designerlehenga, images.designerlehenga1],
          },
          {
            name: "Mehendi Lehenga",
            slug: "mehendi-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Sangeet Lehenga",
            slug: "sangeet-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Engagement Lehenga",
            slug: "engagement-lehenga",
            images: [images.bridallehenga, images.bridallehenga1],
          },
        ],
      },
    ],
  },
  salwarsuite: {
    title: "Salwar Suits",
    description: "Traditional and designer Salwar Suits for every occasion.",
    subCategories: [
      {
        name: "Style",
        children: [
          {
            name: "Readymade Suites",
            slug: "readymade-suites",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Anarkali",
            slug: "anarkali",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Straight Cut Suit",
            slug: "straight-cut",
            images: [images.designerlehenga, images.designerlehenga1],
          },
          {
            name: "Sharara Suit",
            slug: "sharara-suit",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Palazzo Suit",
            slug: "palazzo-suit",
            images: [images.bridallehenga, images.bridallehenga1],
          },
        ],
      },
      {
        name: "Plus Size & Special",
        children: [
          {
            name: "Plus Size Salwar Kameez",
            slug: "plus-size",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Indowestern",
            slug: "indowestern",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Evening Look",
            slug: "evening-look",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Bridal Gowns",
            slug: "bridal-gowns",
            images: [images.bridallehenga, images.bridallehenga1],
          },
        ],
      },
      {
        name: "Unstitched Salwars",
        children: [
          {
            name: "Embroidery Unstitched Salwars",
            slug: "embroidery-unstitched",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Cotton Unstitched Salwars",
            slug: "cotton-unstitched",
            images: [images.bridallehenga, images.bridallehenga1],
          },
          {
            name: "Banarasi Unstitched Salwars",
            slug: "banarasi-unstitched",
            images: [images.designerlehenga, images.designerlehenga1],
          },
          {
            name: "Paithani Unstitched Salwars",
            slug: "paithani-unstitched",
            images: [images.bridallehenga, images.bridallehenga1],
          },
        ],
      },
    ],
  },
};

export default function Categorydetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = categoryData[slug];

  const [selectedCategory, setSelectedCategory] = useState(
    data?.subCategories?.[0] || null,
  );
  const [selectedSub, setSelectedSub] = useState(
    data?.subCategories?.[0]?.children?.[0] || null,
  );

  // Reset selection when main category changes
  useEffect(() => {
    if (data?.subCategories?.[0]) {
      setSelectedCategory(data.subCategories[0]);
      setSelectedSub(data.subCategories[0].children[0]);
    }
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-gray-600 text-xl">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
            <button
              onClick={() => navigate("/")}
              className="hover:text-amber-600 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-gray-900 font-medium">{data.title}</span>
          </nav>

          {/* Title */}
          <div className="mb-2">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              {data.title}
            </h1>
            <div className="w-20 h-1 bg-amber-500 my-2"></div>
            {/* <p className="text-gray-600 max-w-3xl">{data.description}</p> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Category Navigation - Now scrollable on mobile */}
        <div className="mb-2 md:mb-4">
          <h3 className="md:text-lg text-sm font-semibold text-gray-900 mb-2">
            Browse by Type
          </h3>
          <div className="flex overflow-x-auto mb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-2 sm:overflow-visible">
            {data.subCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSub(cat.children[0]);
                }}
                className={`
                  flex-shrink-0 px-2 py-1 md:px-3 md:py-2 rounded-full font-medium text-sm transition-all
                  whitespace-nowrap mr-3 sm:mr-0
                  ${
                    selectedCategory?.name === cat.name
                      ? "bg-amber-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-category Navigation - Also scrollable on mobile */}
        {selectedCategory && (
          <div className="md:mb-5">
            <h3 className="md:text-lg text-sm font-semibold text-gray-900 mb-2">
              Select from {selectedCategory.name}
            </h3>
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-3 sm:overflow-visible">
              {selectedCategory.children.map((sub, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSub(sub)}
                  className={`
                    flex-shrink-0 px-2 py-1 md:px-3 md:py-2 rounded-full font-medium text-sm transition-all
                    whitespace-nowrap mr-3 sm:mr-0
                    ${
                      selectedSub?.slug === sub.slug
                        ? "bg-amber-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }
                  `}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {selectedSub && (
          <div>
            <div className="mb-6">
              <h3 className="md:text-2xl font-bold text-gray-900">
                {selectedSub.name}
              </h3>
              <p className="text-gray-600 mt-2">
                Explore our exclusive collection of{" "}
                {selectedSub.name.toLowerCase()}
              </p>
            </div>

            {selectedSub.images && selectedSub.images.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {selectedSub.images.map((img, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={img}
                        alt={`${selectedSub.name} - ${index + 1}`}
                        className="w-full h-50 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>
                    <div className="p-2 md:p-4">
                      <h4 className="md:font-semibold text-sm text-gray-900">
                        {selectedSub.name}
                      </h4>
                      <button className="md:mt-3 mt-1 w-full bg-amber-600 text-white md:py-2 py-1 rounded-lg hover:bg-amber-700 transition-colors md:font-medium text-sm">
                        Enquiry Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow">
                <p className="text-gray-500">
                  Images coming soon for this category
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Empty State */}
      {!selectedSub && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            Select a category to view products
          </p>
        </div>
      )}
    </div>
  );
}
