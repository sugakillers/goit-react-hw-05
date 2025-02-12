import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import css from './Btn.module.css';

const Btn = () => {
  const location = useLocation();
  const back = useRef(location.state.from ?? '/movies');

  return (
    <Link to={back.current} className={css.back}>
      <FaArrowLeft />
      Go back
    </Link>
  );
};

export default Btn;