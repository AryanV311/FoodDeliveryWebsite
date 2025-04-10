// import React from 'react'
import { useState } from "react";
import { ExploreMenu } from "../../components/ExploreMenu";
import { Header } from "../../components/Header";
import "./Home.css";
import {FoodDisplay} from "../../components/foodDisplay/FoodDisplay"
import { AppDownload } from "../../components/AppDowanload/AppDownload";

export const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};
