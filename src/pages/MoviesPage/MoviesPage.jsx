import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'services/fetchApi';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { mappedMovies } from 'utils/mappedMovies';

const PARAM_QUERY = 'query';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [queryParam, setQueryParam] = useSearchParams({});

  useEffect(() => {
    const query = queryParam.get(PARAM_QUERY);

    if (query) handleSubmit(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = query => {
    setQueryParam({ [PARAM_QUERY]: query });
    Loading.circle();

    fetchSearch(query).then(({ results }) => {
      if (results.length === 0) {
        Notify.failure('Oops! Entered an empty string');
      } else {
        setMovies(mappedMovies(results));
      }
    });
    Loading.remove();
  };

  return (
    <>
      <SearchMovie onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;
