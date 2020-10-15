import React from 'react';
import { Link } from 'react-router-dom';

const Navbars = () => {
  const body =
    <nav classname="navbar navbar-expand-sm bg-dark navbar-dark">
       <Link classname="navbar-brand" to="/">
        <img src="navbar-brand" alt="logo"/>
          Guitar World
      </Link>
    </nav>;
  return (body);
}

export default Navbars;