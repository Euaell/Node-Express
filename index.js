const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 4000;

const app = express();
app.use(morgan("dev"));
//parsers the body of the request into json format
app.use(bodyParser.json());

app.all("/dishes", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
});
app.get("/dishes", (req, res, next) => {
    res.end("Will send all the dishes to you.");
});
app.post("/dishes", (req, res, next) => {
    res.end("will add the dish: " + req.body.name
    + " with details: " + req.body.description);
});
app.put("/dishes", (req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported!");
});
app.delete("/dishes", (req, res, next) => {
    res.end("Deleting all dishes");
});
//including :ids
app.get("/dishes/:dishID", (req, res, next) => {
    res.end("Will send details of dish: " + 
    req.params.dishID);
});
app.post("/dishes/:dishID", (req, res, next) => {
    res.statusCode = 403;
    res.end("post operation not supported!");
});
app.put("/dishes/:dishID", (req, res, next) => {
    res.write("updating the dish: " + req.params.dishID);
    res.end("will update the dish: " + req.body.name 
        + " with details: " + req.body.description);
});
app.delete("/dishes/:dishID", (req, res, next) => {
    res.end("Deleting dish: " + req.params.dishID);
});

app.use(express.static(__dirname+"/public"));

app.use((req, res, next) => {
    // console.log(req.headers);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is Express server.</h1></body></html>");
});
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});