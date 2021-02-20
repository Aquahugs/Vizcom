const BucketModel = require("../models/bucket.model");
const HttpException = require("../utils/HttpException.utils");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

class BucketController {
  getBuckets = async (req, res, next) => {
    let bucketList = await BucketModel.find(req.body);
    if (!bucketList.length) {
      throw new HttpException(404, "No collection exists");
    }
    res.send(bucketList);
  };

  getBucket = async (req, res, next) => {
    let bucket = await BucketModel.findOne(req.body);
    if (!bucket) {
      throw new HttpException(404, "No collection exists");
    }
    res.send(bucketList);
  };

  createBucket = async (req, res, next) => {
    console.log("request body", req.body);

    const result = await BucketModel.insert(req.body);

    if (!result) {
      throw new HttpException(500, "Something went wrong saving image");
    }

    let collectionList = await CollectionModel.find({ id: req.body.uuid });

    res.send(collectionList);
  };

  addToBucket = async () => {};
}
module.exports = new BucketController();
