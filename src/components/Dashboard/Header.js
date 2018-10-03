import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
`;

// TODO: Change active styling
const LogoButton = styled.button`
  display: flex;
  margin: 0 0 0 5%;
  outline: none;
  border: none;
  
  &:active {
    box-shadow: inset 0 0 2px #333;
  }
`;

const Logo = styled.img``;

// TODO: Change active styling
const AdminImageButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 5% 0 0;
  outline: none;
  border: none;

  &:active {
    box-shadow: inset 0 0 2px #333;
  }
`;

const Chevron = styled.img`
  margin: 0 0 0 8px;
`;

export default function Header({
  adminImage = 'https://via.placeholder.com/64x64',
}) {

  const AdminImage = styled.div`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${adminImage});
  `;

  return (
    <HeaderWrapper>
      <LogoButton>
        <Logo src='logo.png' alt='Logo' />
      </LogoButton>
      <AdminImageButton>
        <AdminImage />
        <Chevron src='chevron.png' alt='Chevron' />
      </AdminImageButton>
    </HeaderWrapper>
  );
}