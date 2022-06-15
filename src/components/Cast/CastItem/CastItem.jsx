import noPhoto from './nophoto.jpg';
import styled from 'styled-components';

const CastItem = ({ name, character, photo }) => {
  return (
    <Wrapper>
      {photo ? (
        <Photo src={`https://themoviedb.org/t/p/w342${photo}`} alt={name} />
      ) : (
        <NoPhoto src={noPhoto} alt={name} />
      )}

      <Title>{name}</Title>
      <Subtitle>{character}</Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 124px;
`;

const Photo = styled.img`
  border-radius: 5px;
`;

const NoPhoto = styled.img`
  width: 124px;
  height: 186px;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.h4`
  margin-top: 5px;
  padding: 0 2px;
  color: #ffa600;
  margin: 0;
  margin-top: 5px;
  font-size: 14px;
`;

const Subtitle = styled.p`
  margin-top: 5px;
  padding: 0 2px;
  color: #000;
  font-size: 13px;
  font-weight: bold;
`;

export default CastItem;
