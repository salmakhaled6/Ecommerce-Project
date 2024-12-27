
import React from 'react'
import './Discounts.css'

function Discounts() {
  return (

      <div className="discount-container">
    <div className="discount-items">
       <div><p>MOBILE ACCESSORIES</p></div>
       <div><h2>Apple watch Sport Band</h2></div>
       <div><p>$199.00</p></div>
       <div className="discount-card-container">
      <div className="dis-card">
        <div className="dis-card-upper">365</div>
        <div className="dis-card-lower">Days</div>
      </div>
      <div className="dis-card">
        <div className="dis-card-upper">2 Hrs</div>
        <div className="dis-card-lower">Hrs</div>
      </div>
      <div className="dis-card">
        <div className="dis-card-upper">120</div>
        <div className="dis-card-lower">Mintues</div>
      </div>
      <div className="dis-card">
        <div className="dis-card-upper">7200</div>
        <div className="dis-card-lower">Seconds</div>
      </div>
    </div>

       <div><button>SHOP NOW</button></div>
    </div>
</div>
  
  )
}

export default Discounts




