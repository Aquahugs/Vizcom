import React from "react";
import Responsive from "react-responsive";

export const Desktop = (props) => <Responsive {...props} minWidth={1336} />;
export const Tablet = (props) => (
  <Responsive {...props} minWidth={768} maxWidth={1335} />
);
export const Mobile = (props) => <Responsive {...props} maxWidth={767} />;
export const Phone = (props) => <Responsive {...props} maxWidth={500} />;
