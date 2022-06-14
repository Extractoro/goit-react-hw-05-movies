const MoviesItem = ({ posterPath, title }) => {
  return (
    <div>
      <img src={`https://themoviedb.org/t/p/w342${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <hr />
    </div>
  );
};

export default MoviesItem;
