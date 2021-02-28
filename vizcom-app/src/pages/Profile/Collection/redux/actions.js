import TYPES from "./types";

const getCollectionError = () => ({
  type: TYPES.GET_COLLECTION_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to get User Collection",
});

const getCollectionStarted = () => ({
  type: TYPES.GET_COLLECTION_STARTED,
});

const getCollectionSuccess = (collection) => ({
  type: TYPES.GET_COLLECTION_SUCCESS,
  collection,
});

const insertCollectionError = () => ({
  type: TYPES.GET_COLLECTION_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to insert into User Collection",
});

const insertCollectionStarted = () => ({
  type: TYPES.INSERT_COLLECTION_STARTED,
});

const insertCollectionSuccess = (collection) => ({
  type: TYPES.INSERT_COLLECTION_SUCCESS,
  collection,
});

export default {
  getCollectionError,
  getCollectionStarted,
  getCollectionSuccess,
  insertCollectionError,
  insertCollectionStarted,
  insertCollectionSuccess,
};
