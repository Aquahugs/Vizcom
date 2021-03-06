import React, { useState } from "react";
import Dropzone from "../../../common/components/Dropzone";
import uploadService from "../../../common/services/upload-service";
import { Select } from "react-materialize";
import { Modal, Button } from "react-materialize";

const GeneratorUpload = () => {
  const [files, setFiles] = useState([]);
  const [imageType, setImageType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDropdownClick = (e) => {
    console.log(e.target.value);
    setImageType(e.target.value);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    const formData = new FormData();

    for (let i = 0; i < files.length; i += 1) {
      files[i].generated_image_type = imageType;
      formData.append("file", files[i]);
    }

    const req = {
      generated_image_type: imageType,
      formData,
    };
    uploadService.uploadImages(req).then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    });
  };

  const trigger = (
    <button className="btn btn-primary" type="submit" name="action">
      Upload
    </button>
  );
  if (isLoading) {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif"
          alt="loading..."
        ></img>
        <img
          src="https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif"
          alt="loading..."
        ></img>
        <img
          src="https://media.giphy.com/media/TlK63EVjkyLQpvsETWU/giphy.gif"
          alt="loading..."
        ></img>
      </div>
    );
  } else {
    return (
      <div>
        <form>
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
        </form>
        <Modal
          actions={[
            <Button
              flat
              modal="close"
              node="button"
              waves="green"
              onClick={() => handleSubmitForm()}
            >
              YES
            </Button>,
            <Button flat modal="close" node="button" waves="light">
              No
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
          header="DID YOU CHOSE YOUR IMAGE TYPE"
          trigger={trigger}
        ></Modal>
      </div>
    );
  }
};

export default GeneratorUpload;
