import React from 'react';
import styled from 'styled-components';

const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: auto;
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
  margin: 0;
  padding: 0;
  list-style-type: none;  
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const InsuranceCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// TODO: Write function to format fields so patientInfo can be iterated over

export default ({ patientInfo }) => {
  const copy = {
    credit_card: 'Credit Card #',
    mailing_address: 'Mailing Address',
    billing_address: 'Billing Address',
    birthdate: 'DOB',
    allergies: 'Allergies',
    health_card: 'Health Card',
    primary_insurance_card: 'Primary Insurance Card',
    secondary_insurance_card: 'Secondary Insurance Card'
  };

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <PatientInfo>
      <Header>Patient Info</Header>
      <List>
        <ListItem>
          <span>{copy.credit_card}:</span>
          <span>{patientInfo.credit_card}</span>
        </ListItem>
        <ListItem>
          <span>{`${copy.mailing_address}:`}</span>
          <span>
            <address>
              {patientInfo.mailing_address.address}<br/>
              {`${patientInfo.mailing_address.locality}, ${patientInfo.mailing_address.administrative_area}`}<br/>
              {patientInfo.mailing_address.postal_code}<br/>
            </address>
          </span>
        </ListItem>
        <ListItem>
          <span>{`${copy.billing_address}:`}</span>
          <span>
            <address>
              {patientInfo.billing_address.address}<br/>
              {`${patientInfo.billing_address.locality}, ${patientInfo.billing_address.administrative_area}`}<br/>
              {patientInfo.billing_address.postal_code}<br/>
            </address>
          </span>
        </ListItem>
        <ListItem>
          <span>{copy.birthdate}:</span>
          <span>{new Date(patientInfo.birthdate).toLocaleDateString('en-US', dateOptions)}</span>
        </ListItem>
        <ListItem>
          <span>{copy.allergies}:</span>
          <span>{patientInfo.allergies.length > 0 ? patientInfo.allergies : 'None'}</span>
        </ListItem>
        <ListItem>
          <span>{copy.health_card}:</span>
          <span>{patientInfo.health_card}</span>
        </ListItem>
        <ListItem style={{ 'flexDirection': 'column' }} >
          <p style={{ 'margin': '0 0 8px' }} >{copy.primary_insurance_card}</p>
          <InsuranceCardWrapper>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }} >
              <img src='https://via.placeholder.com/130x80' alt={'Primary Insurance Card Front'} />
              <span>Front</span>
            </div>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }} >
              <img src='https://via.placeholder.com/130x80' alt={'Primary Insurance Card Back'} />
              <span>Back</span>
            </div>
          </InsuranceCardWrapper>
        </ListItem>
        <ListItem style={{ 'flexDirection': 'column' }} >
          <p style={{ 'margin': '0 0 8px' }} >{copy.secondary_insurance_card}</p>
          <InsuranceCardWrapper>
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }} >
              <img src='https://via.placeholder.com/130x80' alt={'Secondary Insurance Card Front'} />
              <span>Front</span>
            </div>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }} >
            <img src='https://via.placeholder.com/130x80' alt={'Secondary Insurance Card Back'} />
              <span>Back</span>
            </div>
          </InsuranceCardWrapper>
        </ListItem>
      </List>
    </PatientInfo>
  );
};