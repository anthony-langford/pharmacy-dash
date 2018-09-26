import React from 'react';
import styled from 'styled-components';

const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  margin-top: 16px;
  padding: 16px;
  border: 1px solid black;
  text-align: left;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`;

const List = styled.ul`
  margin: 16px 0;
  padding: 0;
  list-style-type: none;  
`;

const ListItem = styled.li`
  display: flex;
`;

export default ({ patientInfo }) => {
  const copy = {
    credit_card: 'Credit Card #',
    mailing_address: 'Mailing Address',
    billing_address: 'Billing Address',
    birthdate: 'DOB',
    allergies: 'Allergies',
    health_card: 'Health Card'
  };

  return (
    <PatientInfo>
      <Header>Patient Info</Header>
      <List>
        <ListItem>{`${copy.credit_card}: ${patientInfo.credit_card}`}</ListItem>
        <ListItem>
          <span style={{ 'marginRight': '8px' }}>{`${copy.mailing_address}:`}</span>
          <address>
            {patientInfo.mailing_address.address}<br/>
            {`${patientInfo.mailing_address.locality}, ${patientInfo.mailing_address.administrative_area}`}<br/>
            {patientInfo.mailing_address.postal_code}<br/>
          </address>
        </ListItem>
      </List>
    </PatientInfo>
  );
};