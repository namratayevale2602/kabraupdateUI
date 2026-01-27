import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import {
  Menu,
  X,
  ShoppingBag,
  User,
  Heart,
  Search,
  ChevronRight,
  Home,
  ContactIcon,
} from "lucide-react";
import { kabralogo } from "../../assets/index";

const Navbar = () => {
  const navigate = useNavigate(); // Add this hook
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Updated categories with proper slugs for routing
  const categories = [
    {
      id: 1,
      name: "Sarees",
      slug: "sarees", // Add slug for routing
      subcategories: [
        { name: "Banarasi Silk", slug: "sarees" },
        { name: "Kanjeevaram", slug: "sarees" },
        { name: "Paithani", slug: "sarees" },
        { name: "Chanderi", slug: "sarees" },
        { name: "Mysore Silk", slug: "sarees" },
      ],
    },
    {
      id: 2,
      name: "Lehengas",
      slug: "lehengas", // Add slug for routing
      subcategories: [
        { name: "Bridal Lehenga", slug: "lehengas" },
        { name: "Designer Lehenga", slug: "lehengas" },
        { name: "Party Wear", slug: "lehengas" },
        { name: "Mehendi Lehenga", slug: "lehengas" },
        { name: "Sangeet Lehenga", slug: "lehengas" },
      ],
    },
    {
      id: 3,
      name: "Salwar Suits",
      slug: "salwarsuite", // Add slug for routing
      subcategories: [
        { name: "Readymade Suites", slug: "salwarsuite" },
        { name: "Anarkali", slug: "salwarsuite" },
        { name: "Sharara Suit", slug: "salwarsuite" },
        { name: "Palazzo Suit", slug: "salwarsuite" },
        { name: "Plus Size", slug: "salwarsuite" },
      ],
    },
    {
      id: 4,
      name: "Designer Wear",
      slug: "salwarsuite", // Add slug for routing
      subcategories: [
        { name: "Designer Sarees", slug: "sarees" },
        { name: "Designer Lehengas", slug: "lehengas" },
        { name: "Designer Suits", slug: "salwarsuite" },
        { name: "Party Wear", slug: "designer" },
        { name: "Bridal Collection", slug: "designer" },
      ],
    },
    {
      id: 5,
      name: "Fabrics",
      slug: "salwarsuite", // Add slug for routing
      subcategories: [
        { name: "Silk Fabrics", slug: "fabrics" },
        { name: "Cotton Fabrics", slug: "fabrics" },
        { name: "Banarasi Fabrics", slug: "fabrics" },
        { name: "Paithani Fabrics", slug: "fabrics" },
        { name: "Designer Fabrics", slug: "fabrics" },
      ],
    },
    {
      id: 6,
      name: "Custom Tailoring",
      slug: "sarees", // Add slug for routing
      subcategories: [
        { name: "Blouse Design", slug: "custom" },
        { name: "Lehenga Stitching", slug: "custom" },
        { name: "Suit Tailoring", slug: "custom" },
        { name: "Bridal Wear", slug: "custom" },
        { name: "Men's Ethnic", slug: "custom" },
      ],
    },
  ];

  // Mobile bottom navigation items
  const mobileNavItems = [
    {
      icon: <Home size={20} />,
      label: "Home",
      action: () => navigate("/"), // Use navigate instead of window.location
    },
    {
      icon: <Search size={20} />,
      label: "Search",
      action: () => setIsSearchOpen(true),
    },
    {
      icon: <ContactIcon size={20} />,
      label: "Enquiry",
      action: () => navigate("/enquiry"), // Use navigate
    },
  ];

  // Function to handle category click
  const handleCategoryClick = (slug) => {
    navigate(`/Categorydetail/${slug}`);
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  // Function to handle subcategory click
  const handleSubcategoryClick = (slug) => {
    navigate(`/Categorydetail/${slug}`);
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 lg:px-50 bg-white shadow-sm sticky top-0 z-50">
        {/* Left: Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={kabralogo}
            alt="Kabra Logo"
            className="w-15 h-15 lg:w-25 lg:h-25 object-contain"
          />
        </div>

        {/* Center: Search Bar (Desktop Only) */}
        <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for sarees, fabrics, designers..."
              className="w-full px-4 py-2.5 pl-12 rounded-full border border-gray-300 focus:outline-none focus:border-[#eb8749] focus:ring-1 focus:ring-[#eb8749] bg-gray-50"
              onKeyPress={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  navigate(`/search?q=${encodeURIComponent(e.target.value)}`);
                }
              }}
            />
            <Search
              className="absolute left-4 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Right: Desktop Categories Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Desktop Categories Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hidden lg:flex items-center space-x-2 px-4 py-2.5 rounded-lg text-[#7b3306] hover:opacity-90 transition-all duration-300"
          >
            <Menu size={20} className="" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-orange-50 rounded-lg transition-colors"
          >
            <Menu size={24} className="text-[#7b3306]" />
          </button>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4 pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Search className="text-[#eb8749]" size={24} />
              <div>
                <h2 className="text-xl font-bold text-gray-800">Search</h2>
                <p className="text-sm text-gray-500">Find sarees & more</p>
              </div>
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search sarees, fabrics, designers..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-[#eb8749] focus:ring-1 focus:ring-[#eb8749] bg-white"
              autoFocus
              onKeyPress={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  navigate(`/search?q=${encodeURIComponent(e.target.value)}`);
                  setIsSearchOpen(false);
                }
              }}
            />
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={20}
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Banarasi", slug: "sarees" },
                { name: "Kanjeevaram", slug: "sarees" },
                { name: "Designer", slug: "sarees" },
                { name: "Lehengas", slug: "lehengas" },
                { name: "Party Wear", slug: "lehengas" },
                { name: "Bridal", slug: "sarees" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(`/Categorydetail/${item.slug}`);
                    setIsSearchOpen(false);
                  }}
                  className="px-3 py-1.5 bg-[#eb8749]/10 text-[#7b3306] rounded-full text-sm hover:bg-[#eb8749]/20 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="flex justify-around items-center">
          {mobileNavItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="flex flex-col items-center active:opacity-70 transition-opacity"
            >
              <div
                className={`p-2 rounded-full mb-1 ${
                  item.label === "Search" ? "text-[#eb8749]" : "text-gray-600"
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs font-medium text-gray-700">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isSidebarOpen
            ? "bg-black/30 backdrop-blur-sm"
            : "bg-transparent pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-full md:w-[380px] bg-white shadow-xl transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold text-gray-800 text-lg">
                  Categories
                </div>
                <p className="text-sm text-gray-500">Browse collections</p>
              </div>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={22} className="text-gray-700" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="overflow-y-auto h-full pb-32">
            <div className="p-4">
              {/* Quick Filters */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Shop by Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.slug)}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-1">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <button
                      onClick={() => handleCategoryClick(category.slug)}
                      className="w-full flex items-center justify-between p-3 hover:bg-orange-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-left">
                          <div className="font-medium text-gray-800">
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {category.subcategories.length} subcategories
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Subcategories */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeCategory === category.id ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="pl-12 pr-3 pb-3">
                        {category.subcategories.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSubcategoryClick(sub.slug)}
                            className="w-full flex items-center justify-between py-2 px-3 text-sm text-gray-600 hover:text-[#eb8749] hover:bg-orange-50 rounded-lg mb-1 transition-colors text-left"
                          >
                            <span className="font-medium">{sub.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="mt-6 p-4 bg-gradient-to-r from-[#eb8749]/5 to-[#7b3306]/5 rounded-lg border border-orange-100">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Special Collections
                </h4>
                <div className="space-y-2">
                  {[
                    { name: "Festive Collection 2024", slug: "sarees" },
                    { name: "Summer Special", slug: "lehengas" },
                    { name: "Wedding Season", slug: "sarees" },
                    { name: "Luxury Edition", slug: "lehengas" },
                  ].map((collection) => (
                    <button
                      key={collection.name}
                      onClick={() => handleCategoryClick(collection.slug)}
                      className="w-full text-left block py-2 px-3 text-[#7b3306] hover:text-[#eb8749] hover:bg-white rounded transition-colors"
                    >
                      {collection.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Padding for Mobile Bottom Nav */}
      <div className="lg:hidden"></div>
    </>
  );
};

export default Navbar;
