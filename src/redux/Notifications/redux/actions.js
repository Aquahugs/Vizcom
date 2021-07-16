import TYPES from "./types";

const getNotificationsError = (e) => ({
  type: TYPES.GET_NOTIFICATIONS_ERROR,
  //TODO: Helper method to set meaningful messages based on the error
  error: `Unable to get notifications, ERROR: ${e}`,
});

const getNotificationsStarted = () => ({
  type: TYPES.GET_NOTIFICATIONS_STARTED,
});

const getNotificationsSuccess = (notifications) => ({
  type: TYPES.GET_NOTIFICATIONS_SUCCESS,
  notifications,
});

const setNotificationsError = () => ({
  type: TYPES.SET_NOTIFICATIONS_ERROR,
  //TODO: Helper method to set meaningful messages based on the error
  error: "Unable to set notification",
});

const setNotificationsStarted = () => ({
  type: TYPES.SET_NOTIFICATIONS_STARTED,
});

const setNotificationsSuccess = (notifications) => ({
  type: TYPES.SET_NOTIFICATION_SUCCESS,
  notifications,
});

const deleteNotificationsError = () => ({
  type: TYPES.DELETE_NOTIFICATIONS_ERROR,
  //TODO: Helper method to set meaningful messages based on the error
  error: "Unable delete notification",
});

const deletNotificationsStarted = () => ({
  type: TYPES.DELETE_NOTIFICATIONS_STARTED,
});

const deleteNotificationsSuccess = (notification) => ({
  type: TYPES.DELETE_NOTIFICATIONS_SUCCESS,
  notification,
});

const NotificationCenterActions = {
  getNotificationsError,
  deleteNotificationsSuccess,
  deletNotificationsStarted,
  deleteNotificationsError,
  getNotificationsSuccess,
  getNotificationsStarted,
  setNotificationsError,
  setNotificationsSuccess,
  setNotificationsStarted,
};

export default NotificationCenterActions;
