import React from 'react';
import styled from 'styled-components';

// Import components
import Header from './components/Dashboard/Header';
import BackButton from './components/Dashboard/BackButton';
import PatientCard from './components/Dashboard/PatientCard';
import PatientInfo from './components/Dashboard/PatientInfo';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #DFE6EE;
  padding: 0 0 24px 0;
`;

const PatientWrapper = styled.div`
  display: flex;
  margin: 0 5%;
  width: 320px;
  flex-direction: column;
`;

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patientInfo: {
        credit_card: '3948 9384 0184 9384',
        mailing_address: {
          country: 'CA',
          name_line: 'Ralph Maamari',
          first_name: 'Ralph',
          last_name: 'Maamari',
          organisation_name: 'University of Toronto',
          administrative_area: 'ON',
          locality: 'Toronto',
          postal_code: 'M5S 3H7',
          address: '27 King\'s College Cir',
          address_2: ''
        },
        billing_address: {
          country: 'CA',
          name_line: 'Ralph Maamari',
          first_name: 'Ralph',
          last_name: 'Maamari',
          organisation_name: 'University of Toronto',
          administrative_area: 'ON',
          locality: 'Toronto',
          postal_code: 'M5S 3H7',
          address: '27 King\'s College Cir',
          address_2: ''
        },
        birthdate: 'Sun Sep 21 1997 00:00:00 GMT-0400 (Eastern Daylight Time)',
        allergies: [],
        health_card: '384-296-475'
      }
    };
  }

  render() {
    const lastPage = 'Patient List' // Will be dynamic from react-router history

    return (
      <React.Fragment>
        <Header />
        <ContentWrapper>
          <BackButton height={'36px'} >
            {`Back to ${lastPage}`}
          </BackButton>
          <PatientWrapper>
            <PatientCard patientName={this.state.patientInfo.mailing_address.name_line} />
            <PatientInfo patientInfo={this.state.patientInfo} />
          </PatientWrapper>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}