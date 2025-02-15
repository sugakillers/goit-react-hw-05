import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getMoviesById } from '../../ApiService/movies';
import css from './MovieDetails.module.css';
export const defaultImg = 'https://storage.googleapis.com/pod_public/1300/175426.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [info, setInfo] = useState({});
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoader(true);
      try {
        const details = await getMoviesById(movieId);
        setInfo(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, [movieId]);

  const {
    genres,
    overview,
    poster_path: poster,
    release_date: releaseDate,
    tagline,
    title,
    vote_average: voteAverage,
  } = info;

  const releaseYear = releaseDate && releaseDate.slice(0, 4);

  const genresName = genres && genres.map(g => g.name).join(', ');

  return (
    <>
      {error && <p>{error}</p>}
      <div className={css.infoWrapper}>
        <img
          className={css.poster}
          src={
            info.poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster}`
              : defaultImg
          }
          width={264}
          alt="poster"
        />
        <div className={css.info}>
          <h1 className={css.title}>
            {title}
            <time className={css.year}>({releaseYear})</time>
          </h1>
          <p className={css.tagline}>{tagline}</p>
          <p className={css.text}>Vote average {voteAverage}</p>
          <h3 className={css.subtitle}>Overview</h3>
          <p className={css.text}>{overview}</p>
          <h3 className={css.subtitle}>Genres</h3>
          <p className={css.text}>{genresName}</p>
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default MovieDetails;

