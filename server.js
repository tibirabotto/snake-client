const net = require("net");

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: "127.0.0.1",
        port: 3000,
    });

    conn.on('data', (data) => {
        console.log(`Received: ${data} from ${socket.remoteAddress}:${socket.remotePort}`);
    });

    conn.on('end', () => {
        console.log('Client disconnected');
    });

    return conn;
};


module.exports = { connect };