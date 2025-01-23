import { useState } from "react";
import "./App.css";
import Footer from './components/Footer/Footer'
import Header1 from './components/Header/Header1'
import Header2 from './components/Header/Header2'
import Header3 from "./components/Header/Header3";
import AdCards from "./pages/Home/AdCards";
import AllBlogs from "./pages/Home/AllBlogs";
import Discounts from "./Pages/Home/Discounts";
import FeaturedCataegory from "./pages/Home/FeaturedCatagegory/FeaturedCataegory";
import Hero from "./pages/Home/Hero";
import HomePage from "./pages/Home/HomePage";
import LatestNews from "./pages/Home/LatestNews";
import OfferBar from "./pages/Home/Offers/OfferBar";
import Offers from "./pages/Home/Offers/Offers";
import Products from "./pages/Home/Products";
import ProductPage from "./pages/Product/ProductPage";
import FilterBar from "./pages/Shopping/FilterBar";
import ShopPage from "./pages/Shopping/ShopPage";
import ShoppingList from "./pages/Shopping/ShoppingList";


function App() {
  return (
    <>

 <HomePage />

 {/* <ProductPage />

 <FilterBar /> */}
   


     
    </>
  );
}

export default App;
