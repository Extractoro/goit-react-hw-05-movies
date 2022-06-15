import { Link, useLocation } from 'react-router-dom';
import MoviesItem from './MoviesItem/MoviesItem';
import styled from 'styled-components';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Wrapper>
      {movies.map(item => (
        <Item key={item.id}>
          <Link
            to={`/goit-react-hw-05-movies/movies/${item.id}`}
            state={{ from: location }}
          >
            <MoviesItem {...item} />
          </Link>
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Item = styled.li`
  margin: 0 auto;
  list-style: none;
  text-decoration: none;
`;

export default MoviesList;
