import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/navBar.css';

const Navbar = ({ categorie, numCateg }) => (
  <>
    <nav className="navbarTop">
      <NavLink to="/">
        {'<'}
      </NavLink>
      <p>
        2023
        {' '}
      </p>
      <p>best sellers books</p>
      <img src="" alt="mic" />
      <img src="" alt="config" />
    </nav>
    <section className="navbarBottom">
      <div className="catImgContainer">
        <img src="" alt="catImg" />
      </div>
      <div>
        <h1 className="titleNavbar">{categorie}</h1>
        <p className="counterNavbar">
          {numCateg}
          {' '}
          Categories
        </p>
      </div>
    </section>
  </>
);

Navbar.propTypes = { categorie: PropTypes.string.isRequired };
Navbar.propTypes = { numCateg: PropTypes.number.isRequired };

export default Navbar;
