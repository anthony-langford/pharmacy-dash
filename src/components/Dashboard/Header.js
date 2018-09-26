import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50px;
  border-bottom: 2px solid darkblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Wrapper>
      <Logo>
        <img src="https://via.placeholder.com/182x44" alt={'Logo'} />
      </Logo>
    </Wrapper>
  );
};