const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Will send all the dishes to you.");
})
.post((req, res, next) => {
    res.end("will add the dish: " + req.body.name
    + " with details: " + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported!");
})
.delete((req, res, next) => {
    res.end("Deleting all dishes");
});


// //including :ids
// app.get("/dishes/:dishID", (req, res, next) => {
//     res.end("Will send details of dish: " + 
//     req.params.dishID);
// });
// app.post("/dishes/:dishID", (req, res, next) => {
//     res.statusCode = 403;
//     res.end("post operation not supported!");
// });
// app.put("/dishes/:dishID", (req, res, next) => {
//     res.write("updating the dish: " + req.params.dishID);
//     res.end("will update the dish: " + req.body.name 
//         + " with details: " + req.body.description);
// });
// app.delete("/dishes/:dishID", (req, res, next) => {
//     res.end("Deleting dish: " + req.params.dishID);
// });

module.exports = dishRouter;