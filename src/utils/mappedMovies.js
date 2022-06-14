export const mappedMovies = list =>
  list.map(item => ({
    id: item.id,
    title: item.title,
    posterPath: item.poster_path,
    genres: item.genre_ids,
  }));
