import React from "react";

import { connect } from "react-redux";

import "./add-to-bucket.scss";
import M from "materialize-css";
import { compose } from "recompose";
import { BucketThunks } from "../../../Bucket/redux";

import SelectSearch from "react-select-search";

const BucketList = ({ history, uid, toggleBuckets, addToBucket }) => {
  const AddButtons = ({ uid, props }) => {
    console.log("added to __ bucket");
  };

  const addToBucketHandler = (collectionImageId, bucketId) => {
    const image = {
      collection_image_id: collectionImageId,
      bucket_id: bucketId,
    };

    addToBucket(image);
  };

  return (
    <div className="bucket-items">
      <div className="col s1 m1 l1" style={{ padding: "0" }}>
        <i className="material-icons" onClick={toggleBuckets}>
          clear
        </i>
      </div>
      {/* <SelectSearch
        options={}
        search
        filterOptions={}
        emptyMessage="Not found"
        placeholder="Select your country"
      /> */}
      <div className="col s11 m11 l11" style={{ padding: "0" }}>
        <input placeholder="search for bucket" className="searchbar" />
      </div>

      <button className=" bucket-btn">
        <span className="bucket-name">bucket name </span>
        <span className="item-numbers">X items</span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    uid: state.session.authUser.uid,
  };
};

const mapDispatchToProps = {
  addToBucket: BucketThunks.addToBucket,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  BucketList
);
