import {
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_INFO,
  NOTIFICATION_TYPE_ERROR,
} from "react-redux-notify";

export let SUCCESS_NOTIFICATION_CONFIG = {
  message: "You have been logged in!",
  type: NOTIFICATION_TYPE_SUCCESS,
  duration: 3000,
  canDismiss: true,
  icon: <i className="fa fa-check" />,
};

export let WARNING_NOTIFICATION_CONFIG = {
  message: "You have been logged in!",
  type: NOTIFICATION_TYPE_WARNING,
  duration: 3000,
  canDismiss: true,
  icon: <i className="fa fa-warning" />,
};

export let INFO_NOTIFICATION_CONFIG = {
  message: "",
  type: NOTIFICATION_TYPE_INFO,
  duration: 3000,
  canDismiss: true,
  icon: <i className="fa fa-info" />,
};

export let ERROR_NOTIFICATION_CONFIG = {
  message: "",
  type: NOTIFICATION_TYPE_ERROR,
  duration: 0,
  canDismiss: true,
  icon: <i className="fa fa-fire" />,
};
