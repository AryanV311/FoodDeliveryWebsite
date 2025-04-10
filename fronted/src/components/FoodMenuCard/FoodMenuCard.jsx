// import React from 'react'
import "./FoodMenuCard.css"
import { category_list } from "../../assets/MOCK_DATA.js"

export const FoodMenuCard = () => {
  return (
    <div className="food-conatiner">
    <div className="food-category" id="food-category">
      <h1>Popular Brands</h1>
      <p className="food-category-text">
        Order food from our curated list of handpicked brands.
      </p>
      <div className="food-category-list">
        {
            category_list.map((item, index) => {
                return (
                    <div key={index} className="food-category-list-item">
                    <img className="category-img" src={item.image} alt="" />
        </div>
                )
            })
        }
        
      </div>
    </div>
    </div>
  );
};
