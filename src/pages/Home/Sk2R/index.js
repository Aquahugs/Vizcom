import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Dropzone from "./components/dropzone";
import sk2rService from "../../../common/services/sk2r-service";
import "./Sk2r.scss";
import ProfileThunks from "../../Profile/redux/thunks";

import InfoModal from "./components/modal";
import { Row, Col, Layout, Button, Spin } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export const Sk2R = ({ history, user, uid, getProfile }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedImage, setRenderedImage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!user) {
      getUserInfo();
    }
    setVisible(true);
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
    }
  };

  return (
    <div>
      <Row>
        <InfoModal visible={visible} setVisible={setVisible} />
      </Row>
      <Row>
        <Col span={10}>
          <h5>Sketch</h5>
          {files && files.length > 0 ? (
            files.map((file) => (
              <div key={file.name}>
                <div>
                  <img
                    style={{ maxWidth: "100%" }}
                    alt="file preview"
                    src={URL.createObjectURL(file)}
                  />
                </div>
              </div>
            ))
          ) : (
            <Dropzone files={files} setFiles={setFiles} multiple={false} />
          )}
        </Col>
        <Col span={4}></Col>
        <Col span={10}>
          <h5>Render</h5>
          {!isLoading ? (
            renderedImage ? (
              <img style={{ maxWidth: "100%" }} src={renderedImage} />
            ) : (
              <div className="sk2r-render-container"></div>
            )
          ) : (
            <div className="sk2r-render-container sk2r-render-spinner">
              <Spin className="" size="large" />
            </div>
          )}
        </Col>
      </Row>
      <Row justify="end" className="sk2r-button-row">
        <Col span={10}>
          {isLoading ? (
            <Button
              type="primary"
              size="large"
              className="sk2r-button-submit"
              loading
            >
              Loading
            </Button>
          ) : (
            <Button
              type="primary"
              size="large"
              onClick={() => handleSubmitForm()}
              className="sk2r-button-submit"
              disabled={!files.length > 0}
            >
              Render
            </Button>
          )}
        </Col>
        <Col span={4}></Col>
        <Col span={10}>
          {!isLoading && renderedImage && (
            <Button
              className="sk2r-button-download"
              type="primary"
              icon={<DownloadOutlined />}
              size="large"
            />
          )}
        </Col>
      </Row>
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
)(Sk2R);
