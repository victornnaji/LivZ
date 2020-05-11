const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const cors = require('cors');

const http = require('http').createServer(app);
const io = require('socket.io')(http);
// app.use(cors());

let users = [];
let rooms = [];

io.on('connection', (socket) => {
    users.push(socket.id);
    // console.log(`${users.length} users connected`);
  
    socket.on('createChatRoom', ({ room }) => {
      // console.log(room);
      rooms.push(room);
      socket.join(room);
      io.sockets.in(room).emit('roomCreated', true);
    });
  
    socket.on('joinRoom', ({ room, username}) => {
      if (rooms.includes(room)) {
        socket.join(room);
        io.sockets.in(room).emit('message', {
          username,
          message: `joined the stream`,
          alert: true,
        });
      } else {
        socket.emit('errorMsg', 'Room doesn\'t exist, invalid URL')
      }
    });
  
    socket.on('sendChatMessage', ({ room, username, message, userIdentity}) => {
      if (rooms.includes(room)) {
        io.sockets.in(room).emit('message', {username,message,userIdentity})
      }
    });
  
    socket.on('disconnect', () => {
      users.splice(socket.id, 1);
      // console.log(`user disconnected, ${users.length} left`);
    })
});


  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/generate-token/:roomname/:identity', cors() , (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // req.setHeader('Access-Control-Allow-Origin', '*');
    // Substitute your Twilio AccountSid and ApiKey details
    const ACCOUNT_SID = process.env.ACCOUNT_SID;
    const API_KEY_SID = process.env.API_KEY_SID;
    const API_KEY_SECRET = process.env.API_KEY_SECRET;
  
    // Set the Identity of this token
    let identity = req.params.identity;
  
    // Grant access to Video
    const grant = new VideoGrant({
      room: req.params.roomname
    });
  
    // Create an Access Token
    let token = new AccessToken(
      ACCOUNT_SID,
      API_KEY_SID,
      API_KEY_SECRET,
    );
    token.addGrant(grant);
    token.identity = identity;
  
    // Serialize the token as a JWT
    // const jwt = token.toJwt();
    // res.status(200).json({ jwt });
    res.send(token.toJwt());
    
  });

  app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'build/index.html')));
  
  http.listen(PORT, console.log(`server started on port ${PORT}`));