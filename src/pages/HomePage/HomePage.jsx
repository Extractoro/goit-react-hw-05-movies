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
  });

  return (
    <>
      <h1>Trending Movies</h1>
      <Section>
        <MoviesList movies={movies} />
      </Section>
    </>
  );
};

const Section = styled.section``;
export default HomePage;
