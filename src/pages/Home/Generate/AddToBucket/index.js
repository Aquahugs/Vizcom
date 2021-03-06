import React, { useState } from "react";
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
  collectImage,
  uid,
  collection,
}) => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [bucketId, setBucketId] = useState(null);

  const onSelectChange = (value) => {
    setBucketId(value);
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
    if (
      !collection?.some(
        (image) => imageObj.generated_image_id === image.generated_image_id
      )
    ) {
      collectImage(imageObj).then((collectionImages) => {
        const collectionImage = collectionImages?.find((i) => {
          return i.generated_image_id === image.generated_image_id;
        });
        const newImage = {
          collection_image_id: collectionImage.collection_image_id,
          bucket_id: bucketId,
          uuid: uid,
        };
        !bucketId
          ? setErrorMessage("Please select a bucket")
          : addToBucket(newImage);
        addBucketMenu(false);
      });
    } else {
      const collectionImage = collection.find(
        (image) => imageObj.generated_image_id === image.generated_image_id
      );
      const newImage = {
        collection_image_id: collectionImage.collection_image_id,
        bucket_id: bucketId,
        uuid: uid,
      };
      addToBucket(newImage);
      addBucketMenu(false);
    }
  };

  return (
    <div style={{ marginLeft: "5%" }}>
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
        <button className="btn add-btn" type="submit" name="action">
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
