import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./../../css/MailBox.css";
import deleteicon from "./../../icons/deleteicon.png";
import { Link } from "react-router-dom";
import DeleteMessagePopup from "./DeleteMessagePopup";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const MailBox = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [pageLoad, setPageLoad] = useState(0);

  const [querybox, setQuerybox] = useState([]);
  const Querybox = async () => {
    const res = await fetch("/ChatBox/S_ViewMessage", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.status === "success") {
      setQuerybox(data.message);
    }
  };

  useEffect(() => {
    Querybox();
  }, [pageLoad]);

  //Delete Chat
  const [deleteChat, setDeleteChat] = useState("");
  const deleteSubmit = async (e) => {
    e.preventDefault();
    const subject = deleteChat;
    const res = await fetch(`/ChatBox/S_DeleteChat/${subject}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    setPageLoad(pageLoad + 1);
    setButtonPopup(false);
    if (data.status === "success") {
      Success(data.message);
    } else {
      Error(data.message);
    }
  };

  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />
      <div className="freezesemesterdiv">
        <h2 className="freezesemestertitle">Mail Box</h2>
      </div>
      <div className="receivedmsgscontainer">
        {querybox.length === 0 ? (
          <h2 className="emptyquerybox">You dont have any queries yet!</h2>
        ) : (
          <table style={{ width: "100%", marginLeft: "0px" }}>
            <tr>
              <th className="subjectCol">Subject</th>
              <th className="dateCol">Date</th>
              <th className="delCol">Delete</th>
            </tr>
            {querybox.map((query) => (
              <tr>
                <td>
                  <Link
                    to={"/QueryThread"}
                    state={[query.subject, query.chat[0].name]}
                    className="subjectRow"
                  >
                    {query.subject}
                  </Link>
                </td>

                <td className="tablerows">
                  <Link
                    to={"/QueryThread"}
                    state={[query.subject, query.chat[0].name]}
                    className="subjectRow"
                  >
                    {query.chat[0].date}
                  </Link>
                </td>
                <td className="tablerows">
                  <img
                    src={deleteicon}
                    alt=""
                    className="AddedCourseDelBtn"
                    onClick={() => {
                      setButtonPopup(true);
                      setDeleteChat(query.subject);
                    }}
                  />
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
      <Link to="/NewMessage">
        <div className="composeicondiv">
          <button className="composebtn">
            <FontAwesomeIcon icon={faPlusSquare} className="composeicon" />
            Compose
          </button>
        </div>
      </Link>
      <Footer />
      <DeleteMessagePopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form action="">
          <h3 className="DeleteConfirmation">
            Are you sure you want to delete this query?
          </h3>
          <button className="DeleteAddedCourseButton " onClick={deleteSubmit}>
            Delete
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
      </DeleteMessagePopup>
    </div>
  );
};

export default MailBox;
