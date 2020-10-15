import React from 'react';
import { Link } from 'react-router-dom';
import './titulo.css'

const Titulo = () => {
  const body =
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="logo" to="/">
        <img src="logo.png" alt="Guitar Center" width="100" />
      </Link>  
    </nav>

  return (body);
}

export default Titulo;