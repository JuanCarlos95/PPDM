import React from 'react';
import { Link } from 'react-router-dom';

const navBars = () => {
  const body =
  <nav classname="navbar navbar-expand-sm bg-dark navbar-dark">
    <Link classname="navbar-brand" to="/">
      <img src="logo.jpg" alt="logo"/>
        Guitar World
    </Link>
    <p>Guitar World</p>
  </nav>;

  return (body);
}

export default navBars;