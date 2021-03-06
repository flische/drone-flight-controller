import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DroneState from './components/drone';
import Commands from './components/commands';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-family: 'Operator Mono', monospace;
    font-weight: 900;
    font-size: 1rem;
    background: lightgrey;
    color: darkblue;
  }
  * {
    font-family: 'Operator Mono', monospace;
    box-sizing: border-box;
  }
  h2 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const PageStyles = styled.div`
  max-width: 550px;
  max-height: 600px;
  margin: 10px auto 0 auto;
  position: fixed;
  left: 25%;

  @media (max-width: 700px) {
    max-width: 500px;
    margin: 5px auto 0 auto;
    position: relative;
    left: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <DroneState />
        <PageStyles>
          <h2>Tello Drone Flight Controller</h2>
          <GlobalStyle />
          <Commands />
        </PageStyles>
      </Fragment>
    );
  }
}

export default App;
