import React from 'react';
import PropTypes from 'prop-types';
import '../styles/categorie.css';
import category from '../icons/category-svgrepo-com.svg';
import arrowCircle from '../icons/arrow-right-circle-svgrepo-com.svg';

const Categorie = ({
  categorieName, date, id,
}) => (
  <section data-testid="categorieBox" id={id} className="categorieBox">
    <div className="categorieImageBox">
      <img src={category} alt="Categorie Icon" />
      <div className="arrowCircleBox">
        <img src={arrowCircle} alt="arrow Circle" />
      </div>
    </div>
    <div className="CatNameBox">
      <h2 className="catName">{categorieName}</h2>
      <p className="publishDate">
        Published date:
        {' '}
        {date}
      </p>
    </div>
  </section>
);

Categorie.propTypes = { categorieName: PropTypes.string.isRequired };
Categorie.propTypes = { date: PropTypes.string.isRequired };
Categorie.propTypes = { id: PropTypes.string.isRequired };

export default Categorie;
