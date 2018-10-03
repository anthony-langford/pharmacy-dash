import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  margin: 24px;
  align-items: center;
`;

export default ({
  height,
  children
}) => {

  // TODO: Change active styling
  const Button = styled.button`
    height: ${height};
    border: none;
    outline: none;

    &:active {
      box-shadow: inset 0 0 2px #333;
    }
  `;

  return (
    <ButtonWrapper>
      <Button>
        {children}
      </Button>
    </ButtonWrapper>
  );
};