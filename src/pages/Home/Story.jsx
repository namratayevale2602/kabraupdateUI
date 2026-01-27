import React, { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Search,
  X,
  User,
  ShoppingBag,
  Heart,
  Home,
  Grid,
  Star,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Truck,
  Shield,
  Clock,
} from "lucide-react";
import {
  kabra17,
  kabra23,
  kabra27,
  kabra3,
  kabra30,
  kabra5,
  kabra8,
  kabralogo,
} from "../../assets";
import { useNavigate } from "react-router-dom";

function Story() {
  const scrollContainerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Designer Sarees");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(2);
  const navigate = useNavigate();

  // Enhanced category data with all your provided categories and images
  const categories = [
    {
      id: 1,
      name: "Designer Sarees",
      description: "Contemporary designer sarees for modern women",
      link: "/Categorydetail/sarees",
      image: kabra30,
      count: "150+",
      featured: true,
      type: "saree",
      trending: true,
    },
    {
      id: 2,
      name: "Silk Sarees",
      description: "Luxurious silk sarees with intricate zari work",
      link: "/Categorydetail/sarees",
      image: kabra3,
      count: "200+",
      type: "saree",
      trending: true,
    },
    {
      id: 3,
      name: "Bridal Collection",
      description: "Opulent wedding sarees for the bride and family",
      link: "/Categorydetail/lehengas",
      image: kabra5,
      count: "100+",
      featured: true,
      type: "collection",
      new: true,
    },
    {
      id: 4,
      name: "Paithani Sarees",
      description: "Authentic Maharashtrian Paithanis with traditional motifs",
      link: "/Categorydetail/sarees",
      image: kabra30,
      count: "80+",
      type: "saree",
    },
    {
      id: 5,
      name: "Lehengas",
      description: "Trendy designer lehengas for weddings and parties",
      link: "/Categorydetail/lehengas",
      image: kabra8,
      count: "120+",
      featured: true,
      type: "outfit",
      trending: true,
    },
    {
      id: 6,
      name: "Party Wear",
      description: "Glamorous outfits perfect for evening events",
      link: "/Categorydetail/salwarsuite",
      image: kabra17,
      count: "200+",
      type: "outfit",
    },
    {
      id: 7,
      name: "Kanjeevaram",
      description: "Traditional Kanchipuram silk sarees with temple borders",
      link: "/Categorydetail/sarees",
      image: kabra23,
      count: "150+",
      type: "saree",
    },
    {
      id: 8,
      name: "Cotton Sarees",
      description: "Comfortable yet elegant cotton sarees for daily wear",
      link: "/Categorydetail/sarees",
      image: kabra27,
      count: "300+",
      type: "saree",
    },
    {
      id: 9,
      name: "Fabrics",
      description: "Premium fabrics for custom stitching",
      link: "/Categorydetail/lehengas",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1f88638a8b?w=400&auto=format&fit=crop&q=80",
      count: "300+",
      type: "material",
    },
    {
      id: 10,
      name: "Custom Tailoring",
      description: "Custom made outfits from selected fabrics",
      link: "/Categorydetail/lehengas",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&auto=format&fit=crop&q=80",
      count: "Custom",
      type: "service",
    },
    {
      id: 11,
      name: "Suits",
      description: "Designer suits and salwar kameez",
      link: "/Categorydetail/salwarsuite",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w-400&auto=format&fit=crop&q=60",
      count: "150+",
      type: "outfit",
    },
    {
      id: 12,
      name: "Kurtis",
      description: "Contemporary and traditional kurtis",
      link: "/Categorydetail/salwarsuite",
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&auto=format&fit=crop&q=80",
      count: "400+",
      type: "outfit",
      trending: true,
    },

    {
      id: 13,
      name: "Sale",
      description: "Discounted premium collections",
      link: "/Categorydetail/salwarsuite",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&auto=format&fit=crop&q=80",
      count: "50% OFF",
      badge: true,
      type: "sale",
      featured: true,
    },
  ];

  // Featured categories (first 4)
  const featuredCategories = categories.slice(0, 4);

  // Top navigation items
  const topNavItems = [
    // { name: "Home", icon: <Home size={18} />, link: "/" },
    // {
    //   name: "New Arrivals",
    //   icon: <Star size={18} />,
    //   link: "/new",
    //   badge: true,
    // },
    // { name: "Best Sellers", icon: <Grid size={18} />, link: "/bestsellers" },
    // { name: "Collections", icon: <Grid size={18} />, link: "/collections" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* Categories Carousel Section */}
      <div className="relative w-full ">
        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 -ml-6 transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 -mr-6 transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Categories Carousel */}
        <div className="py-3 md:py-1">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-1 md:space-x-6 px-2 md:px-8"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="shrink-0 w-24 md:w-28 flex flex-col items-center group cursor-pointer"
                onClick={() => {
                  setActiveCategory(category.name);
                  navigate(category.link);
                }}
              >
                {/* Category Circle */}
                <div className="relative mb-2 md:mb-3">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-transparent group-hover:border-purple-500 transition-all duration-300 shadow-md group-hover:shadow-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* linear overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Category Name & Info */}
                <a href={category.link} className="text-center w-full">
                  <span className="block text-xs md:text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors truncate">
                    {category.name}
                  </span>
                  {/* <div className="text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1 truncate">
                    {category.description}
                  </div>
                  <div className="text-[10px] md:text-xs font-medium text-purple-600 mt-0.5">
                    {category.count}
                  </div> */}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 animate-fadeIn">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl animate-slideInRight">
            {/* Menu Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={kabralogo}
                    alt="Kabra Fashion"
                    className="h-10 w-auto mr-3"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      Kabra Fashion
                    </h2>
                    <p className="text-xs text-gray-600">Premium Ethnic Wear</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* User Info */}
              <div className="flex items-center p-3 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Welcome!</h3>
                  <p className="text-sm text-gray-600">Sign in or Register</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <a
                  href="/orders"
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50"
                >
                  <ShoppingBag size={20} className="text-gray-700 mb-1" />
                  <span className="text-xs">Enquire</span>
                </a>
                <a
                  href="/wishlist"
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 relative"
                >
                  <Heart size={20} className="text-gray-700 mb-1" />
                  <span className="text-xs">Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="absolute top-2 right-6 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </a>
              </div>
            </div>

            {/* Menu Categories */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                Shop By Category
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href={category.link}
                    className="flex items-center p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="flex-1 text-sm text-gray-700 group-hover:text-purple-700">
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {category.count}
                    </span>
                    {category.badge && (
                      <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                        SALE
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="/help"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Help
                </a>
                <a
                  href="/about"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured Categories Banner */}

      {/* Add custom styles for animations */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}

export default Story;
