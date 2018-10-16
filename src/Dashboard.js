import React, { Component } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #DFE6EE;
  padding: 0 0 24px 0;
`;

const FlyWrapper = styled.div`
  display: flex;
  height: 64px;
  width: 64px;
  margin: auto;
`;

const Fly = styled.img`
  height: 64px;
  width: 64px;
`;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <FlyWrapper>
            <Fly src='fly.png' alt='Chevron' />
          </FlyWrapper>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}