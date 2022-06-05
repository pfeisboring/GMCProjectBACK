const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB.js");
const router = require("./routes/film");
const routerr = require("./routes/commentaire");
const routerrr = require("./routes/reclamation");
const routes = require("./routes/user");

app.use(express.json());
connectDB();

app.use("/api/films", router);
app.use("/api/comments", routerr);
app.use("/api/reclamations", routerrr);
app.use("/api/user", routes);

const port = 5000;
app.listen(port, (err) =>
  err
    ? console.log("ERROOOOR!!!", err)
    : console.log(`this server is running on port : ${port}`)
);
