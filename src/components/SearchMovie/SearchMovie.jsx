import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SearchMovie = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleNameChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notify.failure('Oops! Entered an empty string');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <BiSearch size={25} />
      </button>

      <input
        onChange={handleNameChange}
        type="text"
        autoComplete="off"
        value={query}
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default SearchMovie;
