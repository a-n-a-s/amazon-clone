import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
const Checkout = () => {
  const [{ cart ,user }, dispatch] = useStateValue();
  console.log(user)
  return (
    <div className="checkout">
      <div className="checkout_left">
        <Link to="/">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            className="checkout_ad"
            alt=""
          />
        </Link>
        <div>
          <h3>Hello , {user?.email}</h3>
          <h2 className="checkout_title">Your Cart</h2>

          {cart?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
