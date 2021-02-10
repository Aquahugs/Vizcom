// Routes - handle the HTTP requests that hits the API and route them to appropriate controller(s)
const express = require("express");
const db = require("../services/db/db-connection");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("hi");
    res.send("hello world");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// router.get("/users", async (req, res, next) => {
//   try {
//     let results = await db.all();
//     res.json(results);
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
