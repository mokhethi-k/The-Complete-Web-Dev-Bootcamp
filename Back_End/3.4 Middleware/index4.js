import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let bandName = "";

function bandNameGenerator (req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bandNameGenerator);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`
    <h1>Your band name is:</h1>
    <h3>${bandName}</h3>
  `); 
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
