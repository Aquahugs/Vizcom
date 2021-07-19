import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import ProfileThunks from "../Profile/redux/thunks";
import { Select } from "antd";
import GeneratorUpload from "./GeneratorUpload";
import SketchToRenderBetaAccess from "./Sk2RBetaAccess";
import SketchToRenderBetaInvite from "./Sk2RBetaInvite";
import SketchToRenderBetaBulkInvite from "./SK2RBetaBulkInvite";

import "./admin.scss";

const { Option } = Select;

export const Admin = ({ history, user, uid, getProfile }) => {
  const [adminOption, setAdminOption] = useState(null);

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

  const handleChange = (value) => {
    setAdminOption(value);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "generator-upload":
        return <GeneratorUpload></GeneratorUpload>;
      case "sk2r-beta":
        return <SketchToRenderBetaAccess></SketchToRenderBetaAccess>;
      case "sk2r-invite":
        return <SketchToRenderBetaInvite></SketchToRenderBetaInvite>;
      case "sk2r-invite-bulk":
        return <SketchToRenderBetaBulkInvite></SketchToRenderBetaBulkInvite>;
      default:
        return "";
    }
  };

  return (
    <div className="admin-grid-container">
      <div className="admin-header">
        <h1>Admin{adminOption ? <span>/ {adminOption}</span> : ""}</h1>
      </div>
      <Select
        defaultValue="Select an admin mode"
        style={{ width: 500 }}
        onChange={handleChange}
      >
        <Option value="generator-upload">Generator Upload</Option>
        <Option value="sk2r-beta">Sketch to Render Beta Access</Option>
        <Option value="sk2r-invite">Sketch to Render Beta Invites</Option>
        <Option value="sk2r-invite-bulk">
          Sketch to Render Beta Bulk Invites
        </Option>
      </Select>
      <div>{renderSwitch(adminOption)}</div>
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
