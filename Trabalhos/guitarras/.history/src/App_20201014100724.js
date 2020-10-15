import React from 'react';
import { BrowseRouter as Router, Route } from 'react-router-dom';
import navBars from './components/navbars';
import detalhes from './components/detalhe';

const App = () => {
  const body =
  <Router>
    <navBars />
    <Route path="/detalhe" component={detalhes} />
  </Router>   
  ;

  return(body);
}

export default App;
