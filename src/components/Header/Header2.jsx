import React from 'react'
import './Header2.css'


function Header2() {

  return (
    <div className='Container-2'>
    <div className="website-logo">
<img src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2017/11/logo.png" alt="" />

    </div>
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

    <div className="logos">
  <div>
    <a href="https://example1.com" target="_blank" rel="noopener noreferrer" className='logos1'>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.10406 4.10406V24.8959H24.8959V4.10406H4.10406ZM24.0298 24.0298H4.971V4.971H24.0298V24.0298Z" fill="#333333"/>
        <path d="M8.86773 12.3339C8.86773 15.4441 11.3897 17.9653 14.4992 17.9653C17.6086 17.9653 20.1298 15.4449 20.1298 12.3339V9.30161H20.9967V8.43549H18.3975V9.30161H19.2629V12.3339C19.2629 14.9615 17.1252 17.0984 14.4984 17.0984C11.8707 17.0984 9.73304 14.9607 9.73304 12.3339V9.30161H10.6V8.43549H8.00079V9.30161H8.86611V12.3339H8.86773Z" fill="#333333"/>
      </svg>
    </a>
  </div>
  <div>
    <a href="https://example2.com" target="_blank" rel="noopener noreferrer" className='logos1'>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6503 4.97563C22.7311 4.97563 25.2293 7.47375 25.2293 10.5546C25.2293 12.1375 24.5695 13.5638 23.5108 14.5796L14.5009 23.635L5.32739 14.416C4.36489 13.4133 3.77164 12.0544 3.77164 10.5546C3.77164 7.47288 6.26976 4.97563 9.35064 4.97563C11.6711 4.97563 13.66 6.39313 14.5009 8.40913C15.3418 6.39313 17.3298 4.97563 19.6503 4.97563ZM19.6503 4.04288C17.5984 4.04288 15.7136 4.99575 14.5 6.56638C13.2873 4.99575 11.4025 4.04288 9.34976 4.04288C5.75876 4.04288 2.83801 6.9645 2.83801 10.5546C2.83801 12.2416 3.48289 13.8429 4.65364 15.0626L14.5 24.958L24.1714 15.2385C25.4489 14.0118 26.162 12.344 26.162 10.5555C26.162 6.9645 23.2404 4.04375 19.6503 4.04375V4.04288Z" fill="#333333"/>
      </svg>
    </a>
  </div>
  <div>
    <a href="https://example3.com" target="_blank" rel="noopener noreferrer" className='logos1'>
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5938 4.60157C15.5938 4.16407 15.9219 3.45313 15.4844 3.34375H14.0625C7.0625 3.72657 1.48438 11.1641 4.54688 18.875C4.82031 19.5859 5.25781 20.1328 5.42188 20.8438C4.4375 20.8438 3.17969 19.5859 2.46875 20.5703C2.74219 21.3906 3.83594 21.5547 4.71094 21.8281C5.53125 22.1016 6.67969 22.2109 7.33594 22.6484C7.22656 22.1016 8.59375 17.4531 7.66406 17.1797C6.51562 16.9063 6.95312 19.3125 6.67969 20.2969C6.24219 20.5703 6.24219 19.8594 6.07812 19.5859C2.19531 12.6953 7.66406 3.34375 15.5938 4.60157ZM18 3.89063C17.5625 3.89063 17.4531 3.61719 16.9062 3.72657C16.9062 4.05469 16.7422 4.4375 16.7422 4.71094C17.0156 4.875 17.4531 4.875 17.7266 4.98438C17.8359 4.60157 18 4.16407 18 3.89063ZM20.0781 4.875C19.8047 4.71094 19.5312 4.4375 19.0938 4.32813C18.9844 4.71094 18.8203 4.98438 18.7109 5.3125C18.9844 5.42188 19.2578 5.69532 19.6953 5.69532C19.8047 5.42188 20.0781 5.3125 20.0781 4.875ZM21.9375 6.57032C21.9375 8.375 20.9531 10.4531 21.6641 11.9844C22.9219 11.875 22.3203 9.90625 22.5938 8.8125C27.5156 15.2109 22.2109 25.9844 13.6797 24.6172C13.6797 25.0547 13.5156 25.1641 13.5156 25.7109C20.6797 25.9844 26.2578 21.1172 25.5469 13.4063C25.4375 11.4375 24.4531 9.79688 23.9062 8.375C24.5625 8.375 26.6953 9.79688 26.8047 8.48438C26.9688 7.55469 22.3203 6.95313 21.9375 6.57032ZM9.19531 24.3438C9.46875 24.4531 9.90625 24.6172 10.1797 24.8906C10.1797 24.4531 10.4531 24.3438 10.5625 23.9063C10.2891 23.7969 10.0156 23.4688 9.57812 23.4688C9.57812 23.9063 9.19531 23.9063 9.19531 24.3438ZM11.2734 25.3281C11.7109 25.3281 11.8203 25.6016 12.4219 25.6016C12.4219 25.3281 12.5312 24.8906 12.5312 24.6172C12.2578 24.4531 11.8203 24.4531 11.5469 24.3438C11.5469 24.6172 11.2734 24.8906 11.2734 25.3281Z" fill="#333333"/>
</svg>

    </a>
  </div>
</div>

</div>
  )
}

export default Header2
