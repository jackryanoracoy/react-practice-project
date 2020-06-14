import React from 'react';
import Header from '../app-header/index';
import Footer from '../app-footer/index';
import Home from '../page-home/index';
import About from '../page-about/index';
import Contact from '../page-contact/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
          <Route path="/contact" exact component={ Contact } />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
