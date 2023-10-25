const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 3000,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("event name", functionThatDoesSomething);

  conn.on("event name", () => {
    // code that does something
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
  });

  return conn;
};

console.log("Connecting ...");
connect();