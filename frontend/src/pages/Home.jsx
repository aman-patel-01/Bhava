import React from "react";
import HomeMain from "../components/HomeMain";
import SacredCollection from "../components/SacredCollection";
import ProductSpecification from "../components/ProductSpecification";
import OurMission from "../components/OurMission";
import Community from "../components/Community";
import AppSection from "../components/AppSection";
import FAQ from "../components/FAQ";
import SacredJourney from "../components/SacredJourney";

function Home() {
  return (
    <>
      <HomeMain />
      <SacredCollection />
      <ProductSpecification />
      <OurMission />
      <Community />
      <AppSection />
      <FAQ />
      <SacredJourney />
    </>
  );
}

export default Home;