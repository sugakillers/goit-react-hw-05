import { useState } from 'react';

import { TbSearch } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import css from './Form.module.css';


import toast, { Toaster } from 'react-hot-toast';




const notification = () =>
  toast('Please, enter film`s name', { position: 'top-center' });

const Form = ({ getSearchQuery, prevValue }) => {
  const [query, setQuery] = useState(prevValue ?? '');

  const handleSubmit = e => {
    e.preventDefault();
    const inputQuery = query.trim();
    if (!inputQuery) {
      notification();
      return;
    }

    getSearchQuery(inputQuery);
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          name="query"
          placeholder="Enter film's name ..."
        />
        <button className={css.button} type="submit">
          <IconContext.Provider
            value={{ color: '#55883B', size: 35, className: 'submitIcon' }}
          >
            <TbSearch />
          </IconContext.Provider>
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default Form;
