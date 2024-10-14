const express = require("express");
const app = express();
const path = require("path");

app.use();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(8080, ()=> {
    console.log("listening to the port: 8080");
});