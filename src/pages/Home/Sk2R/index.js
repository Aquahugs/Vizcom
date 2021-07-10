import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Dropzone from "./components/dropzone";
import sk2rService from "../../../common/services/sk2r-service";
import "./Sk2r.scss";
import ProfileThunks from "../../Profile/redux/thunks";
import backarrow from "../../../assets/back-arrow.svg";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../../router/auth/session";

import InfoModal from "./components/modal";
import { Row, Button, Spin, Popover, Alert } from "antd";
import {
  DownloadOutlined,
  EllipsisOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";

const Sk2R = ({ history, user, uid, getProfile }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedImage, setRenderedImage] = useState("");
  const [sketchImage, setSketchImage] = useState("");
  const [visible, setVisible] = useState(false);
  const [minimizeDropzone, setMinimizeDropzone] = useState(false);
  const [sketchImages, setSketchImages] = useState([]);
  const [renderedImages, setRenderedImages] = useState([]);
  const [imageDimensionError, setImageDimensionError] = useState({
    value: false,
  });

  useEffect(() => {
    if (!user) {
      getUserInfo();
    }
    setVisible(true);
  }, []);

  // useEffect to sketchImage to null if image dimensions are too large
  useEffect(() => {
    if (sketchImage) {
      const image = new Image();
      image.src = sketchImage;
      image.onload = () => {
        const { width } = image;
        switch (true) {
          case width <= 1000:
            setSketchImage(null);
            setImageDimensionError({
              value: true,
              message: "Your image is too small",
              description: "The image should be at least 1080px wide.",
            });
            break;
          case width >= 1700:
            setSketchImage(null);
            setImageDimensionError({
              value: true,
              message: "Image is too large",
              description: "The image should be at most 1500px wide.",
            });
          default:
          // code block
        }
      };
    }
    sketchImage ? setMinimizeDropzone(true) : setMinimizeDropzone(false);
  }, [sketchImage]);

  // use effect to set minimize dropzone
  useEffect(() => {
    files.length > 0
      ? setSketchImage(URL.createObjectURL(files[0]))
      : setSketchImage("");
    setRenderedImage("");
  }, [files, setFiles]);

  // add sketch images and render images to local state
  const addImages = (sketchImage, renderedImage) => {
    const newSketchImagesArray = [...sketchImages];
    newSketchImagesArray.push(sketchImage);
    const newRenderedImagesArray = [...renderedImages];
    newRenderedImagesArray.push(renderedImage);
    setSketchImages(newSketchImagesArray);
    setRenderedImages(newRenderedImagesArray);
  };

  const getUserInfo = async () => {
    getProfile(uid);
    // .then((dbUser) => {
    //   console.log(dbUser);
    //   if (!dbUser?.sk2r_beta) {
    //     history.push("/sketch-to-render");
    //   }
    // });
  };

  const onClose = () => {
    setImageDimensionError({ value: false });
  };

  const download = (renderedImage) => {
    fetch(renderedImage, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jfif"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    setMinimizeDropzone(true);
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
        addImages(files[0], resp);
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
        <Link to={"home"}>
          <img alt="back arrow" className="sk2r-back-arrow" src={backarrow} />
        </Link>
      </Row>

      <div className="row">
        <InfoModal visible={visible} setVisible={setVisible} />
      </div>
      <div className="row">
        <div className="col s6 m6 l6 sketch-col">
          <h5>Sketch</h5>
          <div className="sk2r-sketch-container">
            {sketchImage ? (
              <img
                className="sk2r-sketch-image center"
                alt="file preview"
                src={sketchImage}
              />
            ) : (
              <Dropzone
                useIcon={true}
                files={files}
                setFiles={setFiles}
                multiple={false}
              />
            )}
          </div>
          <div className="sk2r-button-row">
            <div className="col s6 m6 l6">
              {sketchImages.length > 0 &&
                sketchImages?.map((img) => (
                  <img
                    style={{ maxWidth: "100%" }}
                    alt="file preview"
                    src={URL.createObjectURL(img)}
                    className="sk2r-image-thumbnail"
                    onClick={() => setSketchImage(URL.createObjectURL(img))}
                  />
                ))}

              <div className=" small-dropzone">
                {minimizeDropzone && sketchImage && (
                  <Dropzone
                    useIconSmall={true}
                    files={files}
                    setFiles={setFiles}
                    multiple={false}
                  />
                )}
              </div>
            </div>
            <div className="col s6 m6 l6 render-btn-container">
              <div className="sk2r-button-submit">
                <Button
                  className="hvr-grow-shadow"
                  type="primary"
                  size="large"
                  onClick={() => handleSubmitForm()}
                  disabled={!files.length > 0 || isLoading}
                >
                  Render
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col s6 m6 l6 render-col">
          <h5>Render</h5>
          {!isLoading ? (
            renderedImage ? (
              <div className="sk2r-render-container">
                <img className="sk2r-render-image" src={renderedImage} />
              </div>
            ) : (
              <div className="sk2r-render-container">
                <EllipsisOutlined />
              </div>
            )
          ) : (
            <div className="sk2r-render-container sk2r-render-spinner">
              <Spin className="" size="large" />
              <p>Please allow a few moments</p>
            </div>
          )}
          <div className="col s12 m12 l12 sk2r-button-download-container">
            <div className="sk2r-button-row">
              {renderedImages.length > 0 &&
                renderedImages.map((img) => (
                  <img
                    alt="rendered thumbnails"
                    src={img}
                    className="sk2r-image-thumbnail"
                    onClick={() => setRenderedImage(img)}
                  ></img>
                ))}
              <VerticalAlignBottomOutlined
                className="download-btn"
                onClick={() => download(renderedImage)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {imageDimensionError.value && (
          <Alert
            message={imageDimensionError.message}
            description={imageDimensionError.description}
            type="error"
            closable
            onClose={onClose}
            showIcon
          />
        )}
      </div>
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

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Sk2R);
