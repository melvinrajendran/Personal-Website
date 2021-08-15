import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./common/Navigation";
import About from "./about/About";
import Work from "./work/Work";
import BTW from "./btw/BTW";
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
