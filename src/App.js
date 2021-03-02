import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Home from './comps/Home';
import Services from './comps/Services';
import About from './comps/About';
import Contact from './comps/Contact';
import Error from './comps/Error';
import Navbar from './comps/Navbar';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
           <Route path="/services">
           <Services />
          </Route>
           <Route path="/about">
           <About />
          </Route>
           <Route path="/contact">
           <Contact />
          </Route>
           <Route path="*">
           <Error />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
