import React from "react";
import "./Offers.css";

function Offers() {
  return (
    <div className="product-list">
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/MVFU2_AV1_SILVER-450x450.jpeg"
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
        <div className="card-bottom">
          <h3>Product 1</h3>
          <p>This is a great product.</p>
        </div>
      </div>

      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/HMTQ2_AV4-450x450.jpeg"
            alt="Product 2"
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
        <div className="card-bottom">
          <h3>Product 2</h3>
          <p>Another amazing product.</p>
        </div>
      </div>

      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/MUJP2_AV1_GOLD_GEO_US-450x450.jpeg"
            alt="Product 3"
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
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>Don't miss this one.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>

            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/HLTZ2_AV1-450x450.jpeg"
            alt="Product 3"
          />
          <div className="hover-icons">
            {/* <i className="fas fa-eye"><span class="material-symbols-outlined">
visibility
</span></i> */}
            {/* <i className="fas fa-shopping-cart"><span class="material-symbols-outlined">
local_mall
</span></i> */}
          </div>
        </div>
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>Dfjenrj.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/HMBE2_AV1-450x450.jpeg"
            alt="Product 3"
          />

          <div className="hover-icons">
            {/* 
          <i className="fas fa-eye"><span class="material-symbols-outlined">
visibility
</span></i>
          <i className="fas fa-shopping-cart">
          <span class="material-symbols-outlined">
local_mall
</span>
          </i> */}
          </div>
        </div>
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>hellloo.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/HLY92_AV2-450x450.jpeg"
            alt="Product 3"
          />
          <div className="hover-icons">
            {/* <i className="fas fa-eye"><span class="material-symbols-outlined">
visibility
</span></i> */}
            {/* <i className="fas fa-shopping-cart">
          <span class="material-symbols-outlined">
local_mall
</span>
          </i> */}
          </div>
        </div>
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>Dfjnjnj.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/HMBE2_AV1-450x450.jpeg"
            alt="Product 3"
          />

          <div className="hover-icons">
            {/* 
          <i className="fas fa-eye"><span class="material-symbols-outlined">
visibility
</span></i>
          <i className="fas fa-shopping-cart">
          <span class="material-symbols-outlined">
local_mall
</span>
          </i> */}
          </div>
        </div>
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>hellloo.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/HMBE2_AV1-450x450.jpeg"
            alt="Product 3"
          />

          <div className="hover-icons">
            {/* 
          <i className="fas fa-eye"><span class="material-symbols-outlined">
visibility
</span></i>
          <i className="fas fa-shopping-cart">
          <span class="material-symbols-outlined">
local_mall
</span>
          </i> */}
          </div>
        </div>
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>hellloo.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/MUJP2_AV1_GOLD_GEO_US-450x450.jpeg"
            alt="Product 3"
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
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>Don't miss this one.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/MUJP2_AV1_GOLD_GEO_US-450x450.jpeg"
            alt="Product 3"
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
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>Don't miss this one.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/MUJP2_AV1_GOLD_GEO_US-450x450.jpeg"
            alt="Product 3"
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
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>Don't miss this one.</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-top">
          <div className="top-left-container">
            <span className="top-left-text">sale</span>
            <span className="top-left-text-2">Limited</span>
          </div>
          <span className="top-right-icon">
            <i className="fas fa-heart"></i>
          </span>
          <svg
            width="21"
            height="37"
            viewBox="0 0 21 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1788 11.6769C16.3794 11.6769 18.1637 13.4612 18.1637 15.6619C18.1637 16.7925 17.6925 17.8112 16.9362 18.5369L10.5006 25.005L3.94812 18.42C3.26062 17.7037 2.83687 16.7331 2.83687 15.6619C2.83687 13.4606 4.62125 11.6769 6.82187 11.6769C8.47937 11.6769 9.9 12.6894 10.5006 14.1294C11.1012 12.6894 12.5212 11.6769 14.1788 11.6769ZM14.1788 11.0106C12.7131 11.0106 11.3669 11.6912 10.5 12.8131C9.63375 11.6912 8.2875 11.0106 6.82125 11.0106C4.25625 11.0106 2.17 13.0975 2.17 15.6619C2.17 16.8669 2.63062 18.0106 3.46687 18.8819L10.5 25.95L17.4081 19.0075C18.3206 18.1312 18.83 16.94 18.83 15.6625C18.83 13.0975 16.7431 11.0112 14.1788 11.0112V11.0106Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="card-image">
          <img
            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2019/12/MUJP2_AV1_GOLD_GEO_US-450x450.jpeg"
            alt="Product 3"
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
        <div className="card-bottom">
          <h3>Product 3</h3>
          <p>Don't miss this one.</p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
