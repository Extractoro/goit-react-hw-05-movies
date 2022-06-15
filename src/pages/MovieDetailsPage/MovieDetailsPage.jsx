import Cast from 'components/Cast/Cast';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import MovieNav from 'components/MovieDetails/MovieNav/MovieNav';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Outlet, Route, Routes, useParams } from 'react-router-dom';
import { fetchDetails } from 'services/fetchApi';
import { mappedDetails } from 'utils/mappedDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchDetails(movieId).then(data => {
      setMovie(mappedDetails(data));
    });
  }, [movieId]);

  return (
    <>
      <GoBackButton />
      {movie && <MovieDetails movie={movie} />}
      <MovieNav movieId={movieId} />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews movieId={movieId} />} />
        </Route>
      </Routes>
    </>
  );
};

export default MovieDetailsPage;
