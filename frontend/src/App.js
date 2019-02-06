import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DroneState from '../frontend/src/components/drone';
import Commands from '../frontend/src/components/commands';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-family: 'Operator Mono', monospace;
    font-weight: 900;
    font-size: 1rem;
    background:#193549;
    color: white;
  }
  * {
    font-family: 'Operator Mono', monospace;
    box-sizing: border-box;
  }
  h2 {
    text-align: center;
    font-style: italic;
  }
`;

const PageStyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <PageStyles>
        <h2>Tello Drone Flight Controller</h2>
        <GlobalStyle />
        <Commands />
        <DroneState />
      </PageStyles>
    );
  }
}

export default App;
