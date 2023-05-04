require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const findRouter = require("./routes/find");
const saveRouter = require("./routes/save");
const updateRouter = require("./routes/update");

server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

// middleware or to set router
server.use("/api/find", findRouter);
server.use("/api/save", saveRouter);
server.use("/api/update", updateRouter);

server.get("/", (req, res) => {
  res.json({ msg: "Welcome to advanced populate" });
});

server.listen(process.env.PORT, () => {
  console.log(`Server connected....\nhttp://localhost:${process.env.PORT}`);
});
