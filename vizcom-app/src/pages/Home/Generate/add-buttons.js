  
import React from "react";

import { connect } from "react-redux";

import "./generate.scss";
import M from "materialize-css";
import { compose } from "recompose";
import { withAuthorization } from "../../../router/auth/session";
import { useForm } from "react-hook-form";

const AddButtons = ({ uid,props,mode }) => {
  const { register, handleSubmit } = useForm();
  const addBucket = (bucketName) => {
    console.log("added to __ bucket")
  };

  return (
    <div>
      <div className = "col s6 m6 l6">
          <button class="waves-effect waves-grey btn-flat">
            <i class="material-icons right">apps</i>Add to bucket
          </button>
        </div>
        <div className = "col s6 m6 l6">
          <a className ="colelct">Collect
            <i class="material-icons right">add_box</i>
          </a>
        </div>
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
)(AddButtons);