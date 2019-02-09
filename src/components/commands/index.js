import React from 'react';
import styled from 'styled-components';
import socket from '../../helpers/socket';

const CommandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  border: 2px solid darkblue;
  grid-gap: 2px;
  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    background: teal;
    border: 2px solid darkblue;
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
      color: darkblue;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
      font-size: 1.5rem;
    }
    &.land {
      background: orange;
      color: darkblue;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
      font-size: 1.5rem;
    }
    &.emergency {
      background: yellow;
      text-transform: uppercase;
      color: red;
    }
    &.rotate {
      background: lightblue;
      color: black;
    }
    &.height {
      background: #00fff9;
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

  .flip {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: span 3;
  }

  h2 {
    grid-column: 1 / -1;
    background: magenta;
    border: 2px solid darkblue;
    margin: 0 0 0 0;
    font-size: 1.25rem;
    text-align: center;
    padding: 0.2rem;
    color: navy;
  }
`;

function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
}

const amount = 15;

const Commands = () => (
  <CommandGrid>
    <button className="takeoff" onClick={sendCommand('takeoff')}>
        TAKE OFF
      </button>
    <button onClick={sendCommand(`forward ${amount}`)}>
      <span className="symbol">↑</span> Forward 6"
    </button>
    <button className="land" onClick={sendCommand('land')}>
        LAND
    </button>
    <button onClick={sendCommand(`left ${amount}`)}>
      <span className="symbol">←</span> Left 6"
    </button>
    <div className="center">
      <button className="rotate" onClick={sendCommand('ccw 90')}>
        Rotate <span className="symbol">⟲</span> 90°
      </button>
      <button className="rotate" onClick={sendCommand('cw 90')}>
        Rotate <span className="symbol">⟳</span> 90°
      </button>
      <button className="emergency" onClick={sendCommand('emergency')}>
        emergency land
      </button>
    </div>
    <button onClick={sendCommand(`right ${amount}`)}>
      <span className="symbol">→</span>
      Right 6"
    </button>
    <button className="height" onClick={sendCommand(`up ${amount}`)}>
      Elevate <span className="symbol">⤒</span> 6"
    </button>
    <button onClick={sendCommand(`back ${amount}`)}>
       <span className="symbol">↓</span> Reverse 6"
    </button>
    <button className="height" onClick={sendCommand(`down ${amount}`)}>
     Lower <span className="symbol">⤓</span> 6"
    </button>
    <h2> Flips & Tricks </h2>
    <div className="flip">
      <button onClick={sendCommand('flip l')}>Barrel Roll <span className="">←</span></button>
      <button onClick={sendCommand('flip f')}>Front Flip</button>
      <button onClick={sendCommand('flip b')}>Back Flip</button>
      <button onClick={sendCommand('flip r')}>Barrel Roll <span className="">→</span></button>
    </div>
  </CommandGrid>
);

export default Commands;