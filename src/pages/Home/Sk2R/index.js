import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Dropzone from "../../../common/components/Dropzone";
import sk2rService from "../../../common/services/sk2r-service";
import { Button } from "react-materialize";

export const Sk2R = ({ uid }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedImage, setRenderedImage] = useState("");

  useEffect(() => {}, []);

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
    );
  }
};

const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
});

export default compose(withRouter, connect(mapStateToProps))(Sk2R);
