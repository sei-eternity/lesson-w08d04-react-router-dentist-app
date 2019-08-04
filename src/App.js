import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'
import Procedures from './Procedures';
import Contact from './Contact';


export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/procedures">Procedures</Link>{' '}
        <Link to="/contact">Contact</Link>
      </nav>

      <div>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
