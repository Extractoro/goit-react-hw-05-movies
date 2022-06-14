const MovieDetails = ({ movie }) => {
  return (
    <div>
      <>
        <h3>{movie.title}</h3>
        <img
          src={`https://themoviedb.org/t/p/w342${movie.posterPath}`}
          alt={movie.title}
        />
      </>
    </div>
  );
};

export default MovieDetails;
