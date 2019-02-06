import { useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../../../helpers/socket';
import Battery from '../battery';
import Tilt from '../tilt';

function useDroneState() {
  const [droneState, updateDroneState] = useState({});
  useEffect(() => {
    socket.on('dronestate', updateDroneState);
    return () => socket.removeListener('dronestate');
  }, []);
  return droneState;
}

function useSocket() {
  const [status, updateStatus] = useState('DISCONNECTED');
  useEffect(() => {
    socket.on('status', updateStatus);
    return () => socket.removeListener('status');
  }, []);
  return status;
}

const DroneStateStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 4px;
  .status {
    grid-column: 1 / -1;
    text-align: center;
  }
`;

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  return (
    <DroneStateStyles>
      <p className="status">Status: {status}</p>
      <Battery battery={droneState.bat} />
      <Tilt
        pitch={droneState.pitch}
        roll={droneState.roll}
        yaw={droneState.yaw}
        height={droneState.h}
      />
    </DroneStateStyles>
  );
};

export default DroneState;