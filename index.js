const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: "1a",
        username: "Binay Bhusan",
        content: "Do Hard Work"
    },
    {
        id: "2b",
        username: "kunjabihari",
        content: "wake up early"
    },
    {
        username: "manash",
        content: "Follow your passion"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content } = req.body;
    posts.push({ username, content});
    res.redirect("/posts");
});

app.listen(8080, ()=> {
    console.log("listening to the port: 8080");
});