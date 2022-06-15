import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Main from './Main/Main';

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

        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Route>
        </Routes>
      </>
    </Suspense>
  );
};
