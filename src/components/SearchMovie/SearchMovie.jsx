import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styled from 'styled-components';

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
    <Form onSubmit={handleSubmit}>
      <button type="submit">
        <BiSearch size={25} />
      </button>

      <Input
        onChange={handleNameChange}
        type="text"
        autoComplete="off"
        value={query}
        autoFocus
        placeholder="Search images and photos"
      />
    </Form>
  );
};

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 340px;
  margin-right: 10px;

  background-color: transparent;
  padding-left: 20px;
  font-size: 20px;
  border: 1px solid #000;
  border-radius: 5px;
`;

export default SearchMovie;
