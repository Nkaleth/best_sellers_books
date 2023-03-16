import React from 'react';
import PropTypes from 'prop-types';
import '../styles/categorie.css';
import category from '../icons/category-svgrepo-com.svg';

const Categorie = ({
  categorieName, date, id, index,
}) => (
  <section data-testid="categorieBox" id={id} className={`categorieBox${index % 2 === 0 ? 'even' : 'odd'}`}>
    <div className="categorieImageBox">
      <img src={category} alt="Categorie Icon" />
    </div>
    <div className="CatNameBox">
      <h2 className="catName">{categorieName}</h2>
      <p>
        Published date:
        {date}
      </p>
    </div>
  </section>
);

Categorie.propTypes = { categorieName: PropTypes.string.isRequired };
Categorie.propTypes = { date: PropTypes.string.isRequired };
Categorie.propTypes = { id: PropTypes.string.isRequired };
Categorie.propTypes = { index: PropTypes.number.isRequired };

export default Categorie;
