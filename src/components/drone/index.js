import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../../helpers/socket';
import Battery from '../battery';
import Tilt from '../tilt';

function DroneState(props) {

  const [ droneState, updateDroneState ] = useState({});

  function useDroneSocket(message){
    socket.on('droneState', message);
    return () => socket.removeListener('droneState');
    // return droneState;
    }
  

  useEffect((droneState) => {
    useDroneSocket();
    updateDroneState(droneState);
    return droneState;
  });
  
  const [ status, updateStatus ] = useState('DISCONNECTED');

  function useStatusSocket(message){
    socket.on('status', message);
    return () => socket.removeListener('status');
    // return message;
  }

  useEffect((status) => {
    useStatusSocket();
    updateStatus(status);
    return status;
  });

  return (
    <DroneStateStyles>
      <p className="status">Status: {status}</p>
      <Battery battery={props.battery} />
      <Tilt
        pitch={props.pitch}
        roll={props.roll}
        yaw={props.yaw}
        height={props.height}
      />
    </DroneStateStyles>
  );
}

const DroneStateStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  .status {
    grid-column: 1 / -1;
    text-align: center;
  }
`;

export default DroneState;