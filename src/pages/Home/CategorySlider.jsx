import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { dresses, kurta, lehanga, sarees, sharara } from "../../assets";

const categories = [
  { id: 1, image: dresses, slug: "lehengas" },
  { id: 2, image: sarees, slug: "sarees" },
  { id: 3, image: lehanga, slug: "lehengas" },
  { id: 4, image: kurta, slug: "salwarsuite" },
  { id: 5, image: sharara, slug: "salwarsuite" },
  { id: 6, image: kurta, slug: "salwarsuite" },
  { id: 7, image: dresses, slug: "lehengas" },
  { id: 8, image: sarees, slug: "sarees" },
];

export default function CategorySlider() {
  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create extended array for seamless looping
  const extendedCategories = [...categories, ...categories, ...categories];

  // Mouse drag functionality
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDragging = (e) => {
    setIsPaused(true);
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown = false;
    // Resume auto-scroll after 2 seconds if not manually paused
    setTimeout(() => {
      if (!isPaused) {
        setIsPaused(false);
      }
    }, 2000);
  };

  const onDrag = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;

    // Check for seamless transition
    checkAndResetPosition();
  };

  // Function to check if we need to reset position for seamless loop
  const checkAndResetPosition = useCallback(() => {
    if (!sliderRef.current || isTransitioning) return;

    const container = sliderRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;

    // If we're at the end of the second set (approaching third set)
    const oneSetWidth = scrollWidth / 3;
    const threshold = oneSetWidth * 2;

    if (scrollLeft >= threshold - clientWidth) {
      // We're approaching the end, jump to the middle (second set)
      setIsTransitioning(true);
      container.style.scrollBehavior = "auto"; // Disable smooth scrolling for jump
      container.scrollLeft = oneSetWidth + (scrollLeft - threshold);

      // Re-enable smooth scrolling after a brief delay
      setTimeout(() => {
        container.style.scrollBehavior = "smooth";
        setIsTransitioning(false);
      }, 50);
    }
    // If we're at the beginning of the first set
    else if (scrollLeft <= 0) {
      // Jump to the middle (second set)
      setIsTransitioning(true);
      container.style.scrollBehavior = "auto";
      const adjustedScroll = oneSetWidth + scrollLeft;
      container.scrollLeft = adjustedScroll;

      setTimeout(() => {
        container.style.scrollBehavior = "smooth";
        setIsTransitioning(false);
      }, 50);
    }
  }, [isTransitioning]);

  // Auto-scroll function with continuous loop
  const startAutoScroll = useCallback(() => {
    if (!sliderRef.current || isPaused || isTransitioning) return;

    const container = sliderRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollWidth <= clientWidth) return; // No need to scroll if content fits

    const scrollStep = 1; // Pixels to scroll per frame
    const scrollInterval = 16; // ~60fps

    autoScrollRef.current = setInterval(() => {
      if (isTransitioning) return;

      const currentScroll = container.scrollLeft;
      const maxScroll = scrollWidth - clientWidth;

      // If we're near the end (last 100px), check for reset
      if (currentScroll >= maxScroll - 100) {
        checkAndResetPosition();
      }

      // Continue scrolling
      container.scrollLeft += scrollStep;
    }, scrollInterval);
  }, [isPaused, isTransitioning, checkAndResetPosition]);

  // Handle mouse events for pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    // Only resume if not currently dragging
    if (!isDown) {
      setTimeout(() => setIsPaused(false), 500);
    }
  };

  useEffect(() => {
    // Clear existing interval
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    // Start auto-scroll if not paused
    if (!isPaused && !isTransitioning) {
      startAutoScroll();
    }

    // Cleanup on unmount
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [startAutoScroll, isPaused, isTransitioning]);

  // Initialize scroll position to the middle set
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const scrollWidth = container.scrollWidth;
        const oneSetWidth = scrollWidth / 3;

        // Start in the middle set for seamless looping
        container.scrollLeft = oneSetWidth;
        container.style.scrollBehavior = "smooth";
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Manual scroll functions
  const scrollLeftManual = () => {
    setIsPaused(true);
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsPaused(false), 1500);
  };

  const scrollRightManual = () => {
    setIsPaused(true);
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsPaused(false), 1500);
  };

  // Scroll event listener for seamless looping
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!isTransitioning) {
        checkAndResetPosition();
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [checkAndResetPosition, isTransitioning]);

  return (
    <section className=" py-10 md:py-16 relative overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6b3f2a] inline-block pb-2">
          Categories
        </h2>
        <div className="h-1 w-16 md:w-20 bg-amber-500 mb-4" />
      </div>

      {/* Manual Scroll Buttons - Desktop Only */}
      <div className="hidden md:block">
        <button
          onClick={scrollLeftManual}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Scroll left"
        >
          <svg
            className="w-6 h-6 text-[#6b3f2a]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={scrollRightManual}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6 text-[#6b3f2a]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div
          ref={sliderRef}
          onMouseDown={startDragging}
          onMouseLeave={handleMouseLeave}
          onMouseUp={stopDragging}
          onMouseMove={onDrag}
          onMouseEnter={handleMouseEnter}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 1000)}
          className="
            flex 
            gap-4 md:gap-8
            px-4 md:px-10
            overflow-x-auto
            scrollbar-hide
            touch-pan-x
            cursor-grab
            active:cursor-grabbing
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
          }}
        >
          {/* Hide scrollbar for Chrome, Safari and Opera */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {extendedCategories.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="
                flex-shrink-0
                w-[150px] sm:w-[220px] md:min-w-[340px]
                flex justify-center
              "
            >
              {/* Image Container */}
              <div
                onClick={() => navigate(`/Categorydetail/${item.slug}`)}
                className="
                  relative
                  w-full
                  h-[200px] sm:h-[340px] md:h-[460px]
                  overflow-hidden
                  rounded-[100px] md:rounded-[120px]
                  bg-transparent
                  cursor-pointer
                  group
                "
              >
                <img
                  src={item.image}
                  alt={`Category ${item.id}`}
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Category label on hover */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span
                    className="
                    inline-block
                    px-4 py-2
                    bg-white/90
                    text-[#6b3f2a]
                    text-sm font-semibold
                    rounded-full
                    opacity-0
                    group-hover:opacity-100
                    transform translate-y-4 group-hover:translate-y-0
                    transition-all duration-300
                  "
                  >
                    View Collection
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
