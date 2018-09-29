import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Dashboard from './Dashboard';

const Root = styled.div`
  text-align: center;
`;

export default class App extends Component {
  render() {
    return (
      <Root>
        <Dashboard />
      </Root>
    );
  };
};
