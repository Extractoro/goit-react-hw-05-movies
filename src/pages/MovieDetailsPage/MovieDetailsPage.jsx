import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import {
  Outlet,
  useParams,
  useNavigate,
  Link,
  useLocation,
} from 'react-router-dom';
import { fetchDetails } from 'services/fetchApi';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { mappedDetails } from 'utils/mappedDetails';
import styled from 'styled-components';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [lastUrl] = useState(() => {
    return state ? `${state.prevUrl.pathname}${state.prevUrl.search}` : '/';
  });

  const goBack = () => {
    navigate(lastUrl);
  };

  useEffect(() => {
    Loading.circle();
    fetchDetails(movieId)
      .then(data => {
        setMovie(mappedDetails(data));
      })
      .catch(error => {
        navigate('/');
        console.error(error);
      });
    Loading.remove();
  }, [movieId, navigate]);

  return (
    <>
      {movie.length === 0 ? (
        ''
      ) : (
        <Button onClick={goBack} type="button">
          Back
        </Button>
      )}

      {movie && <MovieDetails movie={movie} />}

      <ul>
        Additional information:
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

const Button = styled.button`
  margin-top: 15px;
  margin-left: 65px;
  padding: 7px 15px;
`;

export default MovieDetailsPage;
