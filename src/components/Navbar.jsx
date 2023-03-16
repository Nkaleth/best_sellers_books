import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import gear from '../icons/gear-svgrepo-com.svg';
import mic from '../icons/mic-svgrepo-com.svg';
import goback from '../icons/backward-step-svgrepo-com.svg';
import library from '../icons/library-svgrepo-com.svg';
import '../styles/navBar.css';

const Navbar = ({ categorie, numCateg }) => (
  <>
    <nav className="navbarTop">
      <div className="contentnavbarTop">
        <NavLink className="iconBox" to="/">
          <img src={goback} alt="goBack" />
          <p className="yearNavbar">
            2023
            {' '}
          </p>
        </NavLink>
        <p className="titleNavbar">New York Times Best Sellers Books</p>
        <div className="iconBox">
          <img src={mic} alt="mic" />
        </div>
        <div className="iconBox">
          <img src={gear} alt="config" />
        </div>
      </div>
    </nav>
    <section className="navbarBottom">
      <div className="catImgContainer">
        <img src={library} alt="catImg" />
      </div>
      <div className="titleCountBox">
        <h1 className="titleCategories">{categorie}</h1>
        <p className="counterNavbar">
          {numCateg}
          {' '}
          Items
        </p>
      </div>
    </section>
  </>
);

Navbar.propTypes = { categorie: PropTypes.string.isRequired };
Navbar.propTypes = { numCateg: PropTypes.number.isRequired };

export default Navbar;
