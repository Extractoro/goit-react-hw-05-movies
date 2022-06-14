import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPage;
