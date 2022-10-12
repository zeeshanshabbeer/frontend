import React, { useState } from "react";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import Footer from "./Footer";
import "./../../css/StudentProfile.css";
import "./../../css/ChangePassword.css";
import { Link, useNavigate } from "react-router-dom";
import "./../../css/NewMessage.css";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const NewMessage = () => {
  const [newsms, setNewsms] = useState({ subject: "", message: "" });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNewsms({ ...newsms, [name]: value });
  };
  const navigate = useNavigate();
  const send = async (e) => {
    e.preventDefault();
    if (!newsms.subject) {
      Error("Please enter the subject.");
      return;
    }
    if (!newsms.message) {
      Error("Please enter the description.");
      return;
    }
    const { subject, message } = newsms;
    const res = await fetch(
      "https://backend-three-nu.vercel.app/ChatBox/CreateChat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          message,
        }),
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      Success(data.message);
      setTimeout(() => {
        navigate("/MailBox");
      }, 3000);
    } else {
      Error(data.message);
    }
  };
  return (
    <div className="stdpasswordcontainer">
      <TopMenu />
      <MainMenu />
      <div className="freezesemesterdiv">
        <h2 className="freezesemestertitle">New Message</h2>
      </div>
      <div className="stdpasswordformdiv">
        <form action="" method="POST">
          <label className="subjectlabel" htmlFor="">
            Subject
          </label>
          <br />
          <input
            className="subjectinput"
            type="text"
            name="subject"
            value={newsms.subject}
            onChange={handleInputs}
            placeholder="Enter Subject"
            required
          />
          <br />
          <label className="descriptionlabel" htmlFor="">
            Description
          </label>
          <br />
          <textarea
            name="message"
            value={newsms.message}
            onChange={handleInputs}
            className="descriptioninput"
            cols="30"
            rows="8"
            placeholder="Enter Description"
          ></textarea>
          <br />
          <Link to="/MailBox">
            <button className="cancelbutton">Cancel</button>
          </Link>
          <button className="sendbutton" onClick={send}>
            Send
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
      </div>
      <Footer />
    </div>
  );
};

export default NewMessage;
