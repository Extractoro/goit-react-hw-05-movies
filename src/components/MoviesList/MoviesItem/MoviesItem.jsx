import styled from 'styled-components';

const MoviesItem = ({ posterPath, title }) => {
  return (
    <Wrapper>
      <Picture
        src={`https://themoviedb.org/t/p/w342${posterPath}`}
        alt={title}
      />
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 260px;
  transform: scale(1);
  transition: transform #ffa600;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 6px #ffa600;
    transform: scale(1.04);
  }
`;

const Picture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px / 14px;
  color: #000;
`;
export default MoviesItem;
