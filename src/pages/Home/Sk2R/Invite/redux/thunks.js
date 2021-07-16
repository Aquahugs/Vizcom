import inviteActions from "./actions";
import NotificationCenterActions from "../../../../../redux/Notifications/redux/actions";
import { createNotification } from "react-redux-notify";
import sk2rService from "../../../../../common/services/sk2r-service";
import {
  SUCCESS_NOTIFICATION_CONFIG,
  ERROR_NOTIFICATION_CONFIG,
  INFO_NOTIFICATION_CONFIG,
} from "../../../../../common/constants/notify-configs";
import ReactGA from "react-ga";

const getInvitesByUserId = (uid) => async (dispatch) => {
  dispatch(inviteActions.getInvitesStarted());
  try {
    const response = await sk2rService.getInvites({ id: uid });
    dispatch(inviteActions.getInvitesSuccess(response.data));
    const invites = response.data.filter((invite) => {
      return invite.redeemed !== 1;
    });
    if (invites.length > 0) {
      const notification = {
        link: "/invite-center",
        text: "You have " + invites.length + " invites to give out",
      };
      INFO_NOTIFICATION_CONFIG.message = `you have recieved ${invites.length} sketch to render invite links `;
      dispatch(createNotification(INFO_NOTIFICATION_CONFIG));
      const notifications = [notification];
      dispatch(
        NotificationCenterActions.setNotificationsSuccess(notifications)
      );
    }
  } catch (error) {
    dispatch(inviteActions.getInvitesError(error));
  }
};

const addInvites = (invites) => async (dispatch) => {
  dispatch(inviteActions.insertInvitesStarted());
  try {
    const response = await sk2rService.addInvites(invites);
    dispatch(inviteActions.insertInvitesSuccess(response.data));
    INFO_NOTIFICATION_CONFIG.message = `you have recieved ${response.data.length} sketch to render invite links `;

    const response2 = await sk2rService.getInvites({ id: invites.uid });
    const invites2 = response2.data.filter((invite) => {
      return invite.redeemed !== 1;
    });
    if (invites2.length > 0) {
      const notification = {
        link: "/invite-center",
        text: "You have " + invites2.length + " invites to give out",
      };
      INFO_NOTIFICATION_CONFIG.message = `you now have ${invites2.length} sketch to render invite links `;
      dispatch(createNotification(INFO_NOTIFICATION_CONFIG));
      const notifications = [notification];
      dispatch(
        NotificationCenterActions.setNotificationsSuccess(notifications)
      );
    }
    ReactGA.event({
      category: "Invites",
      action: "invites recieved",
    });
  } catch (error) {
    dispatch(inviteActions.insertCollectionError(error));
    ReactGA.event({
      category: "Invites",
      action: "invites recieved",
      label: error,
    });
  }
};

export default {
  addInvites,
  getInvitesByUserId,
};
