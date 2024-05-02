import React from "react";
import Header from "@/components/ui/layout/Header/Header";
import Footer from "@/components/ui/layout/Footer/Footer";
import HeroBanner from "@/components/ui/layout/HeroBanner/HeroBanner";
import FeaturedSlider from "@/components/ui/layout/FeaturedSlider/FeaturedSlider";
import ParallaxBanner from "@/components/ui/layout/ParallaxBanner/ParallaxBanner";
import LoadMoreList from "@/components/ui/layout/LoadMoreList/LoadMoreList";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <FeaturedSlider />
      <ParallaxBanner />
      <LoadMoreList />
      <Footer />        
    </>
  );
}
