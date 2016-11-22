var socket = io();

socket.on('connect', function() {
  console.log("Connected to socket.io server!");
});

socket.on('message', function(message) {
  console.log("New Message: " + message.text);
  var newmessage = document.createElement("div");
  newmessage.appendChild(document.createTextNode(message.text));
  document.getElementById('smname').appendChild(newmessage);
})

function deploy() {
  var chatMessage = document.getElementById('value').value;
  socket.emit("message", { text: chatMessage });
}
