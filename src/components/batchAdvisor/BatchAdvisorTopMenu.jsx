import React, { useState, useEffect } from "react";
import "./../../css/TopMenu.css";
import profile from "./../../icons/profile.png";
import notification from "./../../icons/notification.png";
import logout from "./../../icons/logout.png";
import { Link, useNavigate } from "react-router-dom";
import NotificationPanel from "./../student/NotificationPanel";

const BatchAdvisorTopMenu = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    calltopmenu();
  }, []);

  const calltopmenu = async () => {
    const res = await fetch("https://backend-three-nu.vercel.app/BatchAdvisor/BA_Topmenu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("BA_token"),
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setUserData(data.message);
    } else {
      navigate("/BatchAdvisorLogin");
    }
  };
  //for logout

  const BAlogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/BatchAdvisorLogin");
  };

  // for Notification
  const [notifications, setNotifications] = useState([]);
  const BA_Notification = async () => {
    const res = await fetch("https://backend-three-nu.vercel.app/Notification/BA_notification", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("BA_token"),
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setNotifications(data.message);
    }
  };

  return (
    <div className='containerNo1'>
      <div className='containerNo2'>
        <h1 className='title'>Tipster</h1>
        <h3 className='tagline'>A Digital Batch Advisor</h3>
      </div>
      <form action='' method='GET'>
        <div className='containerNo3'>
          <Link to='/BatchAdvisorProfile'>
            <img className='profileicon' src={profile} alt='' />
            <h4 className='profile'>{userData.name}</h4>
          </Link>
          <img
            className='notificationicon'
            src={notification}
            alt=''
            onClick={() => {
              setButtonPopup(true);
              BA_Notification();
            }}
          />
          <img className='logouticon' method='GET' src={logout} alt='' onClick={BAlogout} />
        </div>
      </form>
      <NotificationPanel trigger={buttonPopup} setTrigger={setButtonPopup}>
        {notifications.length === 0 || notifications === false ? (
          <p className='no-noti'>No Notifications!</p>
        ) : (
          notifications.map((notifi) => (
            <div className='notidiv'>
              {notifi.registrationId} &nbsp;
              {notifi.message}
            </div>
          ))
        )}
      </NotificationPanel>
    </div>
  );
};

export default BatchAdvisorTopMenu;
