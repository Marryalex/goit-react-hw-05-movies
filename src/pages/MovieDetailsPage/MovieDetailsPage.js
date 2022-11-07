import { useState, useEffect} from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import { NavLink } from 'react-router-dom';
import getImg from '../../services/getImg';
import styles from './MovieDetailsPage.module.css';
import GoBackButton from './GoBackButton.styled';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    moviesAPI.getMovieId(movieId)
      .then(response => setMovie(response));
  }, [movieId]);

  const onGoBackClick = () => {navigate(location?.state?.from ?? '/')}


  return (
    <>
      <GoBackButton type="button" onClick={onGoBackClick}>
        &laquo; Go back
      </GoBackButton>
      <br />
      {movie && (
        <>
          <img src={getImg(movie)} width={300} alt={movie.title} />
          <h2>
            {movie.title} ({movie.release_date.substr(0, 4)})
          </h2>
          <p>
            <b>User score: </b>
            {movie.vote_average * 10 + '%'}
          </p>
          <p>
            <b>Overview: </b>
            {movie.overview}
          </p>
          <p>
            <b>Genres: </b>

            {movie.genres.reduce(function (acc, curVal) {
              return acc + ' ' + curVal.name;
            }, '')}
          </p>
        </>
      )}
      <hr />
      <p>Additional information:</p>
      <ul>
      <li>
          <NavLink
            to={'cast'}
            state={location.state}
            className={styles.link}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'reviews'}
            className={styles.link}
            state={location.state}
          >
            Reviews
          </NavLink>
        </li>
   
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
