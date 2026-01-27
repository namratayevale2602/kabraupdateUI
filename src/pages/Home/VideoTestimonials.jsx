import React from "react";
import data from "../../constant/Home/videoTestimonialsData";
import { mobilebg4 } from "../../assets"; // Import your mobile background image

export default function VideoTestimonials() {
  return (
    <section className="relative py-10 md:py-16 bg-cover bg-center">
      {/* Desktop Background (hidden on mobile) */}
      {/* <div
        className="absolute inset-0 hidden md:block bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      /> */}

      {/* Mobile Background (hidden on desktop) */}
      {/* <div
        className="absolute inset-0 md:hidden bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${mobilebg4})` }}
      /> */}

      {/* Background Opacity Overlay - Adjust if needed */}
      <div className="absolute inset-0"></div>
      {/* For different opacity on mobile/desktop: */}
      {/* <div className="absolute inset-0 bg-white opacity-60 md:opacity-40"></div> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6b3f2a] inline-block pb-2">
            {data.sectionTitle}
          </h2>
          <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4" />
          {/* Optional subtitle */}
          <p className="text-gray-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience
          </p>
        </div>

        {/* Testimonials - Different layout for mobile/desktop */}

        {/* Mobile View - Horizontal Scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-2">
          {data.testimonials.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[280px] snap-center bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Video Container */}
              <div className="relative h-[200px]">
                <video
                  src={item.video}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional Testimonial Text for Mobile */}
              <div className="p-4">
                <h3 className="font-semibold text-[#6b3f2a] text-sm">
                  Customer Review
                </h3>
                <p className="text-gray-600 text-xs mt-1 line-clamp-2">
                  {item.description ||
                    "Watch their amazing experience with our products"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video */}
              <div className="relative h-[350px]">
                <video
                  src={item.video}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Play overlay for better UX */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/30 rounded-full p-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Optional Testimonial Info */}
              <div className="p-6">
                <h3 className="font-semibold text-[#6b3f2a] text-lg mb-2">
                  {item.name || "Happy Customer"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.testimonial ||
                    item.description ||
                    "Loved the product and service!"}
                </p>
                {item.rating && (
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating ? "text-amber-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional View All Button */}
        <div className="text-center mt-8 md:mt-12">
          <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300">
            View All Testimonials
          </button>
        </div>
      </div>

      {/* Custom CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
