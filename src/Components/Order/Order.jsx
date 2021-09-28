import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../Reducer";
import CurrencyFormat from "react-currency-format";
const Order = ({ order }) => {
  const [{ user, cart }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hiddenButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} //
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
};

export default Order;
