const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.listen(3000, () => {
    console.log("Listening on 3000");
});

app.get("/", (request, response) => {
    response.send("GET request");
});

app.put("/", (request, response) => {
    response.send("PUT request");
});

app.post("/", (request, response) => {
    response.send("POST request");
});

app.delete("/", (request, response) => {
    response.send("DEL request");
});
