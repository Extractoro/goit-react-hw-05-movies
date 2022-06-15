import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const GoBackButton = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [from, setFrom] = useState('');

  useEffect(() => {
    if (state?.from) {
      const { pathname, search } = state.from;
      setFrom(`${pathname}${search}`);
      return;
    }

    setFrom(`/`);
  }, [state?.from]);

  const handleBack = () => navigate(from);

  return (
    <Wrapper>
      <Button onClick={handleBack} type="button">
        Back
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 61px;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 7px 15px;
`;

export default GoBackButton;
