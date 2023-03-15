import { useParams } from 'react-router';
import BooksList from '../components/BooksList';

const Details = () => {
  const { id } = useParams();
  return (
    <BooksList id={id} />
  );
};
export default Details;
