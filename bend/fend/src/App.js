import React from "react";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import { useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import { ShippingAddressScreen } from "./screens/ShippingAddressScreen.jsx";
import { PaymentMethodScreen } from "./screens/PaymentMethodScreen.jsx";
import PlaceorderScreen from "./screens/PlaceorderScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import OrderHistoryScreen from "./screens/OrderHistoryScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // Sign in Selector in Header Component
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header cartItems={cartItems} />
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/shipping" component={ShippingAddressScreen} />
          <Route path="/payment" component={PaymentMethodScreen} />
          <Route path="/placeorder" component={PlaceorderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/orderhistory" component={OrderHistoryScreen} />
          <PrivateRoute path="/profile" component={ProfileScreen} />
        </main>
        <footer className="row center">Footer content</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
