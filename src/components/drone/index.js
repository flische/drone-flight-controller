import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import socket from '../../helpers/socket';
import Battery from '../battery';
import Tilt from '../tilt';

const DroneStateStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  .status {
    grid-column: 1 / -1;
    text-align: center;
  }
`;

export default function DroneState(props) {

  const [ droneState, updateDroneState ] = useState({});

  useEffect(() => {
    function useDroneState() {
      socket.on('droneState', updateDroneState);
      return () => socket.removeListener('droneState');
    } 
    useDroneState();
    return droneState;
  }, []);
  

  const [status, updateStatus] = useState('DISCONNECTED');

  useEffect(() =>  {
    function handleStatusUpdate() {
      socket.on('status', updateStatus);
      return () => socket.removeListener('status');
    }
    handleStatusUpdate();
    return status;
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
