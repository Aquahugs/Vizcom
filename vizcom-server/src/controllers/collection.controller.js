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
    const result = await CollectionModel.insert(req.body);

    if (!result) {
      throw new HttpException(500, "Something went wrong saving image");
    }

    let collectionList = await CollectionModel.find({ id: req.body.uuid });

    res.send(collectionList);
  };

  deleteCollectionImage = async (req, res, next) => {
    const result = await CollectionModel.deleteCollectionImage(req.body);
    if (!result) {
      throw new HttpException(404, "Collection Image not found");
    }
    let collectionList = await CollectionModel.find({
      id: req.body.uuid,
    });
    if (!collectionList.length) {
      throw new HttpException(404, "No collection");
    }
    res.send(collectionList);
  };
}

module.exports = new CollectionController();
