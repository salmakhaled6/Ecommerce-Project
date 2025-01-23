import React from 'react'

function SearchBar() {
  return (
    <div className="Search-input">
    <input type="text" placeholder="I am shopping for ..." />
    <button>
      Search
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.2188 22.5625L18.3438 17.6562C21.8438 13.75 21.5625 7.74999 17.6563 4.21874C13.75 0.687492 7.75002 0.999992 4.21877 4.90624C0.687522 8.81249 1.00002 14.8125 4.90627 18.3437C8.53127 21.625 14.0625 21.625 17.6875 18.3437L22.5938 23.25L23.2188 22.5625ZM11.2813 19.8437C6.56252 19.8437 2.71877 16 2.71877 11.2812C2.71877 6.53124 6.56252 2.71874 11.2813 2.71874C16 2.71874 19.8438 6.56249 19.8438 11.2812C19.8438 16 16 19.8437 11.2813 19.8437Z" fill="white" />
        <path d="M11.2812 4V4.9375C14.7812 4.9375 17.625 7.78125 17.625 11.2812H18.5625C18.5625 7.25 15.3125 4 11.2812 4Z" fill="white" />
      </svg>
    </button>
  </div>
  )
}

export default SearchBar
