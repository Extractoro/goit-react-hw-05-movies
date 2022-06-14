import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { fetchSearch } from 'services/fetchApi';
import { mappedMovies } from 'utils/mappedMovies';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = query => {
    //Loading

    fetchSearch(query).then(({ results }) => {
      if (results.length === 0) {
        Notify.failure('Oops! Entered an empty string');
      } else {
        setMovies(mappedMovies(results));
      }
    });
  };

  return (
    <>
      <SearchMovie onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;
