import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../ApiService/movies';

import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movies = async () => {
      setLoader(true);
      try {
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoader(false);
      }
    };
    movies();
  }, []);

  return (
    <Section>
      <Container>
        <h1>Trending today</h1>
        {loader && <Loader />}
        {error && <NotFoundPage title={error} />}
        {movies && <MovieList movies={movies} />}
      </Container>
    </Section>
  );
};

export default HomePage;