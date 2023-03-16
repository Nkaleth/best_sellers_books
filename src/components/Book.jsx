import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  rank, rankLastWeek, weeksOnList, title, author, bookImg,
}) => {
  let rankInfo;
  if (rankLastWeek === 0) {
    rankInfo = <span className="rankInfo">New this week</span>;
  } else if (rankLastWeek > rank) {
    rankInfo = <span className="rankInfo">Rank decreased</span>;
  } else {
    rankInfo = <span className="rankInfo">Rank increased</span>;
  }
  return (
    <article data-testid="bookBox" className="bookBox">
      <section className="bookTitle">
        <h2>{rank}</h2>
        <div className="rankData">
          <img src={bookImg} alt={title} />
          {rankInfo}
          <span>{`${weeksOnList} WEEKS ON THE LIST`}</span>
        </div>
        <div className="titleAuthorBook">
          <h2>{title}</h2>
          <span>{`by ${author}`}</span>
        </div>
      </section>
    </article>
  );
};

Book.propTypes = { rank: PropTypes.number.isRequired };
Book.propTypes = { rankLastWeek: PropTypes.number.isRequired };
Book.propTypes = { weeksOnList: PropTypes.number.isRequired };
Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { author: PropTypes.string.isRequired };
Book.propTypes = { bookImg: PropTypes.string.isRequired };

export default Book;
