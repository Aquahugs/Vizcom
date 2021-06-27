import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

import plus from "../../../assets/plus.png";

//will move these styles over somewhere
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  height: '450px',
  width: '100%',
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#5E89FF",
  borderStyle: "dashed",
  backgroundColor: "#EBF8FF",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const plusStyle = {
  paddingTop: "12rem",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width:'100%',
  height: 450,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const StyledDropzone = ({ files, setFiles, multiple }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 1300,
    multiple: multiple,
    onDrop: (acceptedFiles) => {
      console.log("files", acceptedFiles);
      setFiles(acceptedFiles);
    },
  });

  // this will have to be put into index.js later on
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt="file preview" src={URL.createObjectURL(file)} style={img} />
      </div>
    </div>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div>
      <div className = "user-image">
        <aside style={thumbsContainer}>{thumbs}</aside>
      </div>
      <div className = "drop-zone">
        <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <img alt="plus icon" src={plus} style={plusStyle}/>
        <p>Drag 'n' drop files here, or click to select files</p>
        </div>
      </div>
      
    </div>
  );
};

export default StyledDropzone;
