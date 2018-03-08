<h1>NeeBo</h1>
An RC car controlled by Arduino, Pi, Express, and JS!

<h2>What is it?</h2>
This is my project I worked on for my final project for Digital Crafts Demo Day.
<ul>
  <li>Its an Elegoo Robot Car kit that uses Arduino Uno to control the motors.</li>
  <li>Raspberry Pi runs a web server using Express to receive commands from a web browser or dualshock controller.</li>
</ul>

<h2>Built With</h2>
<ul>
  <li>JavaScript</li>
  <li>jQuery</li>
  <li>HTML5/CSS3</li>
  <li>Express</li>
  <li>Arduino IDE</li>
  <li>WebSockets</li>
  <li>SerialPort NPM</li>
  <li>DualShock-Controller NPM</li>
  <li>Pi Motion</li>
</ul>

<h2>Process</h2>
<ol>
  <li><a href="#concept">Concept</a></li>
  <li><a href="planning">Planning</a></li>
  <li><a href="execution">Execution</a></li>
  <li><a href="challenges">Challenges</a></li>
</ol>

<h3 class="concept">1. Concept</h3>
 I originally had a tough time coming up with a project. I decided to put two of my loves together, cars and programming.
 I decided to get a robot car kit and assemble it and have it controlled over the web using Raspberry Pi. I intended to create something close to a "ground drone."
 
<h3 class="planning">2. Planning</h3>
 After deciding on my project, I needed to find an affordable car kit that would work for my project. 
 I decided to purchase the Elegoo Robot Car Kit that uses an Arduino and L298 board to control the motors and various other functions.
 I then had to find a Pi and decide how it would be controlled. I went with a web page with simple arrow buttons to click that would send a signal to the Pi server which in turn sends a signal to the Arduino.
 I also thought a good idea would be to have a Playstation 4 DualShock controller would be a nice feature to control the car.

<h3 class="execution">3. Execution</h3>
  First, I had to assemble the car kit and learn how to program the Arduino's firmware from the Arduino IDE. 
  Once I understood how to give the Arduino commands, I had to set up a Pi to run an Express server to receive info and also render the page whenever a client entered the server IP/PORT address in the browser.
  
  Here on the Pi server is where Ajax requests are received from the WEB UI. These AJAX requests then send a string with the intended command to the Arduino using SerialPort NPM. 
  After my basic controls were working, I began setting up a Pi Motion Server that will automatically run the Pi Camera and serve this on port:8081 of the Pi.
  I achieved this by following at this <a href="https://hackernoon.com/spy-your-pet-with-a-raspberry-pi-camera-server-e71bb74f79ea">tutorial</a>.
  This video stream is then embedded into the HTML page using iframe. Unfortunately there is a large delay in signal due to the Pi Camera recording in H.264 and this has to be encoded to be able to stream on a web page.
  
  After getting the camera stream to work, I then found a way to connect a dualshock controller to control the RC's movement using websockets. 
  The dualshock controller is extremely sensitive and sends a lot of data. To counter so much data, in the websocket client-side I recorded the controller's left stick's y-axis and right stick's x-axis in their own arrays. 
  Once the array is an index of 25, it then takes the last number of the index and checks that number's position to send the proper string through the websocket which the server then writes to the Arduino directly.

<h3 class="challenges">4. Challenges</h3>
