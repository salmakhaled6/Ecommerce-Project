import React from 'react'
import './Shopping.css'

function ShoppingList() {
  return (
    <div className="card">
      <div className="image-container">
        <img
          className="default-img"
          src="https://elessi.b-cdn.net/wp-content/uploads/2020/05/5559315400_2_1_1-450x575.jpg"
          alt="Default"
        />
        <img
          className="hover-img"
          src="https://elessi.b-cdn.net/wp-content/uploads/2020/05/9471507600_2_5_1-450x575.jpg"
          alt="Hover"
        />
      </div>
      <h3>Stylish Chair</h3>
      <p><b>Price:</b> $45.00</p>
    </div>
  )
}

export default ShoppingList
