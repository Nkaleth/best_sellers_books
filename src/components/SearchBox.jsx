import React from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../redux/categories/categoriesSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (value) => {
    dispatch(filterBySearch(value));
  };
  return (
    <input type="text" placeholder="Search by Category" onChange={(e) => handleSearchChange(e.target.value)} />
  );
};

export default SearchBox;
