import React from "react";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header /> 
        <main>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </main>
        <footer className="row center">Footer content</footer> 
      </div>
    </BrowserRouter>
  );
}

export default App;
