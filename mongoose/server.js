const http = require("http")
const app = require("./controller")
const server = http.createServer(app)
server.listen(600)