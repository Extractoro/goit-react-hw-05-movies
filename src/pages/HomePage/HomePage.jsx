import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchApi } from 'services/fetchApi';
import styled from 'styled-components';
import { mappedMovies } from '../../utils/mappedMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchApi().then(({ results }) => {
      setMovies(mappedMovies(results));
    });
  }, []);

  return (
    <>
      <Title>Trending Movies</Title>

      <MoviesList movies={movies} />
    </>
  );
};

const Title = styled.h1`
  display: block;
  text-align: center;
`;

export default HomePage;
