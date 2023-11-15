function listen(io) {
    io.on("connection", socket => {
        console.log("User connected", socket.id)

        socket.on("message", (msg) => {
            console.log("message gotten")
            io.emit("message", `${socket.id}: ${msg}`)
        })

        socket.on("typing", () => {
          socket.broadcast.emit("typing", `${socket.id}: is typing....`);
        });
    });
}


module.exports = {
    listen
}