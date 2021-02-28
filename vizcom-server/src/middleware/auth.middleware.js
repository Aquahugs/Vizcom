const admin = require("../services/firebase/firebase-service");
const dotenv = require("dotenv");
dotenv.config();

const getAuthToken = (req, res, next) => {
  // console.log(
  //   "HEADERS",
  //   req.headers.authorization,
  //   req.headers.authorization.split(" ")[0]
  // );
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

const checkIfAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      try {
        const userInfo = await admin.auth().verifyIdToken(authToken);
      } catch (e) {
        console.log(e);
      }
      req.authId = userInfo.uid;
      // console.log("ALL THE INFO", userInfo);
      return next();
    } catch (e) {
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};

module.exports = checkIfAuthenticated;
