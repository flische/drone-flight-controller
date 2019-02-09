import React from 'react';
import styled from 'styled-components';

const TiltWrap = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  overflow: hidden;
  grid-gap: 4px;
  margin-left: 50px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, span 2);
  div {
    background: orange;
    border: 2px groove darkblue;
  }
  h3 {
    margin-bottom: 2px;
  }
`;

const Tilt = ({ pitch, roll, yaw, height }) => (
  <TiltWrap>
      <h3>Telemetry</h3>
      <div>Pitch: {pitch}</div>
      <div>Roll: {roll}</div>
      <div>Yaw: {yaw}</div>
      <div>Height: {height / 100}M</div>
  </TiltWrap>
);

Tilt.defaultProps = {
  pitch: 0,
  roll: 0,
  yaw: 0,
  height: 0,
};

export default Tilt;