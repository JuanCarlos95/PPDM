import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Titulo from './components/titulo';
import Rodape from './components/rodape';
const App = () => {
  const body =
  <Router>
    <Titulo />
    <Rodape />
  </Router>   
  ;

  return(body);
}

export default App;
