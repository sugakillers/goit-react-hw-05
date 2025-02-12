import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../ApiService/movies.js';

import css from './MovieReviews.module.css';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import Loader from '../Loader/Loader.jsx';

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setLoader(true);
      try {
        const {
          data: { results },
        } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {error && <NotFoundPage title={error} />}
      {reviews && !reviews.length && <NotFoundPage title="No reviews" />}
      <ul className={css.list}>
        {reviews &&
          reviews.map(({ author, content }, index) => (
            <li className={css.item} key={index}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieReviews; 