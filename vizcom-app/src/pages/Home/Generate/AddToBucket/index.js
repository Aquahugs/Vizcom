import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import SelectSearch, { fuzzySearch } from "react-select-search";
import { useForm } from "react-hook-form";

import { BucketThunks } from "../../../Bucket/redux";
import { CollectionThunks } from "../../../Profile/Collection/redux";

import "./select-search.scss";

const AddToBucket = ({
  bucketDropdownOptions,
  addToBucket,
  addBucketMenu,
  image,
  collection,
  collectImage,
  uid,
}) => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [bucketId, setBucketId] = useState(null);

  const onSelectChange = (value) => {
    setBucketId(value);
    console.log(bucketId);
  };

  const displayBucketHandler = (data) => {
    addBucketMenu(data);
  };

  const submitForm = () => {
    const imageObj = {
      uuid: uid,
      generated_image_id: image.generated_image_id,
      user_uploaded_image_id: null,
      image_uri: image.image_uri,
    };
    collectImage(imageObj).then((collectionImages) => {
      debugger;
      console.log(collectionImages, image);
      const collectionImage = collectionImages.find((i) => {
        return i.generated_image_id === image.generated_image_id;
      });
      const newImage = {
        collection_image_id: collectionImage.collection_image_id,
        bucket_id: bucketId,
      };
      !bucketId
        ? setErrorMessage("Please select a bucket")
        : addToBucket(newImage);
      addBucketMenu(false);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <SelectSearch
          options={bucketDropdownOptions}
          search
          emptyMessage="Not found"
          filterOptions={fuzzySearch}
          placeholder="Select your bucket"
          ref={register}
          name="bucket_id"
          id="bucket_id"
          onChange={onSelectChange}
        />
        <button
          className="btn cancel-btn"
          type="submit"
          name="action"
          onClick={() => displayBucketHandler(false)}
        >
          Cancel
        </button>
        <button
          className="btn add-btn"
          type="submit"
          name="action"
        >
          Add
        </button>
      </form>
      {errorMessage && <p>errorMessage</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.session.authUser.uid,
    bucketDropdownOptions: state.bucket.dropdownOptions,
    collection: state.collection.collection,
  };
};

const mapDispatchToProps = {
  addToBucket: BucketThunks.addToBucket,
  collectImage: CollectionThunks.collectImageAsync,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  AddToBucket
);
