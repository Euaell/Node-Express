const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const dishRouter = require("./routes/dishRouter");

const hostname = "localhost";
const port = 4000;

const app = express();
app.use(morgan("dev"));
//parsers the body of the request into json format
app.use(bodyParser.json());


app.use("/dishes", dishRouter);
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