import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import { getCast } from '../../ApiService/movies.js'; 
import css from './MovieCast.module.css';

const defaultImg = 'https://geek.hellyer.kiwi/files/2017/06/cat-404.jpg';

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      setError(null);
      setLoader(true);
      try {
        const { data } = await getCast(movieId); 
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      {loader && <Loader />}
      {error && <NotFoundPage title={error} />}
      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map(({ cast_id, name, profile_path, character }) => (
            <li className={css.listItem} key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={name}
                width={100}
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don’t have any data for this movie</p>
      )}
    </div>
  );
};

export default MovieCast;
