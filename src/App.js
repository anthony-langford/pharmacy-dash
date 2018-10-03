import React, { Component } from 'react';
import styled from 'styled-components';
import Dashboard from './Dashboard';

const Root = styled.div`
  height: 100%;
  background-color: #FAFBFC;
`;

export default class App extends Component {
  render() {
    return (
      <Root>
        <Dashboard />
      </Root>
    );
  }
}
