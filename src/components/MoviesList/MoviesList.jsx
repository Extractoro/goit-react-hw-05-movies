import { Link } from 'react-router-dom';
import MoviesItem from './MoviesItem/MoviesItem';
const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>
            <MoviesItem {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
