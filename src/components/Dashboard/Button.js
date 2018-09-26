import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  margin: 24px;
`;

const Button = styled.button`
  height: 36px;
  width: 140px;
  border: 1px solid rgb(186, 186, 186);
`;

export default ({
  children
}) => {
  return (
    <ButtonWrapper>
      <Button>
        {children}
      </Button>
    </ButtonWrapper>
  );
};