import React, { useState, useEffect } from "react";
import BatchAdvisorMainMenu from "./BatchAdvisorMainMenu";
import BatchAdvisorTopMenu from "./BatchAdvisorTopMenu";
import Footer from "./../student/Footer";
import deleteicon from "./../../icons/deleteicon.png";
import { Link } from "react-router-dom";
import DeleteMessagePopup from "./../student/DeleteMessagePopup";
import "./../../css/BatchAdvisorQueryBox.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BatchAdvisorMailBox = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [querybox, setQuerybox] = useState([]);
  const [pageLoad, setPageLoad] = useState(0);

  const Querybox = async () => {
    const res = await fetch(
      "https://backend-three-nu.vercel.app/ChatBox/BA_ViewMessage",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      setQuerybox(data.message);
    }
  };

  useEffect(() => {
    Querybox();
  }, [pageLoad]);
  //Delete Chat
  const [deleteChat, setDeleteChat] = useState([]);
  const deleteSubmit = async (e) => {
    e.preventDefault();
    const registrationId = deleteChat[0];
    const subject = deleteChat[1];
    const res = await fetch(
      `https://backend-three-nu.vercel.app/ChatBox/BA_DeleteChat/${registrationId}/${subject}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setButtonPopup(false);
    setPageLoad(pageLoad + 1);
    if (data.status === "success") {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="BAprofilecontainer">
      <BatchAdvisorTopMenu />
      <BatchAdvisorMainMenu />
      <div className="menuheadingdiv">
        <h2 className="freezesemestertitle">Query Box</h2>
      </div>
      <div className="receivedmsgscontainer">
        {querybox.length === 0 ? (
          <h2 className="emptyquerybox">You dont have any queries yet!</h2>
        ) : (
          <table style={{ width: "100%", marginLeft: "0px" }}>
            <tr>
              <th className="stdRegCol">Reg. No</th>
              <th className="stdNameCol">Name</th>
              <th className="highlightedCol">Subject</th>
              <th className="dateCol">Date</th>
              <th className="delCol">Delete</th>
            </tr>
            {querybox.map((query) => (
              <tr>
                <td className="highlightedRow">
                  <Link
                    to={"/BatchAdvisorQueryThread"}
                    state={[
                      query.registrationId,
                      query.subject,
                      query.chat[0].name,
                    ]}
                    className="highlightedRow"
                  >
                    {query.registrationId}
                  </Link>
                </td>
                <td className="highlightedRow">
                  <Link
                    to={"/BatchAdvisorQueryThread"}
                    state={[
                      query.registrationId,
                      query.subject,
                      query.chat[0].name,
                    ]}
                    className="highlightedRow"
                  >
                    {query.chat[0].name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={"/BatchAdvisorQueryThread"}
                    state={[
                      query.registrationId,
                      query.subject,
                      query.chat[0].name,
                    ]}
                    className="highlightedRow"
                  >
                    {query.subject}
                  </Link>
                </td>
                <td className="tablerows">
                  <Link
                    to={"/BatchAdvisorQueryThread"}
                    state={[
                      query.registrationId,
                      query.subject,
                      query.chat[0].name,
                    ]}
                    className="highlightedRow"
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
                      setDeleteChat([query.registrationId, query.subject]);
                    }}
                  />
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
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

export default BatchAdvisorMailBox;
