const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require("./models");
const wikiRouter = require('./routes/wiki');

// app.use('/users', usersRouter);

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

app.use('/wiki', wikiRouter);

async function init() {
  await db.sync({force: true});
  await db.close(); }
init ();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
