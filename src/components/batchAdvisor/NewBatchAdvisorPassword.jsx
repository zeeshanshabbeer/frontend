import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import Footer from "./../student/Footer";
import "./../../css/BatchAdvisorResetPassword.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const NewBatchAdvisorPassword = () => {
  const [password, setPassword] = useState({
    new_password: "",
    confirm_password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPassword({ ...password, [name]: value });
  };
  const { token } = useParams();

  const navigate = useNavigate();
  const update_password = async (e) => {
    e.preventDefault();
    const { new_password, confirm_password } = password;
    if (!password.new_password) {
      Error("Please enter new password.");
      return;
    }
    if (!password.confirm_password) {
      Error("Please enter confirm password.");
      return;
    }
    const regexPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (regexPattern.test(new_password)) {
      const res = await fetch("/BatchAdvisor/BA_resetpassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          new_password,
          confirm_password,
          token,
        }),
      });
      const data = await res.json();
      if (data.status === "success") {
        Success(data.message);
        setTimeout(() => {
          navigate("/BatchAdvisorLogin");
        }, 3000);
      } else {
        Error(data.message);
      }
    } else {
      Error(
        "Minimum length is 8 characters. One uppercase, one lowercase, one special character and one digit is compulsory."
      );
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
        <form action="" method="PUT">
          <input
            className="email"
            type="password"
            name="new_password"
            value={password.new_password}
            onChange={handleInputs}
            placeholder="New Password"
            required
          />
          <br />
          <br />
          <input
            className="email"
            type="password"
            name="confirm_password"
            value={password.confirm_password}
            onChange={handleInputs}
            placeholder="Confirm New Password"
            required
          />
          <br />
          <Link to="/BatchAdvisorLogin">
            <button className="otpcancelbtn">Cancel</button>
          </Link>
          <button className="otpsendbtn" onClick={update_password}>
            Confirm
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
export default NewBatchAdvisorPassword;
