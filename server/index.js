const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:3001",
    method: ["POST", "GET"],
  },
});

io.on("connection", (socket) => {
  console.log("A user got connected");
  socket.on("message", (message, roomName) => {
    io.emit('message', message)
  });
});
