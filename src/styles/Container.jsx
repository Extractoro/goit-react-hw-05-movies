import styled from 'styled-components';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;
export default Container;
