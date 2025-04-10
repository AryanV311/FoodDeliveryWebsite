/* eslint-disable react/prop-types */

// import React from 'react'

import { useContext } from "react";
import { storeContext } from "../../context/storeContext";
import { FoodItem } from "../FoodItem/FoodItem";
import "./foodDisplay.css";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} {...item} />;
          }
          console.log(item._id);
        })}
      </div>
    </div>
  );
};
