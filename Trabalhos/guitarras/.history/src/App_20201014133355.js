import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Titulo from './components/titulo';

const App = () => {
  const body = <Router>
    <Titulo />
  </Router>;

  return (body);
}

export default App;
