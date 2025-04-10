// import React from 'react'
import { useContext } from "react"
import "./Placeoreder.css"
import { storeContext } from "../../context/storeContext"
export const Placeorder = () => {

  const { getTotalCartAmount } = useContext(storeContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="Last name"/>
        </div>
        <input type="text" placeholder="Email address"/>
        <input type="text" placeholder="Street"/>
        <div className="multi-fields">
          <input type="text" placeholder="city"/>
          <input type="text" placeholder="State"/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code"/>
          <input type="text" placeholder="Country"/>
        </div>
        <input type="text" placeholder="phone"/>
      </div>
      <div className="place-right-order">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deliver fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PYMENT</button>
        </div>
      </div>
    </form>
  )
}
