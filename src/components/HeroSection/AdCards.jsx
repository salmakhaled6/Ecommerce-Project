import React from "react";
import "./Ad-cards.css";

function AdCards() {
  return (
    <div className="cards-container">
      <div className="card-Ad">
        <div className="Ad-img"></div>
      </div>

      <div className="card-Ad">
        <div className="card-content">
          <h3>Card Title 2</h3>
          <p>description .</p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="card-Ad">
        <div className="card-content">
          <h3>Card Title 3</h3>
          <p>Some description .</p>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
}

export default AdCards;
