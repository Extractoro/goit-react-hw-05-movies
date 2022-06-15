import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Header from './Header/Header';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "home-view" */)
);

const MoviesPage = lazy(() =>
  import('pages/MoviesPage/MoviesPage' /* webpackChunkName: "home-view" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    'pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "home-view" */
  )
);
export const App = () => {
  return (
    <Suspense fallback={Loading.circle()}>
      <>
        {Loading.remove()}
        <Header />

        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<HomePage />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId/*"
            element={<MovieDetailsPage />}
          />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<MoviesPage />}
          />
        </Routes>
      </>
    </Suspense>
  );
};
