const express = require('express');
const router = express.Router();
const { addPage } = require('../views');

// const wikiRouter = require("./routes/wiki");
// const usersRouter = require("./routes/users");

router.get('/', (req, res, next) => {
  res.send('got to get /wiki/');
});

router.post('/', (req, res, next) => {
  res.send('got to post /wiki/');
});

router.get("/add", (req, res) => {
    res.send(addPage());
});

module.exports = router;