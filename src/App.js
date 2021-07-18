import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/services/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Devops from './components/Study/Devops';
import Aboutus from '../src/components/about us/Aboutus'
import Landingpage from '../src/components/pages/user type/Landingpage'
import Experience from '../src/components/pages/user type/Experience'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Landingpage} />
          <Route path='/expoptions' component={Experience} />
          <Route path='/stuoptions' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/devops' component={Devops} />
          <Route path='/aboutus' component={Aboutus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
