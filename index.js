const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.listen(8080, ()=> {
    console.log("listening to the port: 8080");
});