import React from "react";
import Header1 from "../../components/Header/Header1";
import Icons from "../../components/Header/Icons";
import NavBar from "../../components/Header/NavBar";
import WebsiteLogo from "../../components/Header/WebsiteLogo";
import FilterBar from "./FilterBar";

function ShopPage() {
  return (
    <div>
      <Header1 />
      <div className="Shop-container-box">

      <div className="Shop-container">
        <WebsiteLogo />
        <NavBar />
        <Icons />
      </div>
      </div>
   

      <div className="shop-conatiner-2">
        <h3>Fashions</h3>

      </div>
      <FilterBar />
    </div>
  );
}

export default ShopPage;
