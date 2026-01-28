import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { kabra5, kabra17, kabra12, kabra14 } from "../../assets/index";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Static hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Elegance Redefined: Premium Saree Collection",
      mobileTitle: "Premium Saree Collection",
      description:
        "Discover our exclusive range of handpicked sarees, crafted with precision and traditional artistry. Experience luxury in every weave.",
      mobileDescription:
        "Discover exclusive sarees crafted with traditional artistry.",
      image: kabra17,
      link: "/Categorydetail/sarees",
      category: "Saree's",
      gradient: "bg-gradient-to-r from-amber-800/80 to-amber-600/60",
    },
    {
      id: 2,
      title: "Bridal Collection: Timeless Wedding Elegance",
      mobileTitle: "Wedding Elegance",
      description:
        "Make your special day unforgettable with our exquisite bridal saree collection. Handcrafted perfection for the modern bride.",
      mobileDescription: "Exquisite bridal sarees for your special day.",
      image: kabra5,
      link: "/Categorydetail/lehengas",
      category: "Lehenga's",
      gradient: "bg-gradient-to-r from-amber-800/80 to-amber-600/60",
    },
    {
      id: 3,
      title: "Summer Collection: Light & Breezy Fabrics",
      mobileTitle: "Summer Fabrics",
      description:
        "Stay comfortable and stylish with our summer collection featuring lightweight fabrics, vibrant prints, and modern designs.",
      mobileDescription: "Lightweight fabrics for summer comfort.",
      image: kabra12,
      link: "/Categorydetail/salwarsuite",
      category: "Salwar Suit's",
      gradient: "bg-gradient-to-r from-amber-800/80 to-amber-600/60",
    },
  ];

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  }, [heroSlides.length]);

  // Auto slide hero carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Images with transition */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.05,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </div>

      {/* Content Container with Gradient Overlay */}
      <div className="relative mt-20 ml-10 md:mt-30 h-full max-w-10xl mx-auto px-3 sm:px-4 md:px-8 flex items-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={` bg-black/30 rounded-2xl p-4 sm:p-3 md:p-8 lg:p-5 text-white max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl`}
        >
          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-3 sm:mb-4"
          >
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/30 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
              {heroSlides[currentSlide].category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:mb-3 leading-tight"
          >
            <span className="md:hidden">
              {heroSlides[currentSlide].mobileTitle}
            </span>
            <span className="hidden md:inline">
              {heroSlides[currentSlide].title}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg md:mb-3 leading-relaxed"
          >
            <span className="md:hidden">
              {heroSlides[currentSlide].mobileDescription}
            </span>
            <span className="hidden md:inline">
              {heroSlides[currentSlide].description}
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={heroSlides[currentSlide].link}
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-white text-amber-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all duration-300 text-sm sm:text-base md:text-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
            <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-6 sm:w-8 h-1.5 sm:h-2"
                : "bg-white/50 w-2 sm:w-3 h-1.5 sm:h-2 hover:bg-white/80"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <>
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>
      </>

      {/* Decorative Elements - Desktop only */}
      <div className="absolute top-4 right-4 hidden lg:block">
        <div className="flex items-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 h-4 bg-white/40 rounded-full"
              animate={{ height: ["1rem", "1.5rem", "1rem"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
