import React from "react";
import Header1 from "../../components/Header/Header1";
import Icons from "../../components/Header/Icons";
import NavBar from "../../components/Header/NavBar";
import WebsiteLogo from "../../components/Header/WebsiteLogo";
import ProductPage1 from "./ProductPage1";
import ProductPage2 from "./Tabs";
import ProductPage3 from "./ProductPage3";
import ProductPage4 from "./ProductPage4";

function ProductPage() {
  return (
   <>
    {/* <Header1 /> */}
    {/* <div className="Shop-container-box">
      <div className="Shop-container">
        <WebsiteLogo />
        <NavBar />
        <Icons />
        </div>
      </div> */}
    <ProductPage1 />
     <ProductPage2 />
     <ProductPage3 />
    <ProductPage4 />  
</>
   
  );
}

export default ProductPage;
