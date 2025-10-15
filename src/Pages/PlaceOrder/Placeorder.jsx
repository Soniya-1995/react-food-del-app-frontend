import React, { useState } from "react";
import { useCart, useDispatchCart } from "../../Component/ContextReducer/ContextReducer";
import "./placeorder.css";
import Navbar from "../../Component/Navbar/Navbar";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Placeorder = () => {
  const cartData = useCart();
  const dispatch = useDispatchCart();

  const savedCart = JSON.parse(localStorage.getItem("lastCartData")) || [];
  const currentCart = cartData.length > 0 ? cartData : savedCart;

  let totalPrice = currentCart.reduce(
  (total, food) => total + Number(food.price) * Number(food.qty || 1),
  0
);

  const [deliveryDetails, setDeliveryDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: ""
  });

  const handleChange = (e) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    let userEmail = localStorage.getItem("userEmail");

    let response = await fetch(`${BASE_URL}/api/orderData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order_data: currentCart,
    email: localStorage.getItem("userEmail"),
    order_date: new Date().toDateString(),
    deliveryDetails: {
     firstName: deliveryDetails.firstName,
  lastName: deliveryDetails.lastName,
  email: deliveryDetails.email,
  street: deliveryDetails.street,
  city: deliveryDetails.city,
  state: deliveryDetails.state,
  zip: deliveryDetails.zip,
  country: deliveryDetails.country,
  phone: deliveryDetails.phone
    },
    totalAmount: totalPrice + 2,
    paymentMethod: "Cash on Delivery"
      })
    });

    if (response.status === 200) {
      alert("Order placed successfully!");
      dispatch({ type: "DROP" });
      localStorage.removeItem("lastTotal");
      localStorage.removeItem("lastCartData");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <Navbar />
      <form className="place-order" onSubmit={handlePlaceOrder}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" name="firstName" placeholder="First name" value={deliveryDetails.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last name" value={deliveryDetails.lastName} onChange={handleChange} />
          </div>
          <input type="text" name="email" placeholder="Email Address" value={deliveryDetails.email} onChange={handleChange} />
          <input type="text" name="street" placeholder="Street" value={deliveryDetails.street} onChange={handleChange} />
          <div className="multi-fields">
            <input type="text" name="city" placeholder="City" value={deliveryDetails.city} onChange={handleChange} />
            <input type="text" name="state" placeholder="State" value={deliveryDetails.state} onChange={handleChange} />
          </div>
          <div className="multi-fields">
            <input type="text" name="zip" placeholder="Zip code" value={deliveryDetails.zip} onChange={handleChange} />
            <input type="text" name="country" placeholder="Country" value={deliveryDetails.country} onChange={handleChange} />
          </div>
          <input type="text" name="phone" placeholder="Phone" value={deliveryDetails.phone} onChange={handleChange} />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{totalPrice}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹2</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>₹{totalPrice + 2}</p>
              </div>
            </div>
            <button type="submit" className="bg-success">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Placeorder;
