const statusDiv   = document.querySelector('#status');
const sendButton  = document.querySelector('#sendButton');
const textMessage = document.querySelector('#txtMessage');

const socket = io();

socket.on('connect', () => {
  console.log('Cliente conectado desde el HTML');
  statusDiv.innerText = 'Conectado';
  statusDiv.classList.remove('bg-danger');
  statusDiv.classList.add('bg-success');
});

socket.on('disconnect', () => {
  console.log('Cliente desconectado desde el HTML');
  statusDiv.innerText = 'Desconectado';
  statusDiv.classList.remove('bg-success');
  statusDiv.classList.add('bg-danger');
});

socket.on('send-message', payload => {
  console.log('mensaje recibido desde HTML');
  console.log('paylaod: ', payload);
});

sendButton.addEventListener('click', () => {
  const message = textMessage.value;
  const payload = {
    message,
    id: 'aLLOids4wef13iasdaWZXaSfO32sad',
    date: new Date().getTime()
  }

  socket.emit('send-message', payload, (id) => {
    console.log('ID desde el server:', id);
  });

});