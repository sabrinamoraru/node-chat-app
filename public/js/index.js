var socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit("createMessage", {
    from: "Sabrina",
    text: "Yup, that works for me."
  });
});

// socket.emit("createEmail", {
//   to: "alin@example.com",
//   text: "Hey! This is Sabrina."
// });

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

// socket.on("newEmail", function(email) {
//   console.log("New email", email);
// });

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
