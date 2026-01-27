import React from "react";
import { bgimage } from "../../assets";

export default function StatsSection() {
  return (
    <section
      className="relative py-14 bg-cover bg-center"
      // style={{
      //   backgroundImage: `url(${bgimage})`,
      // }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-10 text-center text-[#5c2c1a]">
          {/* Item 1 */}
          <div>
            <h3 className="text-2xl md:text-5xl font-serif font-semibold mb-2">
              75,000+
            </h3>
            <p className="tracking-wide text-sm md:text-base">Happy Families</p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-xl md:text-5xl font-serif font-semibold mb-2">
              1 Lakh+
            </h3>
            <p className="tracking-wide text-sm md:text-base">
              Sarees Sold Every Year
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-2xl md:text-5xl font-serif font-semibold mb-2">
              3
            </h3>
            <p className="tracking-wide text-sm md:text-base">
              Generations of Legacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
