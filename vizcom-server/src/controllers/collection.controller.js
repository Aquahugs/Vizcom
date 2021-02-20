const CollectionModel = require("../models/collection.model");
const HttpException = require("../utils/HttpException.utils");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class CollectionController {
  getUserCollection = async (req, res, next) => {
    let collectionList = await CollectionModel.find({ id: req.params.id });
    if (!collectionList.length) {
      throw new HttpException(404, "No collection exists");
    }
    res.send(collectionList);
  };

  collectImage = async (req, res, next) => {
    console.log("request body", req.body);

    const result = await CollectionModel.insert(req.body);

    if (!result) {
      throw new HttpException(500, "Something went wrong saving image");
    }

    let collectionList = await CollectionModel.find({ id: req.body.uuid });

    res.send(collectionList);
  };

  //   getUserById = async (req, res, next) => {
  //     console.log("PARAMS", req.params);
  //     const user = await UserModel.findOne({ id: req.params.id });
  //     if (!user) {
  //       throw new HttpException(404, "User not found");
  //     }

  //     res.send(user);
  //   };

  //   createUser = async (req, res, next) => {
  //     // this.checkValidation(req);
  //     console.log("request body", req.body);
  //     const result = await UserModel.create(req.body);

  //     if (!result) {
  //       throw new HttpException(500, "Something went wrong creating user");
  //     }

  //     res.status(201).send("User was created!");
  //   };

  //   updateUser = async (req, res, next) => {
  //     // do the update query and get the result
  //     // it can be partial edit
  //     console.log(req.body, req.params.id);
  //     const result = await UserModel.update(req.body, req.params.id);

  //     if (!result) {
  //       throw new HttpException(404, "Something went wrong");
  //     }

  //     const { affectedRows, changedRows, info } = result;

  //     const message = !affectedRows
  //       ? "User not found"
  //       : affectedRows && changedRows
  //       ? "User updated successfully"
  //       : "Update failed";

  //     res.send({ message, info });
  //   };

  //   deleteUser = async (req, res, next) => {
  //     const result = await UserModel.delete(req.params.id);
  //     if (!result) {
  //       throw new HttpException(404, "User not found");
  //     }
  //     res.send("User has been deleted");
  //   };

  // checkValidation = (req) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     throw new HttpException(400, "Validation faild", errors);
  //   }
  // };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new CollectionController();
