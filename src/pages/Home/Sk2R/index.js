import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Dropzone from "../../../common/components/Dropzone";
import sk2rService from "../../../common/services/sk2r-service";
import "./Sk2r.scss";
import ProfileThunks from "../../Profile/redux/thunks";

import { Modal, Button } from 'antd';


export const Sk2R = ({ history, user, uid, getProfile }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedImage, setRenderedImage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!user) {
      getUserInfo();
    }
    setVisible(true)
  }, []);

  const getUserInfo = async () => {
    getProfile(uid).then((dbUser) => {
      console.log(dbUser);
      if (!dbUser?.sk2r_beta) {
        history.push("/home");
      }
    });
  };
  const handleSubmitForm = () => {
    setIsLoading(true);
    const formData = new FormData();

    for (let i = 0; i < files.length; i += 1) {
      formData.append("file", files[i]);
    }
    const req = {
      uuid: uid,
      formData,
    };

    let img = {
      prerenderedImage: "",
      renderedImage: "",
      uuid: uid,
    };

    try {
      sk2rService.renderImage(req).then((resp) => {
        setRenderedImage(resp);
        sk2rService.uploadPrerender(req).then((resp) => {
          img.prerenderedImage = resp.data;
          sk2rService.insertImages(img);
          setIsLoading(false);
        });
      });
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    
    return (
    <div className = "component-container">
      <div className = "row">
    
      <Modal
        title="SK2R Beta v0.0.1"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={800}
        height={950}
        className = 'modal-component'
       
      
      >
        <div className="modal-container">

          <div className = "row">
            <h1>How to</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <img src = "https://via.placeholder.com/600x250"/>
            <p>some contents...</p>
          </div>
          <div className = "row">
            <h1>Render your sketch</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <img src = "https://via.placeholder.com/600x250"/>
            <p>some contents...</p>
          </div>
          <div className = "row">
            <h1>Tips for best result</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <img src = "https://via.placeholder.com/600x250"/>
            <img src = "https://via.placeholder.com/600x250"/>
            <p>some contents...</p>
          </div>
         
        </div>
      </Modal>
      </div>
      <div className="row">
        <div className="col s6 m6 l6">
          <form>
            <h3>Sketch To Render</h3>
            <Dropzone files={files} setFiles={setFiles} multiple={false} />

            <button
              onClick={() => handleSubmitForm()}
              className="btn waves-effect generate-btn lighten-1 z-depth-0"
            >
              Render
            </button>
          </form>
        </div>
        <div className="col s6 m6 l6">
          <img style={{ maxWidth: "100%" }} src={renderedImage} />
        </div>
      </div>
      </div>
    );
  }
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
)(Sk2R);