import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
 
  if (!movies || !Array.isArray(movies)) {
    console.warn("MovieList: movies is not an array", movies);
    return <p>No movies found.</p>;
  }
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li className={css.listItem} key={id}>
          <Link state={location} className={css.itemLink} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;


