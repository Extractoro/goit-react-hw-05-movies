import styled from 'styled-components';

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  width: 100%;
  padding: 32px 0 40px;
`;

export default Section;
