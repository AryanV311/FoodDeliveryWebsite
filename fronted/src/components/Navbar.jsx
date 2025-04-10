// import React from 'react'
import "./Navbar.css"
import { assets } from "../assets/assets"
import { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { storeContext } from "../context/storeContext"

// eslint-disable-next-line react/prop-types
export const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");

    const navigate = useNavigate();
    
    const { getTotalCartAmount, token, setToken } = useContext(storeContext)
    
    const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }

  return (
    <div className="navbar">
       <Link to="/"> <img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <li onClick={ () => setMenu("menu")} className={ menu === "menu"? "active":""}>menu</li>
            <li onClick={ () => setMenu("home")} className={ menu === "home"? "active":""}>home</li>
            <li onClick={ () => setMenu("mobile-app")} className={ menu === "mobile-app"? "active":""}>mobile-app</li>
            <li onClick={ () => setMenu("contact-us")} className={ menu === "contact-us"? "active":""}>contact us</li>
        </ul>

        <div className="navbar-right">
            <img src={ assets.search_icon} alt=""/>
            <div className="navbar-search-icon">
               <Link to="/cart"><img src={ assets.basket_icon } alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={() => setShowLogin(true)}>sign in</button>
            : <div className="navbar-profile">
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">My Orders</Link>
                </li>
                <hr />
                  <li><img src={assets.bag_icon} alt="" /><p>Order</p></li>
                  <hr />
                  <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
            </div>
            }
            
        </div>
    </div>
  )
}
