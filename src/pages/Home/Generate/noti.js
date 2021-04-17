import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Link } from "react-router-dom";

class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success(
            "The image was added to your collection",
            " Added to collection"
          );
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
        default:
      }
    };
  };

  render() {
    return (
      <div>
        <a className="collect" onClick={this.createNotification("success")}>
          Collect
          <i className="material-icons right">add_box</i>
        </a>
        <Link to="/profile">
          <NotificationContainer />
        </Link>
      </div>
    );
  }
}

export default Example;
