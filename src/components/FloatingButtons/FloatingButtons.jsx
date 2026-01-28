"use client";
import React from "react";
import { FaWhatsapp, FaInstagram, FaPhone, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

function FloatingButtons() {
  // RichSol contact information
  const contactInfo = {
    phone: "+919890533709",
    whatsapp: "+919890533709", // Can be same as phone
    whatsappMessage:
      "Hello%20RichSol%20IT%20Solutions%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
    instagram:
      "https://www.instagram.com/kabra.emporium?igsh=MW41dDByaGV3dWNjcg%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/kabrasarees",
  };

  const buttons = [
    {
      icon: <FaFacebookF size={20} />,
      label: "Facebook",
      href: contactInfo.facebook,
      bgColor: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#1666d8]",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      aria: "Visit our Facebook page",
    },
    {
      icon: <FaInstagram size={22} />,
      label: "Instagram",
      href: contactInfo.instagram,
      bgColor: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      hoverColor: "hover:opacity-90",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      aria: "Visit our Instagram",
    },
    // {
    //   icon: <FaPhone size={20} />,
    //   label: "Call Now",
    //   href: `tel:${contactInfo.phone}`,
    //   bgColor: "bg-green-600",
    //   hoverColor: "hover:bg-green-700",
    //   target: "_self",
    //   rel: "",
    //   aria: "Call us",
    // },
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      href: `https://wa.me/${contactInfo.whatsapp}?text=${contactInfo.whatsappMessage}`,
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20ba5a]",
      target: "_blank",
      rel: "noopener noreferrer",
      aria: "Chat on WhatsApp",
    },
  ];

  return (
    <div className="fixed bottom-15 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {buttons.map((button, index) => (
          <motion.a
            key={button.label}
            href={button.href}
            target={button.target}
            rel={button.rel}
            aria-label={button.aria}
            className="relative"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          >
            <div
              className={`p-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group ${button.bgColor} ${button.hoverColor}`}
            >
              {button.icon}
              <span className="hidden group-hover:inline text-sm font-medium pr-2">
                {button.label}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default FloatingButtons;
