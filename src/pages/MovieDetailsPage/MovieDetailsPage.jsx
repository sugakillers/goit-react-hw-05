import { Outlet, useParams, useLocation, NavLink } from 'react-router-dom';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Btn from '../../components/Btn/Btn';

import clsx from 'clsx';

import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const prevLocation = location.state.from;

  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <>
      <div>
        <Section>
          <Container>
            <Btn state={{ from: prevLocation }} />
            <MovieDetails state={{ from: prevLocation }} />
          </Container>
        </Section>
      </div>

      <div className={css.shadow}>
        <Section>
          <Container>
            <h3 className={css.addTitle}>Additional Info</h3>
            <NavLink
              to={`/movies/${movieId}/cast`}
              state={{ from: prevLocation }}
              className={buildCssClasses}
            >
              Cast
            </NavLink>
            <NavLink
              to={`/movies/${movieId}/review`}
              state={{ from: prevLocation }}
              className={buildCssClasses}
            >
              Reviews
            </NavLink>
          </Container>
        </Section>
      </div>
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};

export default MovieDetailsPage;