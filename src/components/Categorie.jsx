import React from 'react';
import PropTypes from 'prop-types';

const Categorie = ({ categorieName, date, id }) => (
  <section data-testid="categorieBox" id={id} className="categorieBox">
    <div className="categorieImageBox">
      <img src="" alt="Categorie Icon" />
    </div>
    <div>
      <h2>{categorieName}</h2>
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

export default Categorie;
