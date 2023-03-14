import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <Navbar categorie="Best Sellers" numCateg={10} />
    <div>
      <h2>Books by Format</h2>
      <NavLink to="details">Combined Print and E-Book Fiction</NavLink>
    </div>
  </>
);

export default Home;
