import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import Footer from "./../student/Footer";
import "./../../css/BatchAdvisorResetPassword.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const BatchAdvisorResetPassword = () => {
  const [sendemail, setSendemail] = useState({ email: "" });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSendemail({ ...sendemail, [name]: value });
  };

  // send email
  const send_mail = async (e) => {
    e.preventDefault();
    const { email } = sendemail;
    if (!sendemail.email) {
      Error("Please enter email.");
      return;
    }
    const res = await fetch(
      "https://backend-three-nu.vercel.app/BatchAdvisor/BA_sendresetemail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      Success(data.message);
    } else {
      Error(data.message);
    }
  };

  return (
    <div className="BALogincontainer">
      <h1 className="title">Tipster</h1>
      <h3 className="tagline">A Digital Batch Advisor</h3>
      <h1 className="console">
        <FontAwesomeIcon icon={faUserTie} className="icon" />
        Batch Advisor Console
      </h1>
      <div className="container3">
        <h2 className="rstpassword">Reset Password</h2>
        <hr />
        <form action="" method="POST">
          <h3 className="todo">
            Please enter your official email to receive the <br />
            password reset link.
          </h3>
          <input
            className="email"
            type="email"
            name="email"
            value={sendemail.email}
            onChange={handleInputs}
            placeholder=""
            required
          />
          <br />
          <Link to="/">
            <button className="cancelbtn">Cancel</button>
          </Link>
          <button className="sendbtn" onClick={send_mail}>
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
export default BatchAdvisorResetPassword;
