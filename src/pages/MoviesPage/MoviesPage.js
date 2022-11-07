import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams, Outlet } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './MoviesPage.styled.js';

export default function MoviesPage (){
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('search');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements[0].value;
    setSearchParams({ search: query });
    form.reset();
  };

  useEffect(() => {
    if (!querySearch) return;
    moviesAPI.getMoviesSearch(querySearch).then(({ results }) => {
            setSearchMovie(results);
          });
  }, [querySearch]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput type="text" name="movieName" autocomplete="off"
          autoFocus
          placeholder="Search movies "/>
        <SearchFormButton type="submit">Search</SearchFormButton>
        </SearchForm>
      <ul>
        {searchMovie &&
          searchMovie.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
