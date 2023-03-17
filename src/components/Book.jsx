import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';
import upArrow from '../icons/up-arrow-svgrepo-com.svg';
import downArrow from '../icons/down-arrow-download-svgrepo-com.svg';
import rightArrow from '../icons/right-arrow-svgrepo-com.svg';
import arrowCircle from '../icons/arrow-right-circle-svgrepo-com.svg';

const Book = ({
  rank, rankLastWeek, weeksOnList, title, author, bookImg,
}) => {
  let arrowRank;
  if ((rankLastWeek === rank) || (rankLastWeek === 0 && (rank > rankLastWeek))) {
    arrowRank = <img className="arrowRank" src={rightArrow} alt="RightArrow" />;
  } else if (rankLastWeek < rank) {
    arrowRank = <img className="arrowRank" src={downArrow} alt="DownArrow" />;
  } else {
    arrowRank = <img className="arrowRank" src={upArrow} alt="UpArrow" />;
  }
  let numWeeks;
  if (weeksOnList === 0) {
    numWeeks = <span className="weeksList">NEW THIS WEEK</span>;
  } else {
    numWeeks = <span className="weeksList">{`${weeksOnList} WEEKS ON THE LIST`}</span>;
  }
  return (
    <article data-testid="bookBox" className={`bookBox${rank % 2 === 0 ? 'even' : 'odd'}`}>
      <section className="bookTitle">
        <div className="rankData">
          <h2 className="rankNumber">{rank}</h2>
          <div className="arrowRankBox">
            {arrowRank}
          </div>
          <div className="bookCoverBox">
            <img src={bookImg} alt={title} />
          </div>
        </div>
        <div className="titleAuthorBook">
          <h2>{title}</h2>
          <span>{`by ${author}`}</span>
          {numWeeks}
        </div>
        <div className="arrowCircleBoxBook">
          <img src={arrowCircle} alt="arrowCircle" />
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
