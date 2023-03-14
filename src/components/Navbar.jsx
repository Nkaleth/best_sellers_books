import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ categorie, numCateg }) => (
  <>
    <nav>
      <NavLink to="/">
        {'<'}
      </NavLink>
      <p>2023</p>
      <p>best sellers books</p>
      <img src="" alt="mic" />
      <img src="" alt="config" />
    </nav>
    <div className="catImgContainer">
      <img src="" alt="catImg" />
    </div>
    <div>
      <h1>{categorie}</h1>
      <p>
        {numCateg}
        {' '}
        Items
      </p>
    </div>
  </>
);

Navbar.propTypes = { categorie: PropTypes.string.isRequired };
Navbar.propTypes = { numCateg: PropTypes.number.isRequired };

export default Navbar;
