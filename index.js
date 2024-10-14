const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "Binay Bhusan",
        content: "Do Hard Work",
    }
];

app.get("/server", (req, res) => {
    res.send("server is working well");
});

app.listen(8080, ()=> {
    console.log("listening to the port: 8080");
});