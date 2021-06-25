const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require("./models");

// db.authenticate().then(() => {
//   console.log("connected to the database");
// });

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res, next) => {
  try {
    await res.send("<h1>Hello World!</h1>");
  } catch (err) {
    console.log("Something is wrong");
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
