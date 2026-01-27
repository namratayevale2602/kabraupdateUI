import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  banarasigeorgette1,
  fishcutlehenga,
  straightcut,
  bg2,
  mobilebg,
} from "../../assets/index";

const TopCategories = () => {
  // Static categories data
  const topCategories = [
    {
      id: 1,
      slug: "sarees",
      name: "Sarees",
      description:
        "Exquisite handwoven silk sarees with intricate zari work, perfect for weddings and special occasions.",
      image: banarasigeorgette1,
      link: "Categorydetail/sarees",
    },
    {
      id: 2,
      slug: "lehenga",
      name: "Lehenga",
      description:
        "Traditional South Indian silk sarees known for their vibrant colors and rich borders.",
      image: fishcutlehenga,
      link: "Categorydetail/lehengas",
    },
    {
      id: 3,
      slug: "salwar-suits",
      name: "Salwar Suits",
      description:
        "Lightweight and elegant sarees perfect for parties and formal events.",
      image: straightcut,
      link: "Categorydetail/salwarsuite",
    },
  ];

  return (
    <section className="relative py-12 px-4 overflow-hidden">
      {/* Background Image with lower opacity */}
      {/* <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      /> */}

      {/* Mobile-specific background overlay */}
      {/* <div
        className="absolute inset-0 z-0 opacity-20 lg:hidden"
        style={{
          backgroundImage: `url(${mobilebg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      /> */}

      <div className="relative z-10">
        <motion.div
          className="text-center mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
            Top Categories
          </h1>
          <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our most popular collections
          </p>
        </motion.div>

        {/* Desktop Layout - 3 equal columns */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-6 px-4">
            {topCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`${category.link}`}
                  className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-[360px]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <h4 className="font-bold text-white text-2xl lg:text-3xl drop-shadow-lg">
                        {category.name}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - 2 columns with special arrangement */}
        <div className="lg:hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4 px-4">
            {/* First card - takes full left column */}
            <motion.div
              key={topCategories[0].id}
              className="relative row-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/Categorydetail/${topCategories[0].slug}`}
                className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-[300px]">
                  <img
                    src={topCategories[0].image}
                    alt={topCategories[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <h4 className="font-bold text-white text-xl drop-shadow-lg">
                      {topCategories[0].name}
                    </h4>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Second and third cards - stacked in right column */}
            <div className="flex flex-col gap-4">
              {topCategories.slice(1).map((category, index) => (
                <motion.div
                  key={category.id}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/Categorydetail/${category.slug}`}
                    className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="relative h-[140px]">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                        <h4 className="font-bold text-white text-lg drop-shadow-lg">
                          {category.name}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
