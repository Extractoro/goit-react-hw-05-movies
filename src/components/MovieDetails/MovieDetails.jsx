import styled from 'styled-components';
const MovieDetails = ({ movie }) => {
  return (
    <Wrapper>
      <ImgContainer>
        <img
          src={`https://themoviedb.org/t/p/w342${movie.posterPath}`}
          alt={movie.title}
        />
      </ImgContainer>
      <div>
        <Title>{movie.title}</Title>

        <Span>Genres</Span>
        <P>{movie.genres}</P>
        <Span>Overview</Span>
        <Overview>{movie.overview}</Overview>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 32px 60px;
  display: flex;
`;

const ImgContainer = styled.div`
  padding-right: 25px;
  margin-right: 25px;
  border-right: 1px solid #000;
`;

const Title = styled.h3`
  font-size: 60px;
  margin: 0;
  color: #ffa600;
`;

const Span = styled.span`
  font-size: 35px;
  margin: 0;
  font-weight: 700;
  display: block;
  margin-top: 30px;
  color: #ffa600;
`;

const P = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

const Overview = styled.p`
  margin: 15px 0;
  font-size: 25px;
`;

export default MovieDetails;
