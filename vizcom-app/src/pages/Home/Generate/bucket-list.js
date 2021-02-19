  
import React from "react";

import { connect } from "react-redux";

import "./bucketlist.scss";
import M from "materialize-css";
import { compose } from "recompose";
import { withAuthorization } from "../../../router/auth/session";
import { useForm } from "react-hook-form";

const BucketList = ({  history, uid }) => {
  const { register, handleSubmit } = useForm();

  const addBucket = (bucketName) => {
    console.log("added to __ bucket")
  };

  return (
    <div class = "bucket-items">
      <input
          placeholder="search for bucket"
          class="searchbar"
      />
      
      <button class=" bucket-btn">
        <span class ='bucket-name'>bucket name </span>
        <span class ='item-numbers'>X items</span>
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
  updateBucket: ""
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(BucketList);