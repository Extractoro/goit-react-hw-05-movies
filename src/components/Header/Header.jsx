import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';
import Container from 'styles/Container';
import { Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Wrapper>
        <Container>
          <Navigation />
        </Container>
      </Wrapper>
      <Outlet />
    </>
  );
}

const Wrapper = styled.header`
  display: flex;
  height: 40px;
  background-color: #000;
`;
