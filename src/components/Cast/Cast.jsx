import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCast } from 'services/fetchApi';
import { mappedCast } from 'utils/mappedCast';
import CastItem from './CastItem/CastItem';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(data => {
      setCast(mappedCast(data));
    });
  }, [movieId]);

  return (
    <List>
      {cast.length > 0 ? (
        cast.map(item => (
          <Item key={item.id}>
            <CastItem
              name={item.name}
              character={item.character}
              photo={item.photo}
            />
          </Item>
        ))
      ) : (
        <h3>No information</h3>
      )}
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
