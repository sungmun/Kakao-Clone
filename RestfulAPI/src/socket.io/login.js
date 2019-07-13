export default socket => {
  socket.on("login", message => {
    const { token, profile } = message;
    console.log(token);
    socket.emit("Success socket server login");
  });
};
