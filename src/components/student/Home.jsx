import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import deleteicon from "./../../icons/deleteicon.png";
import deleteicondisabled from "./../../icons/deleteicondisabled.png";
import TopMenu from "./TopMenu";
import DropReasonPopup from "./DropReasonPopup";
import "./../../css/Home.css";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const Home = async () => {
    const res = await fetch("/Student/Home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setUserData(data.message);
    }
  };

  const [drop, setDrop] = useState({ reason: "" });
  const [drop1, setDrop1] = useState({ courseName: "" });

  const [credit, setCredit] = useState();
  const creditHour = async () => {
    const res = await fetch("/Student/Home_credits", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCredit(data.message);
  };
  useEffect(() => {
    creditHour();
  }, []);
  const [stateLoad, setStateLoad] = useState(0);
  // Drop course request
  const submit = async (e) => {
    e.preventDefault();
    const reason = drop;
    const courseName = drop1;
    const res = await fetch("/DropCourse/DropCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reason: reason,
        courseName: courseName,
      }),
    });
    const data = await res.json();
    setButtonPopup(false);
    if (data.status === "success") {
      Success(data.message);
      setStateLoad(stateLoad + 1);
      creditHour();
    } else {
      Error(data.message);
    }
  };

  useEffect(() => {
    Home();
  }, [stateLoad]);
  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />
      <div>
        <div className="freezesemesterdiv">
          <h2 className="freezesemestertitle">Registered Courses</h2>
        </div>
        {userData.length === 0 ? (
          <div className="emptydiv">
            <h2 className="emptytext">
              You don't have any registered courses!
            </h2>
          </div>
        ) : (
          <table>
            <tr>
              <th className="column1">Course Code</th>
              <th className="column2">Course Title</th>
              <th className="column3">Credits</th>
              <th className="column5">Status</th>
              <th className="column6">Drop</th>
            </tr>
            {userData.map((home) => (
              <tr>
                <td>{home.courseCode}</td>
                <td>{home.courseName}</td>
                <td>{home.credits}</td>
                <td>{home.status}</td>
                {home.status === "enrolled" && credit >= 15 ? (
                  <td>
                    <img
                      src={deleteicon}
                      alt=""
                      className="dropbtn"
                      onClick={() => {
                        setButtonPopup(true);
                        setDrop1(home.courseName);
                      }}
                    />
                  </td>
                ) : home.status === "Add Pending" ||
                  home.status === "Drop Pending" ? (
                  <td>
                    <div className="dropbtndiv-status">
                      <img
                        src={deleteicondisabled}
                        alt=""
                        className="dropbtndisabled-status"
                      />
                      <span className="tooltipstatus">
                        Request is already pending!
                      </span>
                    </div>
                  </td>
                ) : (
                  <td>
                    <div className="dropbtndiv-credits">
                      <img
                        src={deleteicondisabled}
                        alt=""
                        className="dropbtndisabled-credits"
                      />
                      <span className="tooltipcredits">
                        You cannot drop less than 12 credit hours!
                      </span>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </table>
        )}
      </div>
      <Footer />
      <DropReasonPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form action="" method="POST">
          <label htmlFor="" className="dropreasonlabel">
            Reason
          </label>
          <br />
          <textarea
            name="reason"
            value={drop.reason}
            onChange={(e) => setDrop(e.target.value)}
            className="dropreasoninput"
            placeholder="Enter a valid reason to drop the course"
            cols="40"
            rows="5"
            required
          ></textarea>
          <br />
          <button className="newcontactbutton" onClick={submit}>
            Drop
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </DropReasonPopup>
    </div>
  );
};

export default Home;
