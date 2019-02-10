import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import socket from '../../helpers/socket';
import Battery from '../battery';
import Tilt from '../tilt';

const DroneStateStyles = styled.div`
   /* float: left */
  left: 0;
  position: absolute;
  top: 20%;
  width: 20vw;
  text-align: center;
  .status {
    text-align: center;
    color: green;
    margin-left: 50px;
  }

  @media (max-width: 700px) {
    top: 540px;
    width: 50%;
    left: 20%;
  }
`;

// export default function DroneState(props) {

  function useDroneState() {
    const [ droneState, updateDroneState ] = useState({});
    useEffect(() => {
      socket.on('droneState', updateDroneState);
      return () => socket.removeListener('droneState');
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

  // useEffect(() => {
  //   function useDroneState() {
  //     socket.on('droneState', updateDroneState);
  //     socket.removeListener('droneState');
  //     return droneState;
  //     // return () => socket.removeListener('droneState');
  //   } 
  //   useDroneState();
  //   // return droneState;
  // }, []);
  

  // const [status, updateStatus] = useState('DISCONNECTED');

  // useEffect(() =>  {
  //   function handleStatusUpdate() {
  //     socket.on('status', updateStatus);
  //     socket.removeListener('status');
  //     return status;
  //     // return () => socket.removeListener('status');
  //   }
  //   handleStatusUpdate();
  //   // return status;
  // }, []);


//   return (
//     <DroneStateStyles>
//       <p className="status">Status: {status}</p>
//       <Battery battery={droneState.battery} />
//       <Tilt
//         pitch={droneState.pitch}
//         roll={droneState.roll}
//         yaw={droneState.yaw}
//         height={droneState.height}
//       />
//     </DroneStateStyles>
//   );
// }
