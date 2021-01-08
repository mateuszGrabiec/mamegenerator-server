const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const base64Img= require('base64-img');

const app = express();
app.use(bodyParser.json({limit:'50mb'}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors())

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/template", (req, res) => {
  let meme = req.body;
  res.json(meme);
});

app.post("/save", (req, res) => {
  let meme = req.body;
  console.log(meme);
  res.json(meme);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
