const express = require("express");
const { PORT } = require("./config/server-config");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes");
require("./models");
const setupAndStartServer = async () => {
  // ? creating the express obj
  const app = express();
  // ? Creating middleware for body-parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  //? my routes
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`server listening on ${PORT}`);
  });
};

setupAndStartServer();
