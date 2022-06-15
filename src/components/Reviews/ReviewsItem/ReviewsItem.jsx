import noPhoto from './nophoto.jpg';
import styled from 'styled-components';

const ReviewsItem = ({ name, text, photo }) => {
  return (
    <Wrapper>
      <Author>
        {photo ? (
          <Avatar src={`https://themoviedb.org/t/p/w342${photo}`} alt={name} />
        ) : (
          <NoAvatar src={noPhoto} alt={name} />
        )}
        <AuthorName>{name}</AuthorName>
      </Author>

      <Text>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AuthorName = styled.span`
  margin-left: 20px;
  text-transform: uppercase;
  color: #ffa600;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Comfortaa', sans-serif;
`;

const Text = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  font-family: 'Comfortaa', sans-serif;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #000;
`;

const NoAvatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #49297c;
`;

export default ReviewsItem;
