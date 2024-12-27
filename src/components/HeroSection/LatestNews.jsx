import React from "react";
import "./LatestNews.css";

function LatestNews() {
  return (
    <div className="Latest-news">
      <h2>Latest News</h2>
      <p className="p1">Featured pharecha est nec ligula efficitur</p>
      <div className="Carousel">
        <div className="card-wrapper">
          <ul className="card-list">
            <li className="card-item">
              <a href="" className="card-link">
                <img
                  src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/tech-acc-blog-5.jpg"
                  alt=""
                  className="card-img"
                />
                <p className="badge">Tech Accessorie</p>
                <h2 className="card-title-1">The Best Accessories</h2>
              </a>
            </li>
            <li className="card-item">
              <a href="" className="card-link">
                <img
                  src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/tech-acc-blog-4.jpg"
                  alt=""
                  className="card-img"
                />
                <p className="badge">Tech Accessorie</p>
                <h2 className="card-title-1">Bluetooth Headphones: Jaybird</h2>
              </a>
            </li>
            <li className="card-item">
              <a href="" className="card-link">
                <img
                  src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/tech-acc-blog-3.jpg"
                  alt=""
                  className="card-img"
                />
                <p className="badge">Tech Accessorie</p>
                <h2 className="card-title-1">Professional Speakers</h2>
              </a>
            </li>
            <li className="card-item">
              <a href="" className="card-link">
                <img
                  src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/tech-acc-blog-2.jpg"
                  alt=""
                  className="card-img"
                />
                <p className="badge">Tech Accessorie</p>
                <h2 className="card-title-1">The way to charge an iPhone</h2>
              </a>
            </li>
          </ul>
        </div>
        {/* <button className="arrow right-arrow"> */}
        {/* <span class="material-symbols-outlined">
arrow_circle_right
</span> */}
        {/* </button> */}
      </div>
    </div>
  );
}

export default LatestNews;
