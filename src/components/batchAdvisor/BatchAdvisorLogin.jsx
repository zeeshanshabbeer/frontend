import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import Footer from "./../student/Footer";
import "./../../css/BatchAdvisorLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const BatchAdvisorLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  // login BatchAdvisor
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (!user.email) {
      Error("Please enter the email.");
      return;
    }
    if (!user.password) {
      Error("Please enter the password.");
      return;
    }
    const res = await fetch(
      "https://backend-three-nu.vercel.app/BatchAdvisor/BatchAdvisorLogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      navigate("/PendingRequests");
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

      <div className="container2">
        <form action="" method="POST">
          <h2 className="stdlogin">Batch Advisor Login</h2>
          <hr />
          <br />
          <input
            className="BALoginLabels"
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="Email"
          />
          <br />
          <br />
          <input
            className="BALoginLabels"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
          <br />
          <button className="btn" onClick={loginUser}>
            Login
          </button>
          <Link to="/BatchAdvisorResetPassword" className="link">
            <h4 className="forgotPassword">Forgot Password?</h4>
          </Link>
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
export default BatchAdvisorLogin;
