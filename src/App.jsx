import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";
import AdCards from "./components/HeroSection/AdCards";
import AllBlogs from "./components/HeroSection/AllBlogs";
import Discounts from "./components/HeroSection/Discounts";
import FeaturedCataegory from "./components/HeroSection/FeaturedCatagegory/FeaturedCataegory";
import Hero from "./components/HeroSection/Hero";
import LatestNews from "./components/HeroSection/LatestNews";
import OfferBar from "./components/HeroSection/Offers/OfferBar";
import Offers from "./components/HeroSection/Offers/Offers";
import Products from "./components/HeroSection/Products";

function App() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />

      <Hero />

      <AdCards />

      <FeaturedCataegory />
      <OfferBar />
      <Offers />

      <Discounts />

      <Products />

      <LatestNews />
      <AllBlogs />

      <Footer />
    </>
  );
}

export default App;
