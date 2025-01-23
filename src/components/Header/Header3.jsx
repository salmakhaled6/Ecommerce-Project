import React from "react";
import BrowseCategories from "./BrowseCategories";
import './Header3.css'
import NavBar from "./NavBar";
import Phone from "./Phone";

function Header3() {
  return (
    <div className="container-3">
<div>
  <BrowseCategories />
</div>
<nav>
  <NavBar />
</nav>
<div>
  <Phone />
</div>
    </div>
  );
}

export default Header3;
