import React, { useEffect } from "react";
import { compose } from "recompose";
import "./invitecenter.scss";
import { withAuthorization } from "../../../router/auth/session";
import ProfileThunks from "../../Profile/redux/thunks";
import { connect } from "react-redux";
import { Form, Input, Button, Alert, message } from "antd";
import userService from "../../../common/services/user-service";
import { CheckOutlined } from "@ant-design/icons";

const InviteCenter = ({ invites }) => {
  const [inviteCopied, setInviteCopied] = React.useState(null);

  const success = () => {
    message.success("Copied to clipboard");
  };

  const copyInviteToClipboard = (id) => {
    // build invite url
    const url = `https://www.vizcom.co/sketch-to-render/invite/${id}`;
    navigator.clipboard.writeText(url);
    setInviteCopied(id);
    success();
  };

  return (
    <div className="page-container">
      <div className="header-content">
        <h2>Invite a creator</h2>
        <p>
          Copy an invite URL and share it with a artist or designer to give them
          access to Vizcom's Sketch to render tools
        </p>
        {invites && (
          <h3>
            {
              invites?.filter((invite) => {
                return invite.redeemed !== 1;
              }).length
            }
            /{invites.length} Invites Available
          </h3>
        )}
      </div>

      {invites &&
        invites?.map((invite) => {
          return (
            <div
              key={invite.invite_id}
              className="row invite-container"
              style={{
                opacity: invite.redeemed ? ".5" : "1",
              }}
            >
              <div className="col s12 m12 l12 ">
                <div className="col s8 m8 l8 code">
                  <h1>Invite code</h1>
                  <p>{invite.invite_id}</p>
                </div>
                <div className="col s4 m4 l4 invite-btn-container">
                  {invite.redeemed ? (
                    <Button disabled>Copy Invite URL</Button>
                  ) : inviteCopied !== invite.invite_id ? (
                    <Button
                      onClick={() => {
                        copyInviteToClipboard(invite.invite_id);
                      }}
                    >
                      Copy Invite URL
                    </Button>
                  ) : (
                    <div style={{ float: "right" }}>
                      <CheckOutlined style={{ fontSize: "200%" }} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const condition = (authUser) => !!authUser;

const mapStateToProps = (state) => ({
  uid: state.session.authUser.uid,
  user: state.profile.user,
  invites: state.invites.invites,
});
const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfileAsync,
};

export default compose(
  withAuthorization(condition),
  connect(mapStateToProps, mapDispatchToProps)
)(InviteCenter);
