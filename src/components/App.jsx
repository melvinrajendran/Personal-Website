import React from "react";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import BTW from "./BTW";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/btw">
          <BTW />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
