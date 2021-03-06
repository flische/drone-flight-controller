
# Drone Flight Controller 

## Description

The motivation behind this application came about when I signed up for and participated in the [IBM Developer Drone Challenge](https://developer.ibm.com/blogs/2018/11/12/win-a-drone-program-a-drone-change-the-world/). At first, I was extremely excited to delve into the worlds of Machine Learning and IoT (Internet of Things) for the first time. After successfully completing the challenge, I was elated to find out that I was one of the 2,000 lucky winners of a FREE drone courtesy of IBM! 

Upon receiving my Tello Drone, I was able to continue the [IBM Developer Drone Challenge](https://developer.ibm.com/blogs/2018/11/12/win-a-drone-program-a-drone-change-the-world/) and proceeded to learn about [Node-RED](https://nodered.org/), a browser-based visual programming tool for wiring together any combination of hardware devices, APIS and online services (Internet of Things).  

Feel free to take a look at my documentation here: 
 * [Node-RED Fundamentals](https://docs.google.com/document/d/1DFHeSo29gwatkKnt4UGsEvBJAWsOynWF5ndSrw5Zp0I/edit?usp=sharing)
 * [How to use the Node-RED editor here](https://docs.google.com/document/d/1inoEIhQaOFAqo5Qo760CqlliSwFb64CJyqrscIOap34/edit?usp=sharing)

I utilized my newfound knowledge of Node-RED to successfully create a Commands Interface that would send commands to the Tello Drone as well as a Telemetry Interface that would receive live-time data from the drone and display it. 

This time around, I wanted to build out the software in JavaScript with ReactJS and Node.js. This gave me the perfect excuse to test out a few libraries / tools that I have been aching to implement on a project: React's new [Hooks](https://reactjs.org/docs/hooks-intro.html) feature, Styled Components for styling and [Socket.IO](https://socket.io/) for Web Sockets.  

## Technologies Used: 

* ReactJS v16.8.0-alpha.1a (with React Hooks!) [Feel free to take a look at my documentation on React Hooks here!](https://docs.google.com/document/d/19EVvSyJFUSfULGackoqcyG2b9O_hRoBkZvj2zFiKiSc/edit?usp=sharing)
* Node.js and UDP4 sockets (via dgram) for communicating with the Tello Drone 
* Socket.IO web sockets for sending data to / from the browser
* Styled Components for styling [Learn more about Styled Components here!](https://www.styled-components.com/)

## Hardware 

* [Tello Drone](https://www.ryzerobotics.com/tello)
* [Tello Drone Commands SDK](https://dl-cdn.ryzerobotics.com/downloads/tello/20180910/Tello%20SDK%20Documentation%20EN_1.3.pdf)

## Instructions

These instructions assume that you have your own Tello Drone that uses the same SDK (see above). I strongly advise that you read through the Tello SDK as well as the Tello's Safety Guidelines before proceeding.

* In your IDE, navigate to the project's root directory
* In your terminal, run the command 'npm start' to start the local server
* Open your web browser and navigate to localhost:3000 (normally, the npm start command will do this for you)
* Turn on the Tello Drone
* On your computer, connect to the drone's WiFi 
* In your terminal, open a new tab / window. Navigate to the backend folder (or wherever the file flight.js is located) then run 'node flight.js' to connect to the drone
* If connected successfully, you should see: "Status: CONNECTED" or "Status: OK" as well as real-time Telemetry data appearing
* Time to fly! Have fun and be safe! 