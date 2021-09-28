import React from "react";
import "./Subtotal.css";

import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../Reducer.jsx";
import { useHistory } from "react-router";

import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  const history = useHistory();
  const [{ cart }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
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

      <button onClick={(e)=>history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
