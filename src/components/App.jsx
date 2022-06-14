import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';

export const App = () => {
  return (
    <Section>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Section>
  );
};

const Section = styled.section``;
