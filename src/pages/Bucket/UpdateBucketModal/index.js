import React from "react";
import { connect } from "react-redux";
import "../SingleBucketView/singlebucketview.scss";
import { compose } from "recompose";
import { useForm } from "react-hook-form";
import { BucketThunks } from "../redux";
import { Modal, Button } from "react-materialize";

const UpdateBucketModal = ({ updateBucket, trigger, bucket, uid }) => {
  const { register, handleSubmit } = useForm();

  const submitForm = (formData) => {
    formData.is_public = !formData.is_public;
    const newBucket = {
      uuid: uid,
      bucket_id: bucket.bucket_id,
      ...formData,
    };
    updateBucket(newBucket);
  };

  return (
    <Modal
      actions={[
        <Button
          className="btn  waves-light save-btn"
          type="submit"
          name="action"
          flat
          modal="close"
          node="button"
          waves="green"
          onClick={handleSubmit(submitForm)}
        >
          Save
        </Button>,
        <Button flat modal="close" node="button" waves="light">
          Cancel
        </Button>,
      ]}
      options={{
        dismissible: true,
        endingTop: "10%",
        inDuration: 250,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: "4%",
      }}
      header="Update this bucket"
      trigger={trigger}
    >
      <form className="col s12">
        <div className="row edit-profile">
          <div className="input-field col s12">
            <input
              id="bucket_name"
              name="bucket_name"
              type="text"
              className="validate"
              ref={register}
              defaultValue={bucket?.bucket_name ? bucket?.bucket_name : ""}
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
              defaultValue={bucket?.description ? bucket?.description : ""}
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
              defaultValue={bucket?.description ? bucket?.description : ""}
            />
            <span className="lever"></span>
            <br />
            Only you and participants can see it
          </label>
        </div>

        <div className="switch"></div>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.session.authUser.uid,
  };
};

const mapDispatchToProps = {
  updateBucket: BucketThunks.updateBucket,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UpdateBucketModal
);
