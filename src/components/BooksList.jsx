import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getBestSellerBooks } from '../redux/details/detailsSlice';
import Navbar from './Navbar';
import Book from './Book';
import '../styles/booklist.css';

const BooksList = ({ id }) => {
  const {
    booksDetails, listName, isLoading, publishedDate,
  } = useSelector((store) => store.details);
  const itemUrl = `https://api.nytimes.com/svc/books/v3/lists/${id}.json?api-key=ojoeVThZ3GLU2SAZCITvtT1smz6qZuGq`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestSellerBooks(itemUrl));
  }, [itemUrl, dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar categorie={listName} numCateg={booksDetails.length} />
      <p className="listDate">{`Ranking Date: ${publishedDate}`}</p>
      <section className="booksDetailsBox">
        { booksDetails.map((book) => (
          <Book
            key={book.primary_isbn10}
            rank={book.rank}
            rankLastWeek={book.rank_last_week}
            weeksOnList={book.weeks_on_list}
            title={book.title}
            author={book.author}
            bookImg={book.book_image}
          />
        ))}
      </section>
    </>
  );
};

BooksList.propTypes = { id: PropTypes.string.isRequired };

export default BooksList;
