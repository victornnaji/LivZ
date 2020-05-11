// var app = require('http').createServer();
// var io = module.exports.io = require('socket.io')(app)

// var PORT = process.env.PORT || 5000

// const socketManager = require('./socketManager')

// io.on('connection', socketManager)

// app.listen(PORT, () => {
//   console.log("Connected to port: "+PORT);
// })

//let users = [];
// let rooms = [];

// io.on('connection', (socket) => {
//     users.push(socket.id);
//     // console.log(`${users.length} users connected`);
  
//     socket.on('createChatRoom', ({ room }) => {
//       // console.log(room);
//       rooms.push(room);
//       socket.join(room);
//       io.sockets.in(room).emit('roomCreated', true);
//     });
  
//     socket.on('joinRoom', ({ room, username, color}) => {
//       if (rooms.includes(room)) {
//         socket.join(room);
//         io.sockets.in(room).emit('message', {
//           username,
//           message: `joined the stream`,
//           color
//         });
//       } else {
//         socket.emit('errorMsg', 'Room doesn\'t exist, invalid URL')
//       }
//     });
  
//     socket.on('sendChatMessage', ({ room, username, message, color}) => {
//       // console.log(room, username, message, color);
//       if (rooms.includes(room)) {
//         io.sockets.in(room).emit('message', {
//           username,
//           message,
//           color
//         })
//       }
//     });
  
//     socket.on('disconnect', () => {
//       users.splice(socket.id, 1);
//       // console.log(`user disconnected, ${users.length} left`);
//     })
//   });
