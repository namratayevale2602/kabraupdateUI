import React from "react";
import { bg2, mobilebg } from "../../assets";
import OcassionSection from "./OcassionSection";
import HeroSection from "./HeroSection";
import TopCategories from "./TopCategories";
import WeddingCollections from "./WeddingCollections";
import InstagramFamousTrends from "./InstagramFamousTrends";
import CollectionsBanner from "./CollectionsBanner";
import CuratedCollection from "./CuratedCollection";
import ShopByOccasion from "./ShopByOccasion";
import CategorySlider from "./CategorySlider";
import AboutUs from "./AboutUs";
import VideoTestimonials from "./VideoTestimonials";
import StatsSection from "./StatsSection";
import FaqSection from "./FaqSection";
import Story from "./Story";

const Home = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Image with lower opacity */}
      <div
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Mobile-specific background overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 lg:hidden"
        style={{
          backgroundImage: `url(${mobilebg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Story />
        <HeroSection />
        <AboutUs />
        <TopCategories />
        {/* <CollectionsBanner /> */}
        <ShopByOccasion />
        <CuratedCollection />
        <CategorySlider />
        {/* <OcassionSection /> */}
        <VideoTestimonials />
        <StatsSection />
        <InstagramFamousTrends />
        <WeddingCollections />
        <FaqSection />
      </div>
    </section>
  );
};

export default Home;
