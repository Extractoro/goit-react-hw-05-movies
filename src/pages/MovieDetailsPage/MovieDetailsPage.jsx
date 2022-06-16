import MovieDetails from 'components/MovieDetails/MovieDetails';
import MovieNav from 'components/MovieDetails/MovieNav/MovieNav';
import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Outlet,
  Route,
  Routes,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchDetails } from 'services/fetchApi';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { mappedDetails } from 'utils/mappedDetails';
import styled from 'styled-components';
import NotFoundPage from 'components/NotFound/NotFoundPage';

const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "cast" */)
);

const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { state } = useLocation();
  const nav = useNavigate();

  const [lastUrl] = useState(() => {
    return state ? `${state.prevUrl.pathname}${state.prevUrl.search}` : '/';
  });

  const goBack = () => {
    nav(lastUrl);
  };

  useEffect(() => {
    Loading.circle();
    fetchDetails(movieId).then(data => {
      setMovie(mappedDetails(data));
    });
    Loading.remove();
  }, [movieId]);

  return (
    <Suspense fallback={Loading.circle()}>
      <>
        {Loading.remove()}

        {movie.length === 0 ? (
          ''
        ) : (
          <Button onClick={goBack} type="button">
            Back
          </Button>
        )}

        {movie.length === 0 ? <NotFoundPage /> : <MovieDetails movie={movie} />}
        {movie.length === 0 ? '' : <MovieNav movieId={movieId} />}

        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Route>
        </Routes>
      </>
    </Suspense>
  );
};

const Button = styled.button`
  margin-top: 15px;
  margin-left: 65px;
  padding: 7px 15px;
`;

export default MovieDetailsPage;
