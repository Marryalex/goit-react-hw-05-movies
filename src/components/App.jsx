import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation/Navigation.js';
const HomePage = lazy(() =>
  import('pages/HomePage/HomePage.js')); 

const MoviesPage = lazy(() =>
  import(
    '../pages/MoviesPage/MoviesPage'));

const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage'));

const NotFoundMsg = lazy(() =>
  import('./NotFoundMsg/NotFoundMsg'));

const Cast = lazy(() => 
import('../pages/Cast/Cast'));

const Reviews = lazy(() => 
import('../pages/Reviews/Reviews'));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>L O A D I N G . . . </h2>}>
      <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='movies' element={<MoviesPage />}></Route>
          <Route path='movies/:movieId' element={<MovieDetailsPage />}>
              <Route path='cast' element={<Cast />}> </Route>
              <Route path='reviews' element={<Reviews />}> </Route>
          </Route>
          
          
        
      
          <Route path='*' element={<NotFoundMsg msg="Page is not find !" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}