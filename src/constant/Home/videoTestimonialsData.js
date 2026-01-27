// Images

import { bgimage, kabrareel1, videotest_1, bg6 } from "../../assets";
//import poster from "../assets/images/video-poster.jpg";

// Videos

// import testimonial2 from "../assets/videos/testimonial2.mp4";
// import testimonial3 from "../assets/videos/testimonial3.mp4";

const videoTestimonialsData = {
  sectionTitle: "What Our Customers Say",
  backgroundImage: bg6,
  overlayColor: "bg-[#f7f2ef]/80",

  testimonials: [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Fashion Designer",
      video: videotest_1,
      //poster: poster,
      message:
        "Vastranand sarees reflect pure elegance and tradition. The quality and designs are absolutely stunning.",
    },
    {
      id: 2,
      name: "Anjali Mehta",
      role: "Boutique Owner",
      video: kabrareel1,
      //poster: poster,
      message:
        "Every saree tells a story. My customers love the fabric, colors, and craftsmanship of Vastranand.",
    },
    {
      id: 3,
      name: "Neha Patel",
      role: "Happy Customer",
      video: kabrareel1,
      //poster: poster,
      message:
        "From packaging to fabric feel, everything feels premium. Truly a brand I trust.",
    },
    {
      id: 4,
      name: "Neha Patel",
      role: "Happy Customer",
      video: kabrareel1,
      //poster: poster,
      message:
        "From packaging to fabric feel, everything feels premium. Truly a brand I trust.",
    },
  ],
};

export default videoTestimonialsData;
