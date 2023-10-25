const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "127.0.0.1",
    port: 3000,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  client.on("data", (data) => {
    const message = `Name: ${data}`;
    console.log(message);
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
  });

  return conn;
};


module.exports = { connect };
