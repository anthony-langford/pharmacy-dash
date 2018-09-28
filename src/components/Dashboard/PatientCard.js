import React from 'react';
import styled from 'styled-components';

const PatientCard = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 16px;
  align-items: center;
`;

const PatientName = styled.span`
  margin: 0px 16px;
  width: 100%;
  font-size: 20px;
`;

export default ({patientName}) => {
  return (
    <PatientCard>
      <img src="https://via.placeholder.com/80x80" alt={'PatientImage'} />
      <PatientName>{patientName}</PatientName>
    </PatientCard>
  );
};