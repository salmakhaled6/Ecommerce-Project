import React from 'react'
import './Offers.css'

function OfferBar() {
  return (
    <div className='offer-box'>
        <div><p>What we offer</p></div>
        <div className="arrivals-nav">
            <ul>
                <li><a href="">NEW ARRIVALS</a></li>
                <li><a href="">FEATURED</a></li>
                <li><a href="">ON SALE</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default OfferBar
