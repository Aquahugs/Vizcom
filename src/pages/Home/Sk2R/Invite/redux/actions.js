import TYPES from "./types";

const getInvitesError = () => ({
  type: TYPES.GET_INVITES_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to get User Invites",
});

const getInvitesStarted = () => ({
  type: TYPES.GET_INVITES_STARTED,
});

const getInvitesSuccess = (Invites) => ({
  type: TYPES.GET_INVITES_SUCCESS,
  Invites,
});

const insertInvitesError = () => ({
  type: TYPES.GET_INVITES_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to insert into Invites",
});

const insertInvitesStarted = () => ({
  type: TYPES.INSERT_INVITES_STARTED,
});

const insertInvitesSuccess = (Invites) => ({
  type: TYPES.INSERT_INVITES_SUCCESS,
  Invites,
});
const redeemInvitesError = () => ({
  type: TYPES.redeem_INVITES_ERROR,
  //TODO: Helper method to create meaningful messages based on the error
  error: "Unable to redeem Invite",
});

const redeemInvitesStarted = () => ({
  type: TYPES.REDEEM_INVITES_STARTED,
});

const redeemInvitesSuccess = (Invites) => ({
  type: TYPES.REDEEM_INVITES_SUCCESS,
  Invites,
});

export default {
  getInvitesError,
  getInvitesStarted,
  getInvitesSuccess,
  insertInvitesError,
  insertInvitesStarted,
  insertInvitesSuccess,
  redeemInvitesError,
  redeemInvitesStarted,
  redeemInvitesSuccess,
};
