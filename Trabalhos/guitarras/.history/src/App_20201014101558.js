import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import navBars from './components/navbars';

const App = () => {
  const body =
  <Router>
    <navBars />
  </Router>   
  ;

  return(body);
}

export default App;
