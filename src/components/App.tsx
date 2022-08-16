import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './common/Footer';
import Navigation from './common/Navigation';
import NotFound from './common/NotFound';
import About from './about/About';
import Work from './work/Work';
import BTW from './btw/BTW';

/*
 * TODO:
 * Animation
 * Dark mode color scheme
 * Jumping to hash links on page load
 */

const App = () => {
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
