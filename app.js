const express = require("express");
const app = express();

app.get("/");

app.listen(8080, ()=> {
    console.log("listening to the port 8080");
});