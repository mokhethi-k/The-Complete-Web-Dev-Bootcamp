import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;
let blogs = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.render("index.ejs", {blogs});
});

app.get("/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/add", (req, res) => {
    const {title, content} = req.body;
    blogs.push({title, content, id: blogs.length});
    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    blogs = blogs.filter(blog => blog.id !== id)
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`Server running from port ${PORT}`);
});