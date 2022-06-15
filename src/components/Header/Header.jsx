import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';
import Container from 'styles/Container';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Navigation />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: left;
  height: 40px;
  background-color: #000;
`;
