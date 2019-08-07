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
import Rick from './Rick';

const proceduresArray = [
  'General Checkups',
  'Teeth Cleaning',
  'Cavity Screenings',
  'Cavity Fillings',
  'Chipped Tooth Fixings',
  'Tooth Removal',
  'Root Canals']

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{'  '}
        <Link to="/procedures">Procedures</Link>{'  '}
        <Link to="/contact">Contact</Link>{'  '}
        <Link to='/rick'>Rick!</Link>
      </nav>

      <div>
        <Route exact path="/" component={Home} />
        <Route path='/procedures' component={() => <Procedures procedures={proceduresArray} />} />
        <Route path="/contact" component={Contact} />
        <Route path='/rick' component={Rick} />
      </div>
    </Router>
  );
}
