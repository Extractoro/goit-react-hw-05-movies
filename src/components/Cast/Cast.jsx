import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCast } from 'services/fetchApi';
import { mappedCast } from 'utils/mappedCast';
import CastItem from './CastItem/CastItem';
import styled from 'styled-components';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCast(movieId).then(data => {
      setCast(mappedCast(data));
    });
  });

  return (
    <List>
      {cast.length > 0 &&
        cast.map(item => (
          <Item key={item.id}>
            <CastItem
              name={item.name}
              character={item.character}
              photo={item.photo}
            />
          </Item>
        ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  padding: 11px;
  background-color: ${p => p.theme.mainColor};
  border-radius: 10px;
  & .noCredits {
    margin-right: auto;
    font-size: 20px;
  }
`;

const Item = styled.li`
  padding: 8px;
`;

export default Cast;
