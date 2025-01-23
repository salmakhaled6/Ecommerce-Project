import React from "react";
import "./LatestNews.css";

function LatestNews() {
  return (
    <div className="Latest-news">
      <h2>Latest News</h2>
      <p className="p1">Featured pharecha est nec ligula efficitur</p>
        <div className="card-wrapper">
          <ul className="news-card-list">
            <li className="news-card-item">
              <a href="" className="news-card-link">
                <img
                  src="https://elessi.b-cdn.net/wp-content/uploads/2019/12/tech-acc-blog-5-768x480.jpg"
                  alt=""
                  className="news-card-img"
                />
                <p className="badge">Tech Accessorie</p>
                <h2 className="card-title-1">The Best Accessories</h2>
              </a>
            </li>
            <li className="news-card-item">
              <a href="" className="news-card-link">
                <img
                  src="https://elessi.b-cdn.net/wp-content/uploads/2019/12/tech-acc-blog-4-380x380.jpg"
                  alt=""
                  className="news-card-img"
                />
                <p className="badge">Tech Accessorie</p>
                <h2 className="card-title-1">The Best Accessories</h2>
              </a>
            </li>
            <li className="news-card-item">
              <a href="" className="news-card-link">
                <img
                  src="https://elessi.b-cdn.net/wp-content/uploads/2019/12/tech-acc-blog-3-380x380.jpg"
                  alt=""
                  className="news-card-img"
                />
                <p className="badge">Tech Accessorie</p>
                <h2 className="card-title-1">The Best Accessories</h2>
              </a>
            </li>
            <li className="news-card-item">
              <a href="" className="news-card-link">
                <img
                  src="https://elessi.b-cdn.net/wp-content/uploads/2019/12/tech-acc-blog-2-380x380.jpg"
                  alt=""
                  className="news-card-img"
                />
                <p className="badge">Tech Accessorie</p>
                <h2 className="card-title-1">The Best Accessories</h2>
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
  );
}

export default LatestNews;
