import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  IoLocationOutline,
  IoCallOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const categories = [
    "Designer Sarees",
    "Silk Sarees",
    "Bridal Collection",
    "Paithani Sarees",
    "Lehengas",
    "Party Wear",
    "Kanjeevaram",
    "Cotton Sarees",
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "About Us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      url: "https://www.facebook.com/kabrasarees",
      color: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/kabra.emporium?igsh=MW41dDByaGV3dWNjcg%3D%3D&utm_source=qr",
      color: "hover:text-pink-600",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: FaPinterest,
      label: "Pinterest",
      url: "#",
      color: "hover:text-red-600",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 lg:px-16 rounded-t-2xl sm:rounded-t-3xl shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">
            Kabra Emporium
          </h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Nashik's premier destination for exquisite sarees and traditional
            wear since 1984. Experience the finest collection of handcrafted
            textiles and traditional Indian attire.
          </p>

          <div className="flex space-x-4">
            {socialIcons.map(({ icon: Icon, label, url, color }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                title={label}
                className="bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 rounded-full shadow-sm hover:bg-white/20 text-white transition-all duration-300 group relative"
              >
                <Icon size={18} className={`sm:w-5 sm:h-5 ${color}`} />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-amber-400">
            Quick Links
          </h3>
          <ul className="text-sm text-gray-300 space-y-2">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.href}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Store Timings */}
          <div className="mt-8 pt-4 border-t border-white/20">
            <h4 className="text-sm font-semibold text-amber-400 mb-2 flex items-center gap-2">
              <IoTimeOutline size={16} />
              STORE TIMINGS
            </h4>
            <p className="text-sm text-gray-300">
              Monday to Sunday: 10:00 AM - 8:00 PM
            </p>
            <p className="text-sm text-gray-300">
              Open all days including holidays
            </p>
          </div>
        </motion.div>

        {/* Collections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-amber-400">
            Collections
          </h3>
          <ul className="text-sm text-gray-300 space-y-2">
            {categories.map((category, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`/collections/${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {category}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-amber-400">
            Contact Us
          </h3>

          <div className="space-y-6">
            {/* Map */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <iframe
                title="Kabra Emporium Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15015.654000839273!2d73.75400732954571!3d20.008474559323567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb85fab84bf9%3A0x5f2e809d4e352b3b!2sKabra%20Emporium!5e1!3m2!1sen!2sin!4v1768134378635!5m2!1sen!2sin"
                className="w-full h-48 sm:h-52 md:h-30 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/8XWZvEomvdzaMvbs7",
                      "_blank",
                    )
                  }
                  className="bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-lg flex items-center gap-1"
                >
                  <IoLocationOutline size={14} />
                  Get Directions
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <IoLocationOutline
                  className="text-amber-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <span
                  className="cursor-pointer hover:text-amber-300 transition-colors duration-300"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/8XWZvEomvdzaMvbs7",
                      "_blank",
                    )
                  }
                >
                  PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT
                  COLONY, NASHIK - 422002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MdOutlineEmail className="text-amber-400" size={18} />
                <a
                  href="mailto:connect@kabraemporium.com"
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-300 hover:underline"
                >
                  connect@kabraemporium.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoCallOutline className="text-amber-400 mt-1" size={18} />
                <div className="space-y-2">
                  <a
                    href="tel:+919890533709"
                    className="text-gray-300 hover:text-amber-300 transition-colors duration-300 block hover:underline"
                  >
                    +91 98905 33709
                  </a>
                  <a
                    href="tel:+919763404340"
                    className="text-gray-300 hover:text-amber-300 transition-colors duration-300 block hover:underline"
                  >
                    +91 97634 04340
                  </a>
                </div>
              </li>
            </ul>

            {/* Quick Contact Button */}
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2.5 rounded-lg hover:bg-amber-700 transition-all duration-300 border border-amber-500 hover:border-amber-600 w-full justify-center text-sm font-medium shadow-lg hover:shadow-xl"
              >
                <MdOutlineEmail size={16} />
                Quick Inquiry
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-center text-sm text-gray-400 border-t border-white/20 pt-4 sm:pt-6">
        <div className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-amber-300">Kabra Emporium</span>
            . All Rights Reserved.
          </p>
          <span className="hidden sm:inline text-gray-600">|</span>
          <p className="text-xs text-gray-500">
            Est. 1984 • Legacy of Elegance & Tradition
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

// / import React from "react";
// import { motion } from "framer-motion";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const [openSection, setOpenSection] = React.useState(null);

//   const categories = [
//     "Designer Sarees",
//     "Silk Sarees",
//     "Bridal Collection",
//     "Paithani Sarees",
//     "Lehengas",
//     "Party Wear",
//     "Kanjeevaram",
//     "Cotton Sarees",
//   ];

