import React from "react";
import "./../../css/NotificationPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
const NotificationPanel = (props) => {
  return props.trigger ? (
    <div className="popupbg">
      <div className="notification-popup">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="closebtn"
          onClick={() => props.setTrigger(false)}
        />
        <div className="latestnoti">
          <h2 className="latest-noti">Latest Notifications</h2>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default NotificationPanel;
