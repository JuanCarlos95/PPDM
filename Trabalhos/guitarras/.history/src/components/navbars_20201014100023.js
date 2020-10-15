import React from 'react';
import { Link } from 'react-router-dom';

const navBars = () => {
  const body =  
  <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
    <Link className="navbar-brand" to="/">
      <img src="leilao.jpeg" alt="Logo do Leilão" width="40" />
      leilão de obras de arte
    </Link>
  </nav>

  return (body);
}

export default navBars;