//   const quickLinks = [
//     { label: "Home", href: "/" },
//     { label: "Collections", href: "/collections" },
//     { label: "About Us", href: "/about" },
//     { label: "Testimonials", href: "/testimonials" },
//     { label: "Contact", href: "/contact" },
//   ];

//   const socialLinks = [
//     {
//       icon: Facebook,
//       href: "https://www.facebook.com/kabrasarees",
//       label: "Facebook",
//     },
//     {
//       icon: Instagram,
//       href: "https://www.instagram.com/kabra.emporium?igsh=MW41dDByaGV3dWNjcg%3D%3D&utm_source=qr",
//       label: "Instagram",
//     },
//     { icon: Twitter, href: "#", label: "Twitter" },
//   ];

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-900 text-white pt-10 pb-6"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Desktop Grid */}
//         <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-10">
//           {/* About */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <h3 className="text-2xl font-bold text-amber-400 mb-4">
//               Kabra Emporium
//             </h3>
//             <p className="text-gray-300 mb-6 text-sm leading-relaxed">
//               Nashik's premier destination for exquisite sarees and traditional
//               wear since 1984.
//             </p>
//             <div className="flex space-x-3">
//               {socialLinks.map(({ icon: Icon, href, label }, index) => (
//                 <motion.a
//                   key={index}
//                   href={href}
//                   aria-label={label}
//                   whileHover={{ y: -3 }}
//                   className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full text-white transition-colors"
//                 >
//                   <Icon size={18} />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-amber-400">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               {quickLinks.map((link, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ x: 5 }}
//                   className="flex items-center"
//                 >
//                   <span className="text-amber-400 mr-2 text-xs">›</span>
//                   <Link
//                     to={link.href}
//                     className="text-gray-300 hover:text-white transition-colors text-sm"
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Categories */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-amber-400">
//               Collections
//             </h3>
//             <ul className="space-y-2">
//               {categories.map((category, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ x: 5 }}
//                   className="flex items-center"
//                 >
//                   <span className="text-amber-400 mr-2 text-xs">›</span>
//                   <Link
//                     to={`/collections/${category
//                       .toLowerCase()
//                       .replace(/\s+/g, "-")}`}
//                     className="text-gray-300 hover:text-white transition-colors text-sm"
//                   >
//                     {category}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-amber-400">
//               Contact Us
//             </h3>
//             <ul className="space-y-3 text-gray-300 text-sm">
//               <li className="flex items-start gap-2">
//                 <MapPin
//                   className="text-amber-400 mt-1 flex-shrink-0"
//                   size={16}
//                 />
//                 <span
//                   className="leading-tight cursor-pointer"
//                   onClick={() =>
//                     window.open(
//                       "https://maps.app.goo.gl/8XWZvEomvdzaMvbs7",
//                       "_blank",
//                     )
//                   }
//                 >
//                   PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT
//                   COLONY, NASHIK - 422002
//                 </span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="text-amber-400" size={16} />
//                 <a
//                   href="mailto:connect@kabraemporium.com"
//                   className="hover:text-white transition-colors"
//                 >
//                   connect@kabraemporium.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Phone className="text-amber-400 mt-1" size={16} />
//                 <div className="space-y-1">
//                   <a
//                     href="tel:+919890533709"
//                     className="hover:text-white transition-colors block"
//                   >
//                     +91 98905 33709
//                   </a>
//                   <a
//                     href="tel:+919763404340"
//                     className="hover:text-white transition-colors block"
//                   >
//                     +91 97634 04340
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Clock className="text-amber-400" size={16} />
//                 <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
//               </li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* Mobile Accordion */}
//         <div className="lg:hidden space-y-4">
//           {/* About Section - Always visible on mobile */}
//           <div className="pb-4 border-b border-gray-800">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="text-lg font-bold text-amber-400">
//                 Kabra Emporium
//               </h3>
//               <div className="flex space-x-3">
//                 {socialLinks.map(({ icon: Icon, href, label }, index) => (
//                   <a
//                     key={index}
//                     href={href}
//                     aria-label={label}
//                     className="bg-amber-700 hover:bg-amber-600 p-1.5 rounded-full text-white transition-colors"
//                   >
//                     <Icon size={16} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Nashik's premier destination for exquisite sarees and traditional
//               wear since 1984.
//             </p>
//           </div>

