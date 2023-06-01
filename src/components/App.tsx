import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import About from '../pages/About/About';
import Work from '../pages/Work/Work';
import BTW from '../pages/BTW/BTW';
import NotFound from '../pages/NotFound/NotFound';

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
