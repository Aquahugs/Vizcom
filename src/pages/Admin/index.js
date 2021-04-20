import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Dropzone from "../../common/components/Dropzone";
import { useForm } from "react-hook-form";
import uploadService from "../../common/services/upload-service";
import { Select } from "react-materialize";
import ProfileThunks from "../Profile/redux/thunks";

export const Admin = ({ history, user, uid, getProfile }) => {
  const [files, setFiles] = useState([]);
  const [imageType, setImageType] = useState([]);

  useEffect(() => {
    if (!user) {
      getUserInfo();
    }
  }, []);

  const getUserInfo = async () => {
    getProfile(uid).then((dbUser) => {
      console.log(dbUser);
      if (!dbUser?.is_admin) {
        history.push("/home");
      }
    });
  };

  const { handleSubmit } = useForm();

  const handleDropdownClick = (e) => {
    console.log(e.target.value);
    setImageType(e.target.value);
  };

  const submitForm = () => {
    const data = new FormData();

    for (let i = 0; i < files.length; i += 1) {
      data.append("file", files[i]);
    }
    const req = {
      generated_image_type: imageType,
      files,
    };
    const response = uploadService.uploadImages(req);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h3>Upload Images to Google Cloud</h3>
        <Dropzone files={files} setFiles={setFiles} multiple={true} />
        <Select
          onChange={(e) => {
            handleDropdownClick(e);
          }}
          id="Select-9"
          label="Chose your image type"
          multiple={false}
          options={{
            classes: "",
            dropdownOptions: {
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              outDuration: 250,
            },
          }}
          value="2"
        >
          <option value="car">Car</option>
          <option value="concept">Concept</option>
          <option value="shoe">Shoe</option>
        </Select>
        <button className="btn btn-primary" type="submit" name="action">
          Upload
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
});

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfileAsync,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Admin);
