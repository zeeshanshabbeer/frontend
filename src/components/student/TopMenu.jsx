import React, { useEffect, useState } from "react";
import "./../../css/TopMenu.css";
import notification from "./../../icons/notification.png";
import logout from "./../../icons/logout.png";
import { Link, useNavigate } from "react-router-dom";
import NotificationPanel from "./NotificationPanel";

const TopMenu = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const calltopmenu = async () => {
    const res = await fetch("/Student/S_Topmenu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUserData(data.message);
    if (data.status !== "success") {
      navigate("/StudentLogin");
    }
  };
  useEffect(() => {
    calltopmenu();
  }, []);
  //for logout

  const S_logout = async (e) => {
    e.preventDefault();
    const res = await fetch("/Student/Studentlogout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.status === "success") {
      navigate("/StudentLogin");
    }
  };
  // for Notification
  const [notifications, setNotifications] = useState([]);
  const S_Notification = async () => {
    const res = await fetch("/Notification/S_notification", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      console.log(data);
      setNotifications(data.message);
    }
  };
  return (
    <div className="containerNo1">
      <form action="" method="GET">
        <div className="containerNo2">
          <h1 className="title">Tipster</h1>
          <h3 className="tagline">A Digital Batch Advisor</h3>
        </div>
        <div className="containerNo3">
          <Link to="/StudentProfile">
            <img className="profileicon" src={userData.profilePic} alt="" />
            <h4 className="profile">{userData.registrationId}</h4>
          </Link>
          <img
            className="notificationicon"
            src={notification}
            alt=""
            onClick={() => {
              setButtonPopup(true);
              S_Notification();
            }}
          />
          <img
            className="logouticon"
            method="GET"
            src={logout}
            alt=""
            onClick={S_logout}
          />
        </div>
      </form>
      <NotificationPanel trigger={buttonPopup} setTrigger={setButtonPopup}>
        {notifications.length === 0 || !notifications ? (
          <p className="no-noti">No Notifications!</p>
        ) : (
          notifications.map((notifi) => (
            <div className="noti-div">
              {notifi.name} &nbsp;
              {notifi.message}
            </div>
          ))
        )}
      </NotificationPanel>
    </div>
  );
};

export default TopMenu;
