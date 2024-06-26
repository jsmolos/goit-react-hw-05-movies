import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'pages/Shared/SharedLayout';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/Movie/MovieDetailsPage'));
/*const NotFoundPage = lazy(() => import('pages/NotFoundPage'));*/

const CastList = lazy(() => import('components/Cast/CastList'));
const ReviewsList = lazy(() => import('components/Reviews/ReviewsList'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviews" element={<ReviewsList />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
