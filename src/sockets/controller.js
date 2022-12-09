
const socketController = (socket) => {

  console.log('Cliente conectado - backend');
  socket.on('disconnect', () => {
    // console.log('Cliente desconectado - backend');
  });

  socket.on('send-message', (payload, callback) => {
    const id = 123456;
    callback( id );
    // this.io.emit('send-message', id);

  });

}


module.exports = {
  socketController
};