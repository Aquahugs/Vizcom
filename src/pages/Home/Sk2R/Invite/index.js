import { Button, Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import ProfileThunks from "../../../Profile/redux/thunks";
import { Link } from "react-router-dom";
import inviteThunks from "./redux/thunks";

import invite from "./invite.scss";

import sk2rService from "../../../../common/services/sk2r-service";
import userService from "../../../../common/services/user-service";

// component to redeem invite code axios
const Invite = ({ uid, match, history, profile, getProfile, addInvites }) => {
  const [isLoading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [error, setError] = useState(null);
  const [alreadyHasAccess, setAlreadyHasAccess] = useState(null);
  const [isRedeemed, setIsRedeemed] = useState(false);

  // check if user exists
  useEffect(() => {
    setLoading(true);
    if (!profile) {
      getProfile(uid)
        .then(({ data }) => {
          if (!data) {
            setShowLoginModal(true);
          }
        })
        .catch(() => {
          history.push("/login");
        });
    }
  }, []);

  // clear out alert after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, [alert]);

  useEffect(() => {
    if (error) {
      setAlert({
        message: error,
        type: "error",
        description: error,
      });
    } else {
      setAlert(null);
    }
  }, [error]);

  // check if code id valid and not expired
  useEffect(() => {
    const { invite_id } = match.params;
    sk2rService
      .isAccessValid(invite_id)
      .then((res) => {
        if (res.data.redeemed) {
          setIsRedeemed(true);
        }
        setLoading(false);
      })
      .catch(() => {
        console.log("invalid invite id");
        history.push(`/home`);
      });
    setLoading(false);
  }, [match.params.invite_id]);

  // steps to redeem invite code
  const redeemInvite = async () => {
    const { invite_id } = match.params;
    setButtonLoading(true);
    try {
      // redeem invite code
      const result1 = await sk2rService.redeemInvite({
        invite_id,
        uid: profile.uuid,
      });
      if (result1.status === 404) {
        setError(result1.message);
      }
      // grant sk2r access to user
      const result2 = await sk2rService.getAccessById({ uid: profile.uuid });
      if (result2.status === 404) {
        setError(result1.message);
        setAlert({
          message: "Error",
          description: result1.message,
          type: "error",
        });
      }
      const req3 = {
        invites: 3,
        uid: profile.uuid,
      };
      // add invites to users account
      addInvites(req3);

      setButtonLoading(false);
    } catch (e) {
      setError(e.message);

      setButtonLoading(false);
    }
  };

  const submit = () => {
    redeemInvite();
  };
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  if (isRedeemed) {
    return (
      <div className="redeemed">
        <h1> Redeemed </h1>
        <Link to="/sketch-to-render">
          <div className="center">
            <Button
              type="primary"
              htmlType="submit"
              className="get-started-btn"
            >
              Get Started
            </Button>
          </div>
        </Link>
      </div>
    );
  }
  if (profile?.sk2r_beta) {
    return (
      <div className="redeemed">
        <h1>You already have access to sketch to render </h1>
        <Link to="/sketch-to-render">
          <div className="center">
            <Button
              type="primary"
              htmlType="submit"
              className="get-started-btn"
            >
              Get Started
            </Button>
          </div>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="col-span-12 spinner" style={{ margin: "auto" }}>
        <Spin indicator={antIcon} />
      </div>
    );
  }

  return (
    <div className="inviteContainer">
      <div>
        <h1>
          Accelerate your creative <br />
          process with Vizcom
        </h1>
        <p>
          You've been invited to join the Sketch to Render Beta access program.
          <br />
          We can't wait to see what you create.
        </p>
      </div>
      <div>
        <Button
          loading={buttonLoading}
          onClick={() => submit()}
          size="large"
          type="primary"
          className="center get-started-btn"
        >
          Accept Invite
        </Button>
      </div>
      {alert && (
        <Alert
          message={alert.message}
          description={alert.description}
          type={alert.type}
          showIcon
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.session.authUser.uid,
    profile: state.profile.user,
  };
};

const mapDispatchToProps = {
  getProfile: ProfileThunks.getProfileAsync,
  addInvites: inviteThunks.addInvites,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Invite);