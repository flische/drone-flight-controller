import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import socket from '../../helpers/socket';
import Battery from '../battery';
import Tilt from '../tilt';

const DroneStateStyles = styled.div`
  float: left
  position: absolute;
  top: 20%;
  width: 20vw;
  text-align: center;
  .status {
    text-align: center;
    color: green;
    margin-left: 50px;
  }
`;

export default function DroneState(props) {

  const [ droneState, updateDroneState ] = useState({});

  useEffect(() => {
    function useDroneState() {
      socket.on('droneState', updateDroneState);
      socket.removeListener('droneState');
      return droneState;
      // return () => socket.removeListener('droneState');
    } 
    useDroneState();
    // return droneState;
  }, []);
  

  const [status, updateStatus] = useState('DISCONNECTED');

  useEffect(() =>  {
    function handleStatusUpdate() {
      socket.on('status', updateStatus);
      socket.removeListener('status');
      return status;
      // return () => socket.removeListener('status');
    }
    handleStatusUpdate();
    // return status;
  }, []);


  return (
    <DroneStateStyles>
      <p className="status">Status: {status}</p>
      <Battery battery={droneState.battery} />
      <Tilt
        pitch={droneState.pitch}
        roll={droneState.roll}
        yaw={droneState.yaw}
        height={droneState.height}
      />
    </DroneStateStyles>
  );
}
