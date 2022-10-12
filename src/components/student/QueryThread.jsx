import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import "./../../css/MailBox.css";
import { Link, useLocation } from "react-router-dom";
import back from "./../../icons/back.png";
import sendMessage from "./../../icons/sendMessage.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QueryThread = () => {
  const [message1, setMessage1] = useState("");
  const location = useLocation();
  const Student = location.state;
  const subject = Student[0];
  const name = Student[1];
  const [pageLoad, setPageLoad] = useState(0);
  const [studentChat, setStudentChat] = useState([]);
  const chat = async () => {
    const res = await fetch(
      `https://backend-three-nu.vercel.app/ChatBox/S_ViewMessage/${subject}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setMessage1("");
    if (data.status === "success") {
      setStudentChat(data.message);
    }
  };
  useEffect(() => {
    chat();
  }, [pageLoad]);
  //send message
  const sendsms = async (e) => {
    e.preventDefault();
    if (!message1) {
      toast.error("please Enter Some text", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const message = message1;
    const res = await fetch(
      `https://backend-three-nu.vercel.app/ChatBox/S_SendMessage/${subject}/${message}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await res.json();
    setPageLoad(pageLoad + 1);
  };

  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />
      <div className="freezesemesterdiv">
        <h2 className="freezesemestertitle">
          <div>
            <Link to="/MailBox">
              <img src={back} alt="" className="backToInbox" />
            </Link>
            Query Box
          </div>
        </h2>
      </div>
      <div className="msgthreadcontainer">
        <p className="subjectHeading">
          <b>Subject:</b> {subject}
        </p>
        {studentChat.map((chat) =>
          chat.name === name ? (
            <div>
              <div className="Sent">
                {chat.message}
                <br />
                <p className="time">{chat.date}</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="Received">
                {chat.message}
                <br />
                <p className="time">{chat.date}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="msgTextAreaContainer">
        <form action="">
          <textarea
            name="message1"
            value={message1}
            onChange={(e) => setMessage1(e.target.value)}
            id="message"
            cols="100"
            rows="1"
            className="msgTextArea"
          ></textarea>
          {/* <button id="btn">kdkjsjsdjskj</button> */}
          <img
            src={sendMessage}
            alt=""
            className="sendMessageIcon"
            onClick={sendsms}
          />
        </form>
      </div>
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
      <Footer />
    </div>
  );
};
export default QueryThread;
