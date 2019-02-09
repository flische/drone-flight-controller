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
  span {
    background: orange;
  }
`;

const Tilt = ({ pitch, roll, yaw, height }) => (
  <TiltWrap>
    <span>Pitch: {pitch}</span>
    <span>Roll: {roll}</span>
    <span>Yaw: {yaw}</span>
    <span>Height: {height / 100}M</span>
  </TiltWrap>
);

Tilt.defaultProps = {
  pitch: 0,
  roll: 0,
  yaw: 0,
  height: 0,
};

export default Tilt;