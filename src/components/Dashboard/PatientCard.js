import React from 'react';
import styled from 'styled-components';

const PatientCard = styled.div`
  display: flex;
  border: 1px solid #DFE6EE;
  padding: 16px;
  background-color: #FFFFFF;
  border-radius: 4px;
  filter: drop-shadow(0px 2px 9px rgba(0, 0, 0, 0.03));
`;

const PatientImageWrapper = styled.div`
  display: flex;
  height: 58px;  
  width: 58px;
  overflow: hidden;
`;

const PatientImage = styled.img``;

const PatientName = styled.span`
  margin: 0px 16px;
  flex-grow: 1;
  font-size: 20px;
  align-self: center;
  text-align: center;
`;

export default ({
  patientName,
  patientPhoto = 'patient-photo.png'
}) => {
  return (
    <PatientCard>
      <PatientImageWrapper>
        <PatientImage src={patientPhoto} alt={'Patient'} />
      </PatientImageWrapper>
      <PatientName>
        {patientName}
      </PatientName>
    </PatientCard>
  );
};