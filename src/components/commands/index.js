import React from 'react';
import styled from 'styled-components';
import socket from '../../helpers/socket';

const CommandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  border: 2px solid darkblue;
  grid-gap: 3px;
  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    background: #fe2c70;
    border: 2px groove darkblue;
    color: white;
    font-size: 1rem;
    position: relative;
    &:active {
      top: 2px;
    }
    &:focus {
      outline: 0;
      border-color: #ffc600;
    }
    &.takeoff {
      background: #00ff00;
      color: black;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
      font-size: 1.5rem;
    }
    &.land {
      background: orange;
      color: black;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
      font-size: 1.5rem;
    }
    &.emergency {
      background: yellow;
      text-transform: uppercase;
      color: darkred;
    }
    &.rotate {
      background: #00fff9;
      color: black;
    }
    &.height {
      background: #fff;
      color: black;
    }
    span.symbol {
      display: block;
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .center {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 1fr;
    button:last-child {
      grid-column: span 2;
    }
  }

  h2 {
    grid-column: 1 / -1;
    background: #ffc600;
    margin: 0;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    color: darkblue;
  }
`;

function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
}

const amount = 100;
const Commands = () => (
  <CommandGrid>
    {/* <button className="rotate" onClick={sendCommand('ccw 90')}>
      rotate <span className="symbol">⟲</span> 90°
    </button> */}
    <button className="takeoff" onClick={sendCommand('takeoff')}>
        Take Off
      </button>
    <button onClick={sendCommand(`forward ${amount}`)}>
      <span className="symbol">↑</span> Forward {amount}cm
    </button>
    <button className="land" onClick={sendCommand('land')}>
        Land
    </button>
    {/* <button className="rotate" onClick={sendCommand('cw 15')}>
      rotate <span className="symbol">⟳</span> 15°
    </button> */}
    <button onClick={sendCommand(`left ${amount}`)}>
      <span className="symbol">←</span> Left {amount}cm
    </button>
    <div className="center">
      {/* <button className="takeoff" onClick={sendCommand('takeoff')}>
        Take Off
      </button> */}
      <button className="rotate" onClick={sendCommand('ccw 90')}>
        Rotate <span className="symbol">⟲</span> 90°
      </button>
      {/* <button className="land" onClick={sendCommand('land')}>
        Land
      </button> */}
      <button className="rotate" onClick={sendCommand('cw 15')}>
        Rotate <span className="symbol">⟳</span> 15°
      </button>
      <button className="emergency" onClick={sendCommand('emergency')}>
        !!! emergency !!!
      </button>
    </div>
    <button onClick={sendCommand(`right ${amount}`)}>
      <span className="symbol">→</span>
      Right {amount}cm
    </button>
    <button className="height" onClick={sendCommand(`up ${amount}`)}>
      Elevate <span className="symbol">⤒</span> {amount}cm
    </button>
    <button onClick={sendCommand(`back ${amount}`)}>
       <span className="symbol">↓</span> Backward {amount}cm
    </button>
    <button className="height" onClick={sendCommand(`down ${amount}`)}>
     Lower <span className="symbol">⤓</span> {amount}cm
    </button>
    <h2> Drone Flip Commands </h2>
    {/* <div className="center"> */}
      <button onClick={sendCommand('flip l')}>Flip Left</button>
      <button onClick={sendCommand('flip r')}>Flip Right</button>
      <button onClick={sendCommand('flip b')}>Flip Back</button>
      <button onClick={sendCommand('flip f')}>Flip Forward</button>
    {/* </div> */}
  </CommandGrid>
);

export default Commands;