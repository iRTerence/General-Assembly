const io = require('socket.io')();

let players = {};

io.on('connection', function(socket) {
  console.log('Client connect to socket.io!');

  socket.on('register-player', function(initials) {
    // each socket has a unique id
    players[socket.id] = initials;
    io.emit('update-player-list', Object.values(players));
  });

  socket.on('add-circle', function(data) {
    io.emit('add-circle', data);
  });

  socket.on('clear-circles', function(data) {
    io.emit('clear-circles', data);
  });

  socket.on('disconnect', function() {
    delete players[socket.id];
    io.emit('update-player-list', Object.values(players));
  });
});

module.exports = io;
