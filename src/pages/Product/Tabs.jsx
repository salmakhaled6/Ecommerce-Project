import React, { useState } from "react";
import "./ProductPage2.css";
import "./ProductPage2-des.css";
import "./ProductPage2-rev.css";
import "./ProductPage2-cus.css";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("boughtTogether");

  const tabContent = {
    boughtTogether: (
      <div className="productpage2-boxes">
        <div className="productpage2-boxes-1">
          <div className="Bought-product-card">
            <div className="Bought-card-top">
              <div className="Bought-top-left-container">
                <span className="Bought-top-left-text">sale</span>
                <span className="Bought-top-left-text-2">HOT</span>
              </div>
            </div>
            <div className="Bought-card-image">
              <img
                src="https://elessi.b-cdn.net/wp-content/uploads/2019/02/Liliah-Velvet-Dining-Chair-Smoke-side-401x512.jpg"
                alt=""
              />

              <div className="hover-icons"></div>
            </div>
            <div className="Bought-card-bottom">
              <h3>Product 1</h3>
              <p>$20.00</p>
            </div>
          </div>
          <div className="Bought-product-card">
            <div className="Bought-card-top">
              <div className="Bought-top-left-container">
                <span className="Bought-top-left-text">sale</span>
                <span className="Bought-top-left-text-2">HOT</span>
              </div>
            </div>
            <div className="Bought-card-image">
              <img
                src="https://elessi.b-cdn.net/wp-content/uploads/2019/02/Liliah-Velvet-Dining-Chair-Smoke-side-401x512.jpg"
                alt=""
              />

              <div className="hover-icons"></div>
            </div>
            <div className="Bought-card-bottom">
              <h3>Product 1</h3>
              <p>$20.00</p>
            </div>
          </div>
          <div className="Bought-product-card">
            <div className="Bought-card-top">
              <div className="Bought-top-left-container">
                <span className="Bought-top-left-text">sale</span>
                <span className="Bought-top-left-text-2">HOT</span>
              </div>
            </div>
            <div className="Bought-card-image">
              <img
                src="https://elessi.b-cdn.net/wp-content/uploads/2019/02/Liliah-Velvet-Dining-Chair-Smoke-side-401x512.jpg"
                alt=""
              />

              <div className="hover-icons"></div>
            </div>
            <div className="Bought-card-bottom">
              <h3>Product 1</h3>
              <p>$20.00</p>
            </div>
          </div>
          <div className="Bought-product-card">
            <div className="Bought-card-top">
              <div className="Bought-top-left-container">
                <span className="Bought-top-left-text">sale</span>
                <span className="Bought-top-left-text-2">HOT</span>
              </div>
            </div>
            <div className="Bought-card-image">
              <img
                src="https://elessi.b-cdn.net/wp-content/uploads/2019/02/Liliah-Velvet-Dining-Chair-Smoke-side-401x512.jpg"
                alt=""
              />

              <div className="hover-icons">
                {/* <i className="fas fa-eye"><span class="material-symbols-outlined">
visibility
</span></i>
        <i className="fas fa-shopping-cart"><span class="material-symbols-outlined">
local_mall
</span></i> */}
              </div>
            </div>
            <div className="Bought-card-bottom">
              <h3>Product 1</h3>
              <p>$20.00</p>
            </div>
          </div>
        </div>
        <div className="productpage2-boxes-2-outerbox">
          <div className="productpage2-boxes-2">
            <div className="productpage2-boxes-2-dev">
              {" "}
              <ul>
                <li>
                  <a href="">
                    <input type="checkbox" />
                    This product: Papasan Chair ($59.00)
                  </a>
                </li>
                <li>
                  <a href="">
                    <input type="checkbox"></input>
                    Armchair Charcoal ($40.00)
                  </a>
                </li>
                <li>
                  <a href="">
                    <input type="checkbox"></input>
                    Elessi Chair ($20.00)
                  </a>
                </li>
                <li>
                  <a href="">
                    <input type="checkbox"></input>
                    Lili Chair ($29.00)
                  </a>
                </li>
                <p>
                  Total: <span className="total"> $148.00</span>
                </p>
              </ul>
            </div>

            <div className="page2-btn-dev">
              <button className="page2-btn">ADD SELECTED TO CART</button>
            </div>
          </div>
        </div>
      </div>
    ),
    description: (
      <div className="description-img-box">
        <div className="description-img">
          <p className="description-img-para">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters. On the other hand, we denounce with
            righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desire. It has survived not only five centuries, but also the
          </p>
          <p className="description-img-para">
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <img
            src="https://elessi.b-cdn.net/wp-content/uploads/2016/06/slider-home-furniture.jpg"
            alt=""
          />
        </div>
      </div>
    ),
    review: (
      <div className="page2-reviews">
        <div className="page2-reviews-secondColumn">
          <div className="page2-reviews-secColumn">
            <div>
              <div className="rating-container">
                <div className="overall-rating">
                  <div className="rating-number">4.75</div>
                  <div className="rating-stars">★★★★★</div>
                  <div className="review-count">(8 reviews)</div>
                </div>

                <div className="rating-breakdown">
                  <div className="star-row">
                    <span className="star-label">5 </span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value="6"
                      className="slider"
                      readOnly
                    />
                    <span className="slider-value">6</span>
                  </div>
                  <div className="star-row">
                    <span className="star-label">4 </span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value="2"
                      className="slider"
                      readOnly
                    />
                    <span className="slider-value">2</span>
                  </div>
                  <div className="star-row">
                    <span className="star-label">3 </span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value="0"
                      className="slider"
                      readOnly
                    />
                    <span className="slider-value">0</span>
                  </div>
                  <div className="star-row">
                    <span className="star-label">2 </span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value="0"
                      className="slider"
                      readOnly
                    />
                    <span className="slider-value">0</span>
                  </div>
                  <div className="star-row">
                    <span className="star-label">1 </span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value="0"
                      className="slider"
                      readOnly
                    />
                    <span className="slider-value">0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="page2-reviews-boxes">
              <div
                className="image-box"
                style={{
                  backgroundImage:
                    "url('https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-3-1.jpg')",
                }}
              ></div>
              <div
                className="image-box"
                style={{
                  backgroundImage:
                    "url('https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg')",
                }}
              ></div>
              <div
                className="image-box"
                style={{
                  backgroundImage:
                    "url('https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg')",
                }}
              ></div>
              <div
                className="image-box"
                style={{
                  backgroundImage:
                    "url('https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg')",
                }}
              ></div>
            </div>

            <div className="page2-reviews-button">
              <button>Write a review</button>
            </div>
          </div>

          <div className="review-list">
            <div className="review-container">
              <div className="user-profile">
                <img
                  src="https://secure.gravatar.com/avatar/5f1d03ae095640f54bb132a9d40375aa?s=60&d=mm&r=g"
                  alt="User Profile"
                  class="profile-img"
                />
              </div>

              <div className="comment-details">
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
                <div className="user-info">
                  <span className="user-name">Jane Doe</span>
                  <span className="comment-date"> - Jan 12, 2025</span>
                </div>
                <div className="user-comment">
                  I was very surprised by how much I liked this top. I’ve been
                  searching for a sleeveless square necked top to go with a
                  specific outfit, and everyone I found was see through, or you
                  couldn’t wear a normal bra with it. This top isn’t see through
                  at all, and I love the ridges that give it a little more
                  character. And a normal bra will work with it, if you’re
                  wondering.
                </div>
              </div>

              <div className="helpful-section">
                <div className="helpful-boxes">
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                </div>

                <div className="helpful-action-container">
                  <div className="helpful-action">
                    <span className="text">Helpful</span>
                    <span className="icon like-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0587 1.78737C9.86494 1.44674 8.61807 2.13737 8.27744 3.33112L8.09932 3.95612C7.98369 4.36237 7.77432 4.73737 7.48994 5.04987L5.88682 6.81237C5.60869 7.11862 5.63057 7.59362 5.93682 7.87174C6.24307 8.14987 6.71807 8.12799 6.99619 7.82174L8.59932 6.05924C9.03994 5.57487 9.36182 4.99674 9.53994 4.36862L9.71807 3.74362C9.83057 3.34674 10.2462 3.11549 10.6462 3.22799C11.0462 3.34049 11.2743 3.75612 11.1618 4.15612L10.9837 4.78112C10.8056 5.40299 10.5243 5.99049 10.1524 6.51549C9.98994 6.74362 9.97119 7.04362 10.0993 7.29362C10.2274 7.54362 10.4837 7.69987 10.7649 7.69987H14.9399C15.2149 7.69987 15.4399 7.92487 15.4399 8.19987C15.4399 8.41237 15.3056 8.59674 15.1149 8.66862C14.8837 8.75612 14.7087 8.94987 14.6493 9.19049C14.5899 9.43112 14.6524 9.68424 14.8149 9.86862C14.8931 9.95611 14.9399 10.0717 14.9399 10.1999C14.9399 10.4436 14.7649 10.6467 14.5337 10.6905C14.2774 10.7405 14.0618 10.9186 13.9712 11.1655C13.8806 11.4124 13.9212 11.6874 14.0837 11.8936C14.1493 11.978 14.1899 12.0842 14.1899 12.203C14.1899 12.4124 14.0587 12.5967 13.8712 12.6686C13.5118 12.8092 13.3181 13.1967 13.4212 13.5686C13.4337 13.6092 13.4399 13.6561 13.4399 13.703C13.4399 13.978 13.2149 14.203 12.9399 14.203H9.89307C9.49932 14.203 9.11182 14.0874 8.78369 13.8686L6.85557 12.5842C6.51182 12.353 6.04619 12.4467 5.81494 12.7936C5.58369 13.1405 5.67744 13.603 6.02432 13.8342L7.95244 15.1186C8.52744 15.503 9.20244 15.7061 9.89307 15.7061H12.9399C14.0243 15.7061 14.9056 14.8436 14.9399 13.7686C15.3962 13.403 15.6899 12.8405 15.6899 12.2061C15.6899 12.0655 15.6743 11.9311 15.6493 11.7999C16.1306 11.4342 16.4399 10.8561 16.4399 10.2061C16.4399 10.003 16.4087 9.80612 16.3524 9.62174C16.7149 9.25299 16.9399 8.75299 16.9399 8.19987C16.9399 7.09674 16.0462 6.19987 14.9399 6.19987H12.0556C12.2024 5.87487 12.3274 5.53737 12.4243 5.19362L12.6024 4.56862C12.9431 3.37487 12.2524 2.12799 11.0587 1.78737ZM1.93994 6.69987C1.38682 6.69987 0.939941 7.14674 0.939941 7.69987V14.6999C0.939941 15.253 1.38682 15.6999 1.93994 15.6999H3.93994C4.49307 15.6999 4.93994 15.253 4.93994 14.6999V7.69987C4.93994 7.14674 4.49307 6.69987 3.93994 6.69987H1.93994Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="icon dislike-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M10.4188 15.6124C9.22505 15.953 7.97817 15.2624 7.63755 14.0686L7.45942 13.4436C7.3438 13.0374 7.13442 12.6624 6.85005 12.3499L5.24692 10.5874C4.9688 10.2811 4.99067 9.8061 5.29692 9.52798C5.60317 9.24985 6.07817 9.27173 6.3563 9.57798L7.95942 11.3405C8.40005 11.8249 8.72192 12.403 8.90005 13.0311L9.07817 13.6561C9.19067 14.053 9.6063 14.2842 10.0063 14.1717C10.4063 14.0592 10.6344 13.6436 10.5219 13.2436L10.3438 12.6186C10.1657 11.9967 9.88442 11.4092 9.51255 10.8842C9.35005 10.6561 9.3313 10.3561 9.45942 10.1061C9.58755 9.8561 9.8438 9.69985 10.125 9.69985H14.3C14.575 9.69985 14.8 9.47485 14.8 9.19985C14.8 8.98735 14.6657 8.80298 14.475 8.7311C14.2438 8.6436 14.0688 8.44985 14.0094 8.20923C13.95 7.9686 14.0125 7.71548 14.175 7.5311C14.2532 7.4436 14.3 7.32798 14.3 7.19985C14.3 6.9561 14.125 6.75298 13.8938 6.70923C13.6375 6.65923 13.4219 6.4811 13.3313 6.23423C13.2407 5.98735 13.2813 5.71235 13.4438 5.5061C13.5094 5.42173 13.55 5.31548 13.55 5.19673C13.55 4.98735 13.4188 4.80298 13.2313 4.7311C12.8719 4.59048 12.6782 4.20298 12.7813 3.8311C12.7938 3.79048 12.8 3.7436 12.8 3.69673C12.8 3.42173 12.575 3.19673 12.3 3.19673H9.25317C8.85942 3.19673 8.47192 3.31235 8.1438 3.5311L6.21567 4.81548C5.87192 5.04673 5.4063 4.95298 5.17505 4.6061C4.9438 4.25923 5.03755 3.79673 5.38442 3.56548L7.31255 2.2811C7.88755 1.89673 8.56255 1.6936 9.25317 1.6936L12.3 1.69985C13.3844 1.69985 14.2657 2.56235 14.3 3.63735C14.7563 4.00298 15.05 4.56548 15.05 5.19985C15.05 5.34048 15.0344 5.47485 15.0094 5.6061C15.4907 5.97173 15.8 6.54985 15.8 7.19985C15.8 7.40298 15.7688 7.59985 15.7125 7.78423C16.075 8.14673 16.3 8.64673 16.3 9.19985C16.3 10.303 15.4063 11.1999 14.3 11.1999H11.4157C11.5625 11.5249 11.6875 11.8624 11.7844 12.2061L11.9625 12.8311C12.3032 14.0249 11.6125 15.2717 10.4188 15.6124ZM1.30005 12.6999C0.746924 12.6999 0.300049 12.253 0.300049 11.6999V4.69985C0.300049 4.14673 0.746924 3.69985 1.30005 3.69985H3.30005C3.85317 3.69985 4.30005 4.14673 4.30005 4.69985V11.6999C4.30005 12.253 3.85317 12.6999 3.30005 12.6999H1.30005Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-container">
              <div className="user-profile">
                <img
                  src="https://secure.gravatar.com/avatar/5f1d03ae095640f54bb132a9d40375aa?s=60&d=mm&r=g"
                  alt="User Profile"
                  class="profile-img"
                />
              </div>

              <div className="comment-details">
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
                <div className="user-info">
                  <span className="user-name">Jane Doe</span>
                  <span className="comment-date"> - Jan 12, 2025</span>
                </div>
                <div className="user-comment">
                  I was very surprised by how much I liked this top. I’ve been
                  searching for a sleeveless square necked top to go with a
                  specific outfit, and everyone I found was see through, or you
                  couldn’t wear a normal bra with it. This top isn’t see through
                  at all, and I love the ridges that give it a little more
                  character. And a normal bra will work with it, if you’re
                  wondering.
                </div>
              </div>

              <div className="helpful-section">
                <div className="helpful-boxes">
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                </div>

                <div className="helpful-action-container">
                  <div className="helpful-action">
                    <span className="text">Helpful</span>
                    <span className="icon like-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0587 1.78737C9.86494 1.44674 8.61807 2.13737 8.27744 3.33112L8.09932 3.95612C7.98369 4.36237 7.77432 4.73737 7.48994 5.04987L5.88682 6.81237C5.60869 7.11862 5.63057 7.59362 5.93682 7.87174C6.24307 8.14987 6.71807 8.12799 6.99619 7.82174L8.59932 6.05924C9.03994 5.57487 9.36182 4.99674 9.53994 4.36862L9.71807 3.74362C9.83057 3.34674 10.2462 3.11549 10.6462 3.22799C11.0462 3.34049 11.2743 3.75612 11.1618 4.15612L10.9837 4.78112C10.8056 5.40299 10.5243 5.99049 10.1524 6.51549C9.98994 6.74362 9.97119 7.04362 10.0993 7.29362C10.2274 7.54362 10.4837 7.69987 10.7649 7.69987H14.9399C15.2149 7.69987 15.4399 7.92487 15.4399 8.19987C15.4399 8.41237 15.3056 8.59674 15.1149 8.66862C14.8837 8.75612 14.7087 8.94987 14.6493 9.19049C14.5899 9.43112 14.6524 9.68424 14.8149 9.86862C14.8931 9.95611 14.9399 10.0717 14.9399 10.1999C14.9399 10.4436 14.7649 10.6467 14.5337 10.6905C14.2774 10.7405 14.0618 10.9186 13.9712 11.1655C13.8806 11.4124 13.9212 11.6874 14.0837 11.8936C14.1493 11.978 14.1899 12.0842 14.1899 12.203C14.1899 12.4124 14.0587 12.5967 13.8712 12.6686C13.5118 12.8092 13.3181 13.1967 13.4212 13.5686C13.4337 13.6092 13.4399 13.6561 13.4399 13.703C13.4399 13.978 13.2149 14.203 12.9399 14.203H9.89307C9.49932 14.203 9.11182 14.0874 8.78369 13.8686L6.85557 12.5842C6.51182 12.353 6.04619 12.4467 5.81494 12.7936C5.58369 13.1405 5.67744 13.603 6.02432 13.8342L7.95244 15.1186C8.52744 15.503 9.20244 15.7061 9.89307 15.7061H12.9399C14.0243 15.7061 14.9056 14.8436 14.9399 13.7686C15.3962 13.403 15.6899 12.8405 15.6899 12.2061C15.6899 12.0655 15.6743 11.9311 15.6493 11.7999C16.1306 11.4342 16.4399 10.8561 16.4399 10.2061C16.4399 10.003 16.4087 9.80612 16.3524 9.62174C16.7149 9.25299 16.9399 8.75299 16.9399 8.19987C16.9399 7.09674 16.0462 6.19987 14.9399 6.19987H12.0556C12.2024 5.87487 12.3274 5.53737 12.4243 5.19362L12.6024 4.56862C12.9431 3.37487 12.2524 2.12799 11.0587 1.78737ZM1.93994 6.69987C1.38682 6.69987 0.939941 7.14674 0.939941 7.69987V14.6999C0.939941 15.253 1.38682 15.6999 1.93994 15.6999H3.93994C4.49307 15.6999 4.93994 15.253 4.93994 14.6999V7.69987C4.93994 7.14674 4.49307 6.69987 3.93994 6.69987H1.93994Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="icon dislike-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M10.4188 15.6124C9.22505 15.953 7.97817 15.2624 7.63755 14.0686L7.45942 13.4436C7.3438 13.0374 7.13442 12.6624 6.85005 12.3499L5.24692 10.5874C4.9688 10.2811 4.99067 9.8061 5.29692 9.52798C5.60317 9.24985 6.07817 9.27173 6.3563 9.57798L7.95942 11.3405C8.40005 11.8249 8.72192 12.403 8.90005 13.0311L9.07817 13.6561C9.19067 14.053 9.6063 14.2842 10.0063 14.1717C10.4063 14.0592 10.6344 13.6436 10.5219 13.2436L10.3438 12.6186C10.1657 11.9967 9.88442 11.4092 9.51255 10.8842C9.35005 10.6561 9.3313 10.3561 9.45942 10.1061C9.58755 9.8561 9.8438 9.69985 10.125 9.69985H14.3C14.575 9.69985 14.8 9.47485 14.8 9.19985C14.8 8.98735 14.6657 8.80298 14.475 8.7311C14.2438 8.6436 14.0688 8.44985 14.0094 8.20923C13.95 7.9686 14.0125 7.71548 14.175 7.5311C14.2532 7.4436 14.3 7.32798 14.3 7.19985C14.3 6.9561 14.125 6.75298 13.8938 6.70923C13.6375 6.65923 13.4219 6.4811 13.3313 6.23423C13.2407 5.98735 13.2813 5.71235 13.4438 5.5061C13.5094 5.42173 13.55 5.31548 13.55 5.19673C13.55 4.98735 13.4188 4.80298 13.2313 4.7311C12.8719 4.59048 12.6782 4.20298 12.7813 3.8311C12.7938 3.79048 12.8 3.7436 12.8 3.69673C12.8 3.42173 12.575 3.19673 12.3 3.19673H9.25317C8.85942 3.19673 8.47192 3.31235 8.1438 3.5311L6.21567 4.81548C5.87192 5.04673 5.4063 4.95298 5.17505 4.6061C4.9438 4.25923 5.03755 3.79673 5.38442 3.56548L7.31255 2.2811C7.88755 1.89673 8.56255 1.6936 9.25317 1.6936L12.3 1.69985C13.3844 1.69985 14.2657 2.56235 14.3 3.63735C14.7563 4.00298 15.05 4.56548 15.05 5.19985C15.05 5.34048 15.0344 5.47485 15.0094 5.6061C15.4907 5.97173 15.8 6.54985 15.8 7.19985C15.8 7.40298 15.7688 7.59985 15.7125 7.78423C16.075 8.14673 16.3 8.64673 16.3 9.19985C16.3 10.303 15.4063 11.1999 14.3 11.1999H11.4157C11.5625 11.5249 11.6875 11.8624 11.7844 12.2061L11.9625 12.8311C12.3032 14.0249 11.6125 15.2717 10.4188 15.6124ZM1.30005 12.6999C0.746924 12.6999 0.300049 12.253 0.300049 11.6999V4.69985C0.300049 4.14673 0.746924 3.69985 1.30005 3.69985H3.30005C3.85317 3.69985 4.30005 4.14673 4.30005 4.69985V11.6999C4.30005 12.253 3.85317 12.6999 3.30005 12.6999H1.30005Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-container">
              <div className="user-profile">
                <img
                  src="https://secure.gravatar.com/avatar/5f1d03ae095640f54bb132a9d40375aa?s=60&d=mm&r=g"
                  alt="User Profile"
                  class="profile-img"
                />
              </div>

              <div className="comment-details">
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
                <div className="user-info">
                  <span className="user-name">Jane Doe</span>
                  <span className="comment-date"> - Jan 12, 2025</span>
                </div>
                <div className="user-comment">
                  I was very surprised by how much I liked this top. I’ve been
                  searching for a sleeveless square necked top to go with a
                  specific outfit, and everyone I found was see through, or you
                  couldn’t wear a normal bra with it. This top isn’t see through
                  at all, and I love the ridges that give it a little more
                  character. And a normal bra will work with it, if you’re
                  wondering.
                </div>
              </div>

              <div className="helpful-section">
                <div className="helpful-boxes">
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                </div>

                <div className="helpful-action-container">
                  <div className="helpful-action">
                    <span className="text">Helpful</span>
                    <span className="icon like-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0587 1.78737C9.86494 1.44674 8.61807 2.13737 8.27744 3.33112L8.09932 3.95612C7.98369 4.36237 7.77432 4.73737 7.48994 5.04987L5.88682 6.81237C5.60869 7.11862 5.63057 7.59362 5.93682 7.87174C6.24307 8.14987 6.71807 8.12799 6.99619 7.82174L8.59932 6.05924C9.03994 5.57487 9.36182 4.99674 9.53994 4.36862L9.71807 3.74362C9.83057 3.34674 10.2462 3.11549 10.6462 3.22799C11.0462 3.34049 11.2743 3.75612 11.1618 4.15612L10.9837 4.78112C10.8056 5.40299 10.5243 5.99049 10.1524 6.51549C9.98994 6.74362 9.97119 7.04362 10.0993 7.29362C10.2274 7.54362 10.4837 7.69987 10.7649 7.69987H14.9399C15.2149 7.69987 15.4399 7.92487 15.4399 8.19987C15.4399 8.41237 15.3056 8.59674 15.1149 8.66862C14.8837 8.75612 14.7087 8.94987 14.6493 9.19049C14.5899 9.43112 14.6524 9.68424 14.8149 9.86862C14.8931 9.95611 14.9399 10.0717 14.9399 10.1999C14.9399 10.4436 14.7649 10.6467 14.5337 10.6905C14.2774 10.7405 14.0618 10.9186 13.9712 11.1655C13.8806 11.4124 13.9212 11.6874 14.0837 11.8936C14.1493 11.978 14.1899 12.0842 14.1899 12.203C14.1899 12.4124 14.0587 12.5967 13.8712 12.6686C13.5118 12.8092 13.3181 13.1967 13.4212 13.5686C13.4337 13.6092 13.4399 13.6561 13.4399 13.703C13.4399 13.978 13.2149 14.203 12.9399 14.203H9.89307C9.49932 14.203 9.11182 14.0874 8.78369 13.8686L6.85557 12.5842C6.51182 12.353 6.04619 12.4467 5.81494 12.7936C5.58369 13.1405 5.67744 13.603 6.02432 13.8342L7.95244 15.1186C8.52744 15.503 9.20244 15.7061 9.89307 15.7061H12.9399C14.0243 15.7061 14.9056 14.8436 14.9399 13.7686C15.3962 13.403 15.6899 12.8405 15.6899 12.2061C15.6899 12.0655 15.6743 11.9311 15.6493 11.7999C16.1306 11.4342 16.4399 10.8561 16.4399 10.2061C16.4399 10.003 16.4087 9.80612 16.3524 9.62174C16.7149 9.25299 16.9399 8.75299 16.9399 8.19987C16.9399 7.09674 16.0462 6.19987 14.9399 6.19987H12.0556C12.2024 5.87487 12.3274 5.53737 12.4243 5.19362L12.6024 4.56862C12.9431 3.37487 12.2524 2.12799 11.0587 1.78737ZM1.93994 6.69987C1.38682 6.69987 0.939941 7.14674 0.939941 7.69987V14.6999C0.939941 15.253 1.38682 15.6999 1.93994 15.6999H3.93994C4.49307 15.6999 4.93994 15.253 4.93994 14.6999V7.69987C4.93994 7.14674 4.49307 6.69987 3.93994 6.69987H1.93994Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="icon dislike-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M10.4188 15.6124C9.22505 15.953 7.97817 15.2624 7.63755 14.0686L7.45942 13.4436C7.3438 13.0374 7.13442 12.6624 6.85005 12.3499L5.24692 10.5874C4.9688 10.2811 4.99067 9.8061 5.29692 9.52798C5.60317 9.24985 6.07817 9.27173 6.3563 9.57798L7.95942 11.3405C8.40005 11.8249 8.72192 12.403 8.90005 13.0311L9.07817 13.6561C9.19067 14.053 9.6063 14.2842 10.0063 14.1717C10.4063 14.0592 10.6344 13.6436 10.5219 13.2436L10.3438 12.6186C10.1657 11.9967 9.88442 11.4092 9.51255 10.8842C9.35005 10.6561 9.3313 10.3561 9.45942 10.1061C9.58755 9.8561 9.8438 9.69985 10.125 9.69985H14.3C14.575 9.69985 14.8 9.47485 14.8 9.19985C14.8 8.98735 14.6657 8.80298 14.475 8.7311C14.2438 8.6436 14.0688 8.44985 14.0094 8.20923C13.95 7.9686 14.0125 7.71548 14.175 7.5311C14.2532 7.4436 14.3 7.32798 14.3 7.19985C14.3 6.9561 14.125 6.75298 13.8938 6.70923C13.6375 6.65923 13.4219 6.4811 13.3313 6.23423C13.2407 5.98735 13.2813 5.71235 13.4438 5.5061C13.5094 5.42173 13.55 5.31548 13.55 5.19673C13.55 4.98735 13.4188 4.80298 13.2313 4.7311C12.8719 4.59048 12.6782 4.20298 12.7813 3.8311C12.7938 3.79048 12.8 3.7436 12.8 3.69673C12.8 3.42173 12.575 3.19673 12.3 3.19673H9.25317C8.85942 3.19673 8.47192 3.31235 8.1438 3.5311L6.21567 4.81548C5.87192 5.04673 5.4063 4.95298 5.17505 4.6061C4.9438 4.25923 5.03755 3.79673 5.38442 3.56548L7.31255 2.2811C7.88755 1.89673 8.56255 1.6936 9.25317 1.6936L12.3 1.69985C13.3844 1.69985 14.2657 2.56235 14.3 3.63735C14.7563 4.00298 15.05 4.56548 15.05 5.19985C15.05 5.34048 15.0344 5.47485 15.0094 5.6061C15.4907 5.97173 15.8 6.54985 15.8 7.19985C15.8 7.40298 15.7688 7.59985 15.7125 7.78423C16.075 8.14673 16.3 8.64673 16.3 9.19985C16.3 10.303 15.4063 11.1999 14.3 11.1999H11.4157C11.5625 11.5249 11.6875 11.8624 11.7844 12.2061L11.9625 12.8311C12.3032 14.0249 11.6125 15.2717 10.4188 15.6124ZM1.30005 12.6999C0.746924 12.6999 0.300049 12.253 0.300049 11.6999V4.69985C0.300049 4.14673 0.746924 3.69985 1.30005 3.69985H3.30005C3.85317 3.69985 4.30005 4.14673 4.30005 4.69985V11.6999C4.30005 12.253 3.85317 12.6999 3.30005 12.6999H1.30005Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-container">
              <div className="user-profile">
                <img
                  src="https://secure.gravatar.com/avatar/5f1d03ae095640f54bb132a9d40375aa?s=60&d=mm&r=g"
                  alt="User Profile"
                  class="profile-img"
                />
              </div>

              <div className="comment-details">
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
                <div className="user-info">
                  <span className="user-name">Jane Doe</span>
                  <span className="comment-date"> - Jan 12, 2025</span>
                </div>
                <div className="user-comment">
                  I was very surprised by how much I liked this top. I’ve been
                  searching for a sleeveless square necked top to go with a
                  specific outfit, and everyone I found was see through, or you
                  couldn’t wear a normal bra with it. This top isn’t see through
                  at all, and I love the ridges that give it a little more
                  character. And a normal bra will work with it, if you’re
                  wondering.
                </div>
              </div>

              <div className="helpful-section">
                <div className="helpful-boxes">
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                  <div className="helpful-box">
                    <img
                      src="https://elessi.b-cdn.net/wp-content/uploads/2018/02/review-2-2.jpg"
                      alt="Product"
                      class="helpful-img"
                    />
                  </div>
                </div>

                <div className="helpful-action-container">
                  <div className="helpful-action">
                    <span className="text">Helpful</span>
                    <span className="icon like-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0587 1.78737C9.86494 1.44674 8.61807 2.13737 8.27744 3.33112L8.09932 3.95612C7.98369 4.36237 7.77432 4.73737 7.48994 5.04987L5.88682 6.81237C5.60869 7.11862 5.63057 7.59362 5.93682 7.87174C6.24307 8.14987 6.71807 8.12799 6.99619 7.82174L8.59932 6.05924C9.03994 5.57487 9.36182 4.99674 9.53994 4.36862L9.71807 3.74362C9.83057 3.34674 10.2462 3.11549 10.6462 3.22799C11.0462 3.34049 11.2743 3.75612 11.1618 4.15612L10.9837 4.78112C10.8056 5.40299 10.5243 5.99049 10.1524 6.51549C9.98994 6.74362 9.97119 7.04362 10.0993 7.29362C10.2274 7.54362 10.4837 7.69987 10.7649 7.69987H14.9399C15.2149 7.69987 15.4399 7.92487 15.4399 8.19987C15.4399 8.41237 15.3056 8.59674 15.1149 8.66862C14.8837 8.75612 14.7087 8.94987 14.6493 9.19049C14.5899 9.43112 14.6524 9.68424 14.8149 9.86862C14.8931 9.95611 14.9399 10.0717 14.9399 10.1999C14.9399 10.4436 14.7649 10.6467 14.5337 10.6905C14.2774 10.7405 14.0618 10.9186 13.9712 11.1655C13.8806 11.4124 13.9212 11.6874 14.0837 11.8936C14.1493 11.978 14.1899 12.0842 14.1899 12.203C14.1899 12.4124 14.0587 12.5967 13.8712 12.6686C13.5118 12.8092 13.3181 13.1967 13.4212 13.5686C13.4337 13.6092 13.4399 13.6561 13.4399 13.703C13.4399 13.978 13.2149 14.203 12.9399 14.203H9.89307C9.49932 14.203 9.11182 14.0874 8.78369 13.8686L6.85557 12.5842C6.51182 12.353 6.04619 12.4467 5.81494 12.7936C5.58369 13.1405 5.67744 13.603 6.02432 13.8342L7.95244 15.1186C8.52744 15.503 9.20244 15.7061 9.89307 15.7061H12.9399C14.0243 15.7061 14.9056 14.8436 14.9399 13.7686C15.3962 13.403 15.6899 12.8405 15.6899 12.2061C15.6899 12.0655 15.6743 11.9311 15.6493 11.7999C16.1306 11.4342 16.4399 10.8561 16.4399 10.2061C16.4399 10.003 16.4087 9.80612 16.3524 9.62174C16.7149 9.25299 16.9399 8.75299 16.9399 8.19987C16.9399 7.09674 16.0462 6.19987 14.9399 6.19987H12.0556C12.2024 5.87487 12.3274 5.53737 12.4243 5.19362L12.6024 4.56862C12.9431 3.37487 12.2524 2.12799 11.0587 1.78737ZM1.93994 6.69987C1.38682 6.69987 0.939941 7.14674 0.939941 7.69987V14.6999C0.939941 15.253 1.38682 15.6999 1.93994 15.6999H3.93994C4.49307 15.6999 4.93994 15.253 4.93994 14.6999V7.69987C4.93994 7.14674 4.49307 6.69987 3.93994 6.69987H1.93994Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="icon dislike-icon">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M10.4188 15.6124C9.22505 15.953 7.97817 15.2624 7.63755 14.0686L7.45942 13.4436C7.3438 13.0374 7.13442 12.6624 6.85005 12.3499L5.24692 10.5874C4.9688 10.2811 4.99067 9.8061 5.29692 9.52798C5.60317 9.24985 6.07817 9.27173 6.3563 9.57798L7.95942 11.3405C8.40005 11.8249 8.72192 12.403 8.90005 13.0311L9.07817 13.6561C9.19067 14.053 9.6063 14.2842 10.0063 14.1717C10.4063 14.0592 10.6344 13.6436 10.5219 13.2436L10.3438 12.6186C10.1657 11.9967 9.88442 11.4092 9.51255 10.8842C9.35005 10.6561 9.3313 10.3561 9.45942 10.1061C9.58755 9.8561 9.8438 9.69985 10.125 9.69985H14.3C14.575 9.69985 14.8 9.47485 14.8 9.19985C14.8 8.98735 14.6657 8.80298 14.475 8.7311C14.2438 8.6436 14.0688 8.44985 14.0094 8.20923C13.95 7.9686 14.0125 7.71548 14.175 7.5311C14.2532 7.4436 14.3 7.32798 14.3 7.19985C14.3 6.9561 14.125 6.75298 13.8938 6.70923C13.6375 6.65923 13.4219 6.4811 13.3313 6.23423C13.2407 5.98735 13.2813 5.71235 13.4438 5.5061C13.5094 5.42173 13.55 5.31548 13.55 5.19673C13.55 4.98735 13.4188 4.80298 13.2313 4.7311C12.8719 4.59048 12.6782 4.20298 12.7813 3.8311C12.7938 3.79048 12.8 3.7436 12.8 3.69673C12.8 3.42173 12.575 3.19673 12.3 3.19673H9.25317C8.85942 3.19673 8.47192 3.31235 8.1438 3.5311L6.21567 4.81548C5.87192 5.04673 5.4063 4.95298 5.17505 4.6061C4.9438 4.25923 5.03755 3.79673 5.38442 3.56548L7.31255 2.2811C7.88755 1.89673 8.56255 1.6936 9.25317 1.6936L12.3 1.69985C13.3844 1.69985 14.2657 2.56235 14.3 3.63735C14.7563 4.00298 15.05 4.56548 15.05 5.19985C15.05 5.34048 15.0344 5.47485 15.0094 5.6061C15.4907 5.97173 15.8 6.54985 15.8 7.19985C15.8 7.40298 15.7688 7.59985 15.7125 7.78423C16.075 8.14673 16.3 8.64673 16.3 9.19985C16.3 10.303 15.4063 11.1999 14.3 11.1999H11.4157C11.5625 11.5249 11.6875 11.8624 11.7844 12.2061L11.9625 12.8311C12.3032 14.0249 11.6125 15.2717 10.4188 15.6124ZM1.30005 12.6999C0.746924 12.6999 0.300049 12.253 0.300049 11.6999V4.69985C0.300049 4.14673 0.746924 3.69985 1.30005 3.69985H3.30005C3.85317 3.69985 4.30005 4.14673 4.30005 4.69985V11.6999C4.30005 12.253 3.85317 12.6999 3.30005 12.6999H1.30005Z"
                            fill="#333333"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    customTab: (
      <div className="customTab-1">
        <div className="custom-Tab-2">
          <div>
            <h3>Used for all products of this categories</h3>
            <p>
              If issues experienced with the frame include a manufacturer's
              defect, or an issue resulting from an inherent flaw in the
              product, we provides a 365 days warranty from the time of
              purchase. If you feel your product meets these requirements,
              please email elessi@domain.com explaining the nature of your
              warranty claim and all necessary details.
            </p>
          </div>

          <div className="custom-tab-box">
            <div className="custom-tab-img">
              {" "}
              <img
                src="https://elessi.b-cdn.net/wp-content/uploads/2022/04/support-service2-595x281.jpg"
                alt=""
              />{" "}
            </div>
            <div className="custome-tab-desc">
              {" "}
              <h3>Repair and Service</h3>
              <p>
                We believe in crafting pieces where sustainability and style go
                hand in hand. Made from materials like recycled cashmere and
                sust
              </p>
              <p className="read-more">Read more</p>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="Page2-container">
      <div className="tabs-container">
        <div className="tabs-links">
          <button
            className={`tab-link ${
              activeTab === "boughtTogether" ? "active" : ""
            }`}
            onClick={() => setActiveTab("boughtTogether")}
          >
            Bought Together
          </button>
          <button
            className={`tab-link ${
              activeTab === "description" ? "active" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`tab-link ${activeTab === "review" ? "active" : ""}`}
            onClick={() => setActiveTab("review")}
          >
            Review (8)
          </button>
          <button
            className={`tab-link ${activeTab === "customTab" ? "active" : ""}`}
            onClick={() => setActiveTab("customTab")}
          >
            Custom Tab
          </button>
        </div>

        <div className="tabs-content">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default Tabs;
