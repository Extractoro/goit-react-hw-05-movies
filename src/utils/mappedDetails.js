import { mappedGenreNames } from './mappedGenres';

export const mappedDetails = item => ({
  id: item.id,
  title: item.title,
  posterPath: item.poster_path,
  genres: mappedGenreNames(item.genres),
  overview: item.overview,
});
