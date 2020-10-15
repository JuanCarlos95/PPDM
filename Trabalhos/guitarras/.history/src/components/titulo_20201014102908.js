import React from 'react';
import { Link } from 'react-router-dom';

const Titulo = () => {
  const body =
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img src="leilao.jpeg" alt="Logo do Leilão" width="40" />
        leilão de obras de arte
      </Link>
    </nav>

  return (body);
}

export default Titulo;

/*<nav classname="navbar navbar-expand-lg navbar-dark bg-primary">
    
  </nav>;
*/