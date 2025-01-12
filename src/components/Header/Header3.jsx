import React from "react";
import './Header3.css'

function Header3() {
  return (
    <div className="container-3">
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

      <div className="navbar">
        <ul>
          <li>
            <select name="" id="">
              <option value="" disabled selected hidden>
                HOME
              </option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="" disabled selected hidden>
                SHOP
              </option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="" disabled selected hidden>
                ELEMENTS
              </option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="" disabled selected hidden>
                PAGES
              </option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="" disabled selected hidden>
                VENDORS
              </option>
            </select>
          </li>
        </ul>
      </div>

      <div className="phone">
        <div>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4425 2.41407C14.7159 2.41407 15.0441 2.41407 15.4269 2.41407C19.6378 2.96094 22.1534 5.3125 22.8644 9.41407C23.1378 9.6875 23.5753 9.96094 23.6847 10.3438C25.1066 10.7813 25.6534 12.0391 25.9269 13.5703C25.9269 13.8438 25.9269 14.2813 25.9269 14.5547C25.6534 16.0859 25.1066 17.3438 23.6847 17.7813C23.4113 18.0547 23.1378 18.4922 22.8644 18.6563C22.5909 20.7344 21.4425 21.9922 19.3644 22.2656C18.9269 22.2656 18.2159 22.1563 17.6691 22.2656C17.2863 22.4297 16.9581 23.25 16.4113 23.0859C15.5909 23.0859 14.88 23.0859 14.0597 23.0859C12.6378 22.9766 12.3644 20.8438 13.7863 20.4609C14.1691 20.2969 16.3019 20.2969 16.6847 20.4609C17.1222 20.5703 17.3956 21.0078 17.5597 21.2813C19.3644 21.4453 20.7863 21.1719 21.4425 20.1875C21.6066 19.9141 22.0441 19.0391 21.88 18.6563C21.7159 18.3281 21.3331 18.2188 21.0597 17.7813C20.7863 17.0703 20.8956 15.2656 20.8956 14.0078C20.8956 13.4609 20.8956 12.75 20.8956 12.0391C20.8956 10.7813 20.8956 9.79688 21.7159 9.52344C21.4425 7.55469 20.6222 6.02344 19.3644 5.03907C18.1066 3.94532 16.4113 3.23438 14.1691 3.34375C10.6691 3.50782 8.42688 6.02344 7.88 9.52344C9.13782 9.96094 8.70032 12.0391 8.70032 14.1719C8.70032 16.0859 9.13782 19.0391 7.16907 18.7656C6.62219 18.7656 6.34875 18.2188 6.07532 17.7813C4.65344 17.3438 4.10657 16.0859 3.83313 14.5547C3.83313 14.2813 3.83313 13.8438 3.83313 13.5703C4.10657 12.0391 4.65344 10.7813 6.07532 10.3438C6.34875 9.96094 6.78625 9.6875 7.05969 9.41407C7.71594 5.3125 10.2863 2.96094 14.4425 2.41407ZM7.05969 10.3438C6.89563 12.0391 6.89563 14.1719 6.89563 15.9766C6.89563 16.5234 6.78625 17.2344 7.05969 17.7813C7.33313 17.7813 7.33313 17.7813 7.60657 17.7813C8.04407 17.3438 7.88 16.6875 7.88 16.0859C7.88 14.2813 7.88 12.2031 7.71594 10.5078C7.60657 10.2344 7.16907 10.2344 7.05969 10.3438ZM22.0441 10.3438C21.88 12.0391 21.88 14.1719 21.88 15.9766C21.88 16.5234 21.7159 17.2344 22.0441 17.7813C22.3175 17.7813 22.3175 17.7813 22.5909 17.7813C22.8644 17.3438 22.7003 16.6875 22.7003 16.0859C22.7003 14.2813 22.7003 12.2031 22.5909 10.5078C22.5909 10.2344 22.1534 10.2344 22.0441 10.3438ZM6.07532 16.7969C6.07532 14.9922 6.07532 13.0234 6.07532 11.2188C4.38 12.0391 4.38 16.0859 6.07532 16.7969ZM23.6847 16.7969C25.38 16.0859 25.38 11.9297 23.6847 11.2188C23.6847 13.1875 23.5753 15.1563 23.6847 16.7969ZM13.6222 22.1563C14.3331 22.2656 15.8644 22.4297 16.5753 22.1563C16.6847 21.9922 16.6847 21.7188 16.5753 21.4453C15.8644 21.4453 12.9113 20.8438 13.6222 22.1563Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div>
          <p>+(01)-800-3456-88</p>
        </div>
      </div>
    </div>
  );
}

export default Header3;
