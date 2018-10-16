import React from 'react';
import styled from 'styled-components';

const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: auto;
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #DFE6EE;
  border-radius: 4px;
  background-color: #FFFFFF;
`;

const Header = styled.h1`
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  opacity: .38;
  color: #4A4A4A;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;  
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 16px 0 0 0;
  padding: 0 0 12px 0;
  border-bottom: 1px solid rgba(216, 216, 216, 0.5);
`;

const ListItemLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #4A4A4A;
  margin: 0 8px 0 0;
`;

const ListItemValue = styled.span`
  margin: 0 0 0 8px;
  text-align: right;
  font-size: 16px;
  color: #313541;
`;

const InsuranceCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  justify-content: space-between;
`;

const InsuranceCardLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #4A4A4A;
  margin: 0 0 8px 0;
`;

const InsuranceCardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InsuranceCardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InsuranceCardImage = styled.img``;

const InsuranceCardNote = styled.span`
  margin: 4px 0 0 0;
`;

// TODO: Write function to format fields so patientInfo can be iterated over

export default ({
  patientInfo
}) => {
  const copy = {
    credit_card: 'Credit Card',
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
          <ListItemLabel>
            {copy.birthdate}:
          </ListItemLabel>
          <ListItemValue>
            {new Date(patientInfo.birthdate).toLocaleDateString('en-US', dateOptions)}
          </ListItemValue>
        </ListItem>
        <ListItem>
          <ListItemLabel>
            {copy.credit_card}:
          </ListItemLabel>
          <ListItemValue>
            {patientInfo.credit_card}
          </ListItemValue>
        </ListItem>
        <ListItem>
          <ListItemLabel>
            {`${copy.mailing_address}:`}
          </ListItemLabel>
          <ListItemValue>
            <address>
              {patientInfo.mailing_address.address}<br/>
              {`${patientInfo.mailing_address.locality}, ${patientInfo.mailing_address.administrative_area}`}<br/>
              {patientInfo.mailing_address.postal_code}<br/>
            </address>
          </ListItemValue>
        </ListItem>
        <ListItem>
          <ListItemLabel>
            {`${copy.billing_address}:`}
          </ListItemLabel>
          <ListItemValue>
            <address>
              {patientInfo.billing_address.address}<br/>
              {`${patientInfo.billing_address.locality}, ${patientInfo.billing_address.administrative_area}`}<br/>
              {patientInfo.billing_address.postal_code}<br/>
            </address>
          </ListItemValue>
        </ListItem>
        <ListItem>
          <ListItemLabel>
            {copy.allergies}:
          </ListItemLabel>
          <ListItemValue>
            {patientInfo.allergies.length > 0 ? patientInfo.allergies : 'None'}
          </ListItemValue>
        </ListItem>
        <ListItem>
          <ListItemLabel>
            {copy.health_card}:
          </ListItemLabel>
          <ListItemValue>
            {patientInfo.health_card}
          </ListItemValue>
        </ListItem>
        <InsuranceCardWrapper>
          <InsuranceCardLabel>
            {copy.primary_insurance_card}
          </InsuranceCardLabel>
          <InsuranceCardContent>
            <InsuranceCardItem>
              <InsuranceCardImage src='https://via.placeholder.com/130x80' alt={'Primary Insurance Card Front'} />
              <InsuranceCardNote>
                Front
              </InsuranceCardNote>
            </InsuranceCardItem>
            <InsuranceCardItem>
              <InsuranceCardImage src='https://via.placeholder.com/130x80' alt={'Primary Insurance Card Back'} />
              <InsuranceCardNote>
                Back
              </InsuranceCardNote>
            </InsuranceCardItem>
          </InsuranceCardContent>
        </InsuranceCardWrapper>
        <InsuranceCardWrapper>
          <InsuranceCardLabel>
            {copy.secondary_insurance_card}
          </InsuranceCardLabel>
          <InsuranceCardContent>
            <InsuranceCardItem>
              <InsuranceCardImage src='https://via.placeholder.com/130x80' alt={'Secondary Insurance Card Front'} />
              <InsuranceCardNote>
                Front
              </InsuranceCardNote>
            </InsuranceCardItem>
            <InsuranceCardItem>
              <InsuranceCardImage src='https://via.placeholder.com/130x80' alt={'Secondary Insurance Card Back'} />
              <InsuranceCardNote>
                Back
              </InsuranceCardNote>
            </InsuranceCardItem>
          </InsuranceCardContent>
        </InsuranceCardWrapper>
      </List>
    </PatientInfo>
  );
};