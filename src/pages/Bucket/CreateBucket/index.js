import React, { Component } from "react";
import { connect } from "react-redux";
import "./newbucket.scss";
import M from "materialize-css";
import { compose } from "recompose";
import StyledDropzone from "../Dropzone";
import backarrow from "../../../assets/back-arrow.svg";
import { withAuthorization } from "../../../router/auth/session";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BucketThunks } from "../redux";

const CreateBucket = ({ uid, history, createBucket }) => {
  const { register, handleSubmit } = useForm();

  const submitForm = (formData) => {
    formData.is_public = !formData.is_public;
    const newBucket = {
      ...formData,
      uuid: uid,
    };
    createBucket(newBucket);
    history.push("/profile");
  };

  return (
    <div className="row create-container">
      <form className="col s12" onSubmit={handleSubmit(submitForm)}>
        <div className="row edit-profile">
          <Link to={"profile"}>
            <img className="backarrow" src={backarrow} />
          </Link>
          <h1>Create bucket</h1>
          <p>Collect and organize images in digital buckets</p>
          <div className="input-field col s12">
            <input
              id="bucket_name"
              name="bucket_name"
              type="text"
              className="validate"
              ref={register}
            />
            <label htmlFor="bucket_name">Bucket Name</label>
          </div>
          <div className="input-field col s12">
            <input
              id="description"
              type="text"
              name="description"
              ref={register}
              className="validate"
            />
            <label htmlFor="description">Description</label>
          </div>
        </div>
        <div className="switch">
          <label className="secret-button">
            <span>Keep it as a secret</span>
            <input
              type="checkbox"
              id="is_public"
              name="is_public"
              ref={register}
              className="validate"
            />
            <span className="lever"></span>
            <br />
            Only you and participants can see it
          </label>
        </div>

        <div className="switch"></div>

        <div className="row action-buttons">
          <Link to={"profile"}>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Cancel
            </button>{" "}
          </Link>

          <button
            className="btn  waves-light save-btn"
            type="submit"
            name="action"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.session.authUser.uid,
  };
};

const mapDispatchToProps = {
  createBucket: BucketThunks.createBucket,
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(CreateBucket);
