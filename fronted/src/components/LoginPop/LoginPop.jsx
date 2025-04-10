// import React from 'react'

import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPop.css";
import { storeContext } from "../../context/storeContext";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export const LoginPop = ({ setShowLogin }) => {
  const { url, setToken } = useContext(storeContext);

  const [currstate, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      let newUrl = url;
      if (currstate === "Login") {
        newUrl = `${newUrl}/api/user/login`;
      } else {
        newUrl = `${newUrl}/api/user/register`;
      }

      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-input">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="your name"
              required
            />
          )}
          <input
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            name="email"
            placeholder="your email"
            required
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">
          {currstate === "Sign Up" ? "Create an account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currstate === "Login" ? (
          <p>
            Create an account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an accoun?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
