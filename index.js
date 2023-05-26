const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usersRoute = require('./routes/usersRoutes')
const chatRoute = require('./routes/chatRoute')
const messageRout = require('./routes/messageRoute')
const app = express();
dotenv.config();
const cors = require("cors");
const corsOption = {
  origin: '*',
};
app.use(cors(corsOption));
const hostname = "192.168.100.94"
//connections
const server_port = process.env.PORT || 5000;
const db_url = process.env.DB_URL;

//middle ware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


mongoose
  .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen({port:server_port, host:hostname} , () => {
      console.log("app is listening  on", `http://localhost${server_port}`);
    })
  )
  .catch((error) => console.log(error));


  //routes
  app.use('/users', usersRoute)
  app.use('/chats', chatRoute)
  app.use('/messages', messageRout)