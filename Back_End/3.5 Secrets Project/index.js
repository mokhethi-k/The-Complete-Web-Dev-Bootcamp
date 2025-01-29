//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";


const app = express();
const PORT = 3000;
let pass = "";
let auth = false;
const __dirname = dirname(fileURLToPath(import.meta.url));

function passwordComp (req,res, next) {
    pass = req.body["password"];
    if (pass === "ILoveProgramming") {
        auth = true;
    }
    console.log(`Your password is: ${pass}`);
    next();
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.use(passwordComp);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (auth) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});

app.listen(PORT, () => {
    console.log(`Listening from port ${PORT}`);
});