import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/goit-react-hw-05-movies" exact="true">
        Home
      </StyledLink>
      <StyledLink exact="true" to="/goit-react-hw-05-movies/movies">
        Movies
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  margin-top: 5px;
  padding-bottom: 9px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin-right: 15px;
  font-weight: 700;
  font-family: 'Comfortaa', sans-serif;
  border-bottom: 3px solid transparent;
  transition: color #ffa600;
  &.active {
    color: #ffa600;
    border-bottom: 5px solid #ffa600;
  }
  &:hover {
    cursor: pointer;
    color: #ffa600;
  }
`;
