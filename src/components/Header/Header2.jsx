import React from "react";
import "./Header2.css";
import Icons from "./Icons";
import SearchBar from "./SearchBar";
import WebsiteLogo from "./WebsiteLogo";

function Header2() {
  return (
    <div className="Container-2">
      <div>
        <WebsiteLogo />
      </div>
      <div>
        <SearchBar />
      </div>

      <div>
        <Icons />
      </div>
    </div>
  );
}

export default Header2;