//           {/* Quick Links Accordion */}
//           <div className="border-b border-gray-800">
//             <button
//               onClick={() => toggleSection("quickLinks")}
//               className="w-full flex justify-between items-center py-3"
//             >
//               <span className="text-base font-semibold text-amber-400">
//                 Quick Links
//               </span>
//               {openSection === "quickLinks" ? (
//                 <ChevronUp className="text-gray-400" size={20} />
//               ) : (
//                 <ChevronDown className="text-gray-400" size={20} />
//               )}
//             </button>
//             {openSection === "quickLinks" && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="pb-4"
//               >
//                 <ul className="space-y-2">
//                   {quickLinks.map((link, index) => (
//                     <li key={index}>
//                       <Link
//                         to={link.href}
//                         className="text-gray-300 hover:text-white transition-colors text-sm flex items-center py-1.5"
//                       >
//                         <span className="text-amber-400 mr-2 text-xs">›</span>
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             )}
//           </div>

//           {/* Categories Accordion */}
//           <div className="border-b border-gray-800">
//             <button
//               onClick={() => toggleSection("categories")}
//               className="w-full flex justify-between items-center py-3"
//             >
//               <span className="text-base font-semibold text-amber-400">
//                 Collections
//               </span>
//               {openSection === "categories" ? (
//                 <ChevronUp className="text-gray-400" size={20} />
//               ) : (
//                 <ChevronDown className="text-gray-400" size={20} />
//               )}
//             </button>
//             {openSection === "categories" && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="pb-4"
//               >
//                 <ul className="space-y-2">
//                   {categories.map((category, index) => (
//                     <li key={index}>
//                       <Link
//                         to={`/collections/${category
//                           .toLowerCase()
//                           .replace(/\s+/g, "-")}`}
//                         className="text-gray-300 hover:text-white transition-colors text-sm flex items-center py-1.5"
//                       >
//                         <span className="text-amber-400 mr-2 text-xs">›</span>
//                         {category}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             )}
//           </div>

//           {/* Contact Accordion */}
//           <div className="border-b border-gray-800">
//             <button
//               onClick={() => toggleSection("contact")}
//               className="w-full flex justify-between items-center py-3"
//             >
//               <span className="text-base font-semibold text-amber-400">
//                 Contact Us
//               </span>
//               {openSection === "contact" ? (
//                 <ChevronUp className="text-gray-400" size={20} />
//               ) : (
//                 <ChevronDown className="text-gray-400" size={20} />
//               )}
//             </button>
//             {openSection === "contact" && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="pb-4"
//               >
//                 <ul className="space-y-3 text-gray-300 text-sm">
//                   <li className="flex items-start gap-2">
//                     <MapPin
//                       className="text-amber-400 mt-1 flex-shrink-0"
//                       size={16}
//                     />
//                     <span
//                       className="leading-tight"
//                       onClick={() =>
//                         window.open(
//                           "https://maps.app.goo.gl/8XWZvEomvdzaMvbs7",
//                           "_blank",
//                         )
//                       }
//                     >
//                       PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT
//                       COLONY, NASHIK - 422002
//                     </span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <Mail className="text-amber-400" size={16} />
//                     <a
//                       href="mailto:connect@kabraemporium.com"
//                       className="hover:text-white transition-colors"
//                     >
//                       connect@kabraemporium.com
//                     </a>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <Phone className="text-amber-400 mt-1" size={16} />
//                     <div className="space-y-1">
//                       <a
//                         href="tel:+919890533709"
//                         className="hover:text-white transition-colors block"
//                       >
//                         +91 98905 33709
//                       </a>
//                       <a
//                         href="tel:+919763404340"
//                         className="hover:text-white transition-colors block"
//                       >
//                         +91 97634 04340
//                       </a>
//                     </div>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <Clock className="text-amber-400" size={16} />
//                     <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
//                   </li>
//                 </ul>
//               </motion.div>
//             )}
//           </div>
//         </div>

//         {/* Copyright & Links */}
//         <div className="mt-8 pt-6 border-t border-gray-800">
//           {/* Mobile Social Links */}
//           <div className="lg:hidden flex justify-center space-x-4 mb-4">
//             {socialLinks.map(({ icon: Icon, href, label }, index) => (
//               <a
//                 key={index}
//                 href={href}
//                 aria-label={label}
//                 className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full text-white transition-colors"
//               >
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>

//           <div className="text-center">
//             <p className="text-gray-400 text-sm mb-3">
//               © {new Date().getFullYear()}{" "}
//               <span className="font-semibold text-white">Kabra Emporium</span>.
//               All Rights Reserved
//             </p>

//             <div className="flex flex-row sm:flex-row justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm">
//               <Link
//                 to="/privacy-policy"
//                 className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
//               >
//                 Privacy Policy
//               </Link>
//               <span className="text-gray-600 hidden sm:inline">|</span>
//               <Link
//                 to="/terms"
//                 className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
//               >
//                 Terms of Service
//               </Link>
//               <span className="text-gray-600 hidden sm:inline">|</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;
