const express = require("express");
const { url } = require("inspector");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(8080, ()=> {
    console.log("listening to the port: 8080");
});