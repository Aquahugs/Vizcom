const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const HttpException = require("./utils/HttpException.utils");
const errorMiddleware = require("./middleware/error.middleware");
const userRouter = require("./routes/user.route");
const collectionRouter = require("./routes/collection.route");
const indexRouter = require("./routes");
const checkIfAuthenticated = require("./middleware/auth.middleware");

// Init express
const app = express();

// Init environment
dotenv.config();

// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());

// enabling cors for all requests by using cors middleware
app.use(cors());

// Enable pre-flight
app.options("*", cors());

const port = Number(3001 || 3331);
app.use(`/`, indexRouter);
app.use(`/api/user`, userRouter);
app.use(`/api/user`, collectionRouter);

// 404 error
app.all("*", (req, res, next) => {
  const err = new HttpException(404, "Endpoint Not Found");
  next(err);
});

// Error middleware
app.use(errorMiddleware);

// starting the server
app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));

module.exports = app;
