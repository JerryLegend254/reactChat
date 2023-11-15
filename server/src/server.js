const http = require("http")
require("dotenv").config()
const io = require("socket.io")
const socket = require("./sockets")
const app = require("./app")


const PORT = process.env.PORT || 8080

const httpServer = http.createServer(app)
const socketServer = io(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
})

httpServer.listen(PORT, () => console.log(`Server starting running at http://localhost:${PORT}`))
socket.listen(socketServer)