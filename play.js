const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 3000,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("name", (name) => {
    console.log("Server says: ", name);
  });

  conn.on("connect", () => {
    conn.write("Hello from client!");
  });


  return conn;
};

console.log("Connecting ...");
connect();