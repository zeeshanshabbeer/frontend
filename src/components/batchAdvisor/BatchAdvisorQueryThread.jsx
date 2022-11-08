import React, { useState, useEffect } from "react";
import Footer from "../student/Footer";
import BatchAdvisorMainMenu from "./BatchAdvisorMainMenu";
import BatchAdvisorTopMenu from "./BatchAdvisorTopMenu";
import "./../../css/MailBox.css";
import { Link, useLocation } from "react-router-dom";
import back from "./../../icons/back.png";
import sendMessage from "./../../icons/sendMessage.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BatchAdvisorQueryThread = () => {
  const location = useLocation();
  const Student = location.state;
  const subject = Student[1];
  const registrationId = Student[0];
  const name = Student[2];

  const [pageLoad, setPageLoad] = useState(0);
  const [message1, setMessage1] = useState("");
  const [batchAdvisorChat, setBatchAdvisorchat] = useState([]);
  const chat = async () => {
    setMessage1("");
    const res = await fetch(`https://backend-three-nu.vercel.app/ChatBox/BA_ViewMessages/${registrationId}/${subject}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("BA_token"),
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setBatchAdvisorchat(data.message);
    }
  };
  useEffect(() => {
    chat();
  }, [pageLoad]);
  //send message

  const sendsms = async () => {
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
    }
    const message = message1;
    const res = await fetch(`https://backend-three-nu.vercel.app/ChatBox/BA_MessageReply/${registrationId}/${subject}/${message}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("BA_token"),
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setPageLoad(pageLoad + 1);
    }
  };

  return (
    <div className='BAprofilecontainer'>
      <BatchAdvisorTopMenu />
      <BatchAdvisorMainMenu />
      <div className='menuheadingdiv'>
        <h2 className='freezesemestertitle'>
          <div>
            <Link to='/BatchAdvisorMailBox'>
              <img src={back} alt='' className='backToInbox' />
            </Link>
            Query Box
          </div>
        </h2>
      </div>
      <div className='msgthreadcontainer'>
        <p className='subjectHeading'>
          <b>Subject:</b> {subject}
        </p>
        {batchAdvisorChat.map((chat) =>
          chat.name !== name ? (
            <div>
              <div className='Sent'>
                {chat.message}
                <br />
                <p className='time'>{chat.date}</p>
              </div>
            </div>
          ) : (
            <div>
              <div className='Received'>
                {chat.message}
                <br />
                <p className='time'>{chat.date}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className='msgTextAreaContainer'>
        <form action=''>
          <textarea name='message1' value={message1} onChange={(e) => setMessage1(e.target.value)} id='' cols='100' rows='1' className='msgTextArea'></textarea>
          <img src={sendMessage} alt='' className='sendMessageIcon' onClick={sendsms} />
        </form>
      </div>
      <ToastContainer position='top-center' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Footer />
    </div>
  );
};
export default BatchAdvisorQueryThread;
