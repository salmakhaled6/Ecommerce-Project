import React from 'react'

function BrowseCategories() {
  return (
    <div className="Categories">
        
    <select name="Browse Categories" className="Browse-Categories">
    {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75977 13.8702C1.08594 13.8702 0.5 13.3136 0.5 12.6398C0.5 11.9366 1.08594 11.3507 1.75977 11.3507C2.46289 11.3507 2.99023 11.9366 2.99023 12.6398C2.99023 13.3136 2.46289 13.8702 1.75977 13.8702ZM1.75977 8.86047C1.08594 8.86047 0.5 8.30383 0.5 7.63C0.5 6.95618 1.08594 6.37024 1.75977 6.37024C2.46289 6.37024 2.99023 6.95618 2.99023 7.63C2.99023 8.30383 2.46289 8.86047 1.75977 8.86047ZM1.75977 3.9093C1.08594 3.9093 0.5 3.32336 0.5 2.62024C0.5 1.94641 1.08594 1.38977 1.75977 1.38977C2.46289 1.38977 2.99023 1.94641 2.99023 2.62024C2.99023 3.32336 2.46289 3.9093 1.75977 3.9093ZM4.68945 13.0499V12.2296H15.5V13.0499H4.68945ZM4.68945 7.21985H15.5V8.04016H4.68945V7.21985ZM4.68945 2.21008H15.5V3.0304H4.68945V2.21008Z" fill="white"/>
</svg> */}

      
      <option value="" disabled selected hidden>

        BROWSE CATEGORIES
      </option>

      <option value="category1">Computers</option>
      <option value="category2">Laptops</option>
      <option value="category3">Smartphones</option>
      <option value="category1">Tablets</option>
      <option value="category2">TV,Audio</option>
      <option value="category3">Hard Drive</option>
      <option value="category1">Headphones</option>
      <option value="category2">Watch</option>
      <option value="category3">Accessories</option>
      <option value="category3">Keyboards</option>
      <option value="category3">Cameras</option>
      <option value="category3">Virtual Reality</option>
    </select>
  </div>
  )
}

export default BrowseCategories
