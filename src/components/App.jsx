import React from "react";
import Navigation from "./common/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import BTW from "./BTW";
import Footer from "./common/Footer";

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
