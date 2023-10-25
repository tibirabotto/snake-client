const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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
