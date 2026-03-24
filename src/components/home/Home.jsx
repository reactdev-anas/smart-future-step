import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import OurServices from "@/components/OurServices";
import Offers from "@/components/Offers";
import Training from "@/components/Training";
import Working from "@/components/Working";
import HeroSection from "@/components/HeroSection";


const Home = () => {

  return (
    <>
   
      <HeroSection />
      <OurServices />
      <Offers />
      <Training />
      <Working />
    </>
  );
};

export default Home;
