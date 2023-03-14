import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Categorie from './Categorie';
import { getCategoriesList } from '../redux/categories/categoriesSlice';
import Navbar from './Navbar';

const CategoriesList = () => {
  const { categoriesList, isLoading } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoriesList.length === 0) { dispatch(getCategoriesList()); }
  });

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar categorie="Best Sellers" numCateg={categoriesList.length} />
      <p>BOOKS BY CATEGORY</p>
      <section className="CategoriesBox">
        { categoriesList.map((categorie) => (
          <Categorie
            key={categorie.list_name_encoded}
            categorieName={categorie.display_name}
            date={categorie.newest_published_date}
          />
        ))}
      </section>
    </>
  );
};
export default CategoriesList;
