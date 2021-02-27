import React from "react";

import { connect } from "react-redux";

import "./bucketlist.scss";
import M from "materialize-css";
import { compose } from "recompose";
import { withAuthorization } from "../../../router/auth/session";
import { useForm } from "react-hook-form";

const BucketList = ({ history, uid, toggleBuckets }) => {
  const { register, handleSubmit } = useForm();

  const AddButtons = ({ uid, props }) => {
    console.log("added to __ bucket");
  };

  return (
    <div className="bucket-items">
      <div className="col s1 m1 l1" style={{ padding: "0" }}>
        <i className="material-icons" onClick={toggleBuckets}>
          clear
        </i>
      </div>
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
  updateBucket: "",
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(BucketList);
