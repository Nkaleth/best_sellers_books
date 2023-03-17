import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Categorie from './Categorie';
import { getCategoriesList, filterBySearch } from '../redux/categories/categoriesSlice';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import '../styles/categoriesList.css';
import search from '../icons/search-svgrepo-com.svg';

const CategoriesList = () => {
  const {
    categoriesList,
    isLoading,
    categoriesFiltered,
  } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoriesList.length === 0) { dispatch(getCategoriesList()); }
  });

  useEffect(() => {
    dispatch(filterBySearch(''));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (categoriesFiltered.length > 0) {
    return (
      <>
        <Navbar categorie="Best Sellers" numCateg={categoriesList.length} />
        <section className="iconBox">
          <SearchBox />
          <img src={search} alt="findIcon" />
        </section>
        <p className="titleBoxCategories">BOOKS BY CATEGORY</p>
        <section className="CategoriesBox">
          { categoriesFiltered.map((categorie) => (
            <NavLink className="categorieLink" key={categorie.list_name_encoded} to={`/details/${categorie.list_name_encoded}`}>
              <Categorie
                id={categorie.list_name_encoded}
                categorieName={categorie.display_name}
                date={categorie.newest_published_date}
              />
            </NavLink>
          ))}
        </section>
      </>
    );
  }
  return (
    <>
      <Navbar categorie="BEST SELLERS" numCateg={categoriesList.length} />
      <section className="iconBox">
        <SearchBox />
        <img src={search} alt="findIcon" />
      </section>
      <p>BOOKS BY CATEGORY</p>
      <section className="CategoriesBox">
        { categoriesList.map((categorie) => (
          <NavLink className="categorieLink" key={categorie.list_name_encoded} to={`/details/${categorie.list_name_encoded}`}>
            <Categorie
              id={categorie.list_name_encoded}
              categorieName={categorie.display_name}
              date={categorie.newest_published_date}
              index={categorie.newindex}
            />
          </NavLink>
        ))}
      </section>
    </>
  );
};
export default CategoriesList;
