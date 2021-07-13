import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

import plus from "../../../../assets/plus.png";

//will move these styles over somewhere
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  height: "100%",
  width: "100%",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: "#5E89FF",
  borderStyle: "dashed",
  backgroundColor: "#EBF8FF",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer", // pointer for dropzone
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
  display: "block",
  margin: "auto",
};
const plusStyleSmall = {
  display: "block",
  margin: "auto",
  maxWidth: "25px",
};

const plusContainer = {
  display: "block",
  margin: "auto",
};
const plusContainerSmall = {
  display: "block",
  margin: "auto",
};

const dropzoneContainer = { display: "block", width: "auto", height: "100%" };

const StyledDropzone = ({
  useIcon,
  files,
  setFiles,
  multiple,
  useIconSmall,
}) => {
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
      setFiles(acceptedFiles);
    },
  });

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
    <div style={dropzoneContainer} {...getRootProps({ style })}>
      <input {...getInputProps()} />
      {useIcon && (
        <div style={plusContainer}>
          <img alt="plus icon" src={plus} style={plusStyle} />
          <p>Drag or upload a sketch</p>
        </div>
      )}
      {useIconSmall && (
        <div style={plusContainerSmall}>
          <img alt="plus icon" src={plus} style={plusStyleSmall} />
        </div>
      )}
    </div>
  );
};

export default StyledDropzone;
