import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import WhatsAppPopup from "../components/ScrollToTop/WhatsAppPopup";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Layout() {
  return (
    <div className="">
      <ScrollToTop />
      <Navbar />
      {/* <WhatsAppPopup /> */}
      <FloatingButtons />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
