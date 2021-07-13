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
import ReactGA from "react-ga";

import InfoModal from "./components/modal";
import { Row, Button, Spin, Alert, Tooltip } from "antd";
import {
  EllipsisOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";

const Sk2R = ({ user, uid, getProfile }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedImage, setRenderedImage] = useState("");
  const [sketchImage, setSketchImage] = useState("");
  const [visible, setVisible] = useState(false);
  const [minimizeDropzone, setMinimizeDropzone] = useState(false);
  const [sketchImages, setSketchImages] = useState([]);
  const [renderedImages, setRenderedImages] = useState([]);
  const [error, setError] = useState({
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
          case width <= 512:
            setSketchImage(null);
            setFiles([]);
            setError({
              value: true,
              message: "Your image is too small",
              description: "The image should be at least 512px wide.",
            });
            setTimeout(() => {
              setError({ value: false });
            }, 3000);
            break;
          case width >= 2000:
            setSketchImage(null);
            setFiles([]);
            setError({
              value: true,
              message: "Image is too large",
              description: "The image should be at most 2000px wide.",
            });
            setTimeout(() => {
              setError({ value: false });
            }, 3000);
          default:
          // code block
        }
      };
    }
    sketchImage ? setMinimizeDropzone(true) : setMinimizeDropzone(false);
  }, [sketchImage]);

  // use effect to set minimize dropzone
  useEffect(() => {
    files && files?.length > 0
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
    setError({ value: false });
  };

  const download = (renderedImage) => {
    ReactGA.event({
      category: "Sketch to Render",
      action: "Downloaded Image",
      label: renderedImage,
    });
    fetch(renderedImage, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg"); //or any other extension
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

    for (let i = 0; i < files?.length; i += 1) {
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
          ReactGA.event({
            category: "Sketch to Render",
            action: "clicked render button successfully",
            label: resp.data.image_uri,
          });
          sk2rService.insertImages(img);

          setIsLoading(false);
        });
      });
    } catch (e) {
      ReactGA.event({
        category: "Sketch to Render",
        action: "clicked render button but failed",
        label: e,
      });
      setError({
        value: true,
        message: "Sketch Render Failed",
        description: "We're working on fixing this! ",
      });
      setTimeout(() => {
        setError({ value: false });
      }, 3000);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Row>
        <Tooltip placement="right" title={"Back to tools home"}>
          <Link to={"/home"}>
            <img alt="back arrow" className="sk2r-back-arrow" src={backarrow} />
          </Link>
        </Tooltip>
      </Row>

      <div className="row">
        <InfoModal visible={visible} setVisible={setVisible} />
      </div>
      <div className="row">
        <div className="col s12 m6 l6 sketch-col">
          <h5>Sketch</h5>
          <div className="sk2r-sketch-container">
            {sketchImage ? (
              <Dropzone
                useIcon={false}
                files={files}
                setFiles={setFiles}
                multiple={false}
                sketchImage={true}
              >
                <img
                  className="sk2r-sketch-image "
                  alt="file preview"
                  src={sketchImage}
                />
              </Dropzone>
            ) : (
              <Dropzone
                useIcon={true}
                files={files}
                setFiles={setFiles}
                multiple={false}
              ></Dropzone>
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
                  <Tooltip placement="left" title={"Add another image here"}>
                    <div>
                      <Dropzone
                        useIconSmall={true}
                        files={files}
                        setFiles={setFiles}
                        multiple={false}
                      />
                    </div>
                  </Tooltip>
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
                  disabled={!files?.length > 0 || isLoading}
                >
                  Render
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l6 render-col">
          <h5>Render</h5>
          {!isLoading ? (
            renderedImage ? (
              <div className="sk2r-render-container">
                <img
                  alt={"ai rendered"}
                  className="sk2r-render-image"
                  src={renderedImage}
                />
              </div>
            ) : (
              <div className="sk2r-render-container">
                <EllipsisOutlined />
              </div>
            )
          ) : (
            <div className="sk2r-render-container sk2r-render-spinner">
              <Spin className="" size="large" />
              <p>This may take a while</p>
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
              <Tooltip placement={"left"} title={"download as jpg"}>
                <VerticalAlignBottomOutlined
                  className="download-btn"
                  onClick={() => download(renderedImage)}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {error.value && (
          <Alert
            message={error.message}
            description={error.description}
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
