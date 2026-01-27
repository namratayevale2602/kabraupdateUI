import React, { useState } from "react";
import data from "../../constant/Home/faqData.json";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center px-4 md:px-6 mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6b3f2a] inline-block pb-2">
            {data.sectionTitle}
          </h2>
          <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4" />
          <p className="mt-2 text-sm md:text-base text-gray-700">
            {data.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {data.faqs.map((faq, index) => (
            <div key={faq.id} className="">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4"
              >
                <span className="font-medium text-[#6b3f2a] text-sm md:text-base">
                  {faq.question}
                </span>
                <span className="text-xl text-[#6b3f2a]">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-5 pb-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
