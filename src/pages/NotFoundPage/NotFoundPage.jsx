import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <p>
        Oops! The page you are looking for doesn&#39;t exist. Return to
        <Link to={'/movies'}>Movies</Link>
      </p>
    </>
  );
};

export default NotFoundPage;