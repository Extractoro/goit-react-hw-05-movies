import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MovieNav = ({ movieId }) => {
  return (
    <LinksMenu>
      <LinksItem>
        <NavLink to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}>
          Cast
        </NavLink>
      </LinksItem>
      <LinksItem>
        <NavLink to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
      </LinksItem>
    </LinksMenu>
  );
};

const LinksMenu = styled.ul`
  margin-top: 10px;
  margin-left: 23px;
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.mainColor};
  border-radius: 10px;
  list-style: none;
`;

const LinksItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export default MovieNav;
