import React from 'react';
import { BrowseRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbars from './components/navbars';


const App = () => {
  const body = 
    <Router>
      <Navbars />
    </Router>
  ;

  return(body);
}

export default App;
