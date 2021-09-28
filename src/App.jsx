import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import Footer from "./Components/Footer/Footer";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51JRXMwSGXY6KeCBj23Bi49p7v3phTddGigwof74yklv1Xvl8FpeaH6FGezoE4YLA8dg31RYGTS36F0gl1ceoS7uj000ZTPIV9J"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/checkout" exact>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/payment" exact>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders" exact>
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
