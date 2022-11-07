
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`;
}

const Navigation = () => (
  <nav>
    <NavLink
     end
      to="/"
      className={getClassName}
    //   activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={getClassName}
    //   activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
    <hr />
  </nav>
);

export default Navigation;