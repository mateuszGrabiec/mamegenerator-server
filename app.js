const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const base64Img = require("base64-img");
const Image = require("./models/Image");
const mongoose = require("mongoose");
//mongodb://localhost:27017/myapp

mongoose.connect('mongodb://admin:admin@localhost:27017/memegenerator',{ useNewUrlParser: true , useUnifiedTopology: true});

const app = express();
app.use(bodyParser.json({limit: "50mb"}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/template", (req, res) => {
  let meme = req.body;
  res.json(meme);
});

app.post("/save", (req, res) => {
  let meme = req.body.meme;
  // let buffer = Buffer.from(meme.split(",")[1],'base64');
  Image.create({name:'XDD',desc:'XDDDDDD',img:meme})
  // newItem.img.contentType = "image/png";
  // newItem.save();
  res.json(meme);
});

app.get("/memes", async(req,res)=>{
  await Image.find({}, function (err, images) {
    res.send(images);
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
