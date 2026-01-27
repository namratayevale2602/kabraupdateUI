import React from "react";
import { useNavigate } from "react-router-dom";
import aboutUsData from "../../constant/Home/aboutUsData.json";
import { aboutbg, bgimage, bg4 } from "../../assets";

import kabra from "../../assets/videos/kabra_reel_1.mp4";
export default function AboutUs() {
  const navigate = useNavigate();
  const { title, subtitle, video, paragraphs, buttonText, buttonLink } =
    aboutUsData;

  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${bg4})`,
      // }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        {/* RIGHT – CONTENT */}
        <div className="text-[#6b3f2a]">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-16 md:w-20 bg-amber-500 mb-4" />

          <h4 className="font-semibold mb-4">{subtitle}</h4>

          {paragraphs.map((text, index) => (
            <p
              key={index}
              className="leading-relaxed text-sm text-justify pb-2"
            >
              {text}
            </p>
          ))}

          <a href={buttonLink}>
            <button className="bg-[#6b3f2a] text-white px-8 py-3 tracking-widest hover:bg-[#583020] transition mt-2">
              {buttonText}
            </button>
          </a>
        </div>

        {/* LEFT – VIDEO */}
        <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-lg">
          <video
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => navigate("/Categorydetail/sarees")}
            src={kabra}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
