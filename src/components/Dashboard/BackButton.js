import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  margin: 24px;
  align-items: center;
  margin: 16px 3.5%;
`;

const BackButtonArrow = styled.img`
  margin: 0 8px 0 0;
`;

const BackButtonText = styled.span`
  color: #54B1B7;
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
    background: transparent;

    &:active {
      box-shadow: inset 0 0 2px #333;
    }
  `;

  return (
    <ButtonWrapper>
      <Button>
        <BackButtonArrow src='arrow.png' alt='Arrow' />
        <BackButtonText>
          {children}
        </BackButtonText>
      </Button>
    </ButtonWrapper>
  );
};