import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import "./../../css/StudentLogin.css";
import { Link, useNavigate } from "react-router-dom";
import Error from "./../../utils/Errors";
import Success from "../../utils/Success";

const StudentLogin = () => {
  const [user, setUser] = useState({
    batch: "",
    regNo: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    if (!user.batch || !user.regNo) {
      Error("Please enter the registration no.");
      return;
    }
    if (!user.password) {
      Error("Please enter the password.");
      return;
    }
    const { batch, regNo, password } = user;
    const res = await fetch(
      "https://backend-three-nu.vercel.app/Student/Studentlogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          batch: batch,
          regNo: regNo,
          password: password,
        }),
        mode: "cors",
        credentials: "include",
        withCredentials: true,
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      Success(data.message);
      navigate("/Home");
    } else {
      Error(data.message);
    }
  };
  return (
    <div className="maincontainer">
      <h1 className="title">Tipster</h1>
      <h3 className="tagline">A Digital Batch Advisor</h3>
      <h1 className="console">
        <FontAwesomeIcon icon={faUserGraduate} className="icon" />
        Student Console
      </h1>
      <div className="container2">
        <h2 className="stdlogin">Student Login</h2>
        <hr />
        <form action="" method="POST">
          <h3 className="regNoLabel">Registration Number</h3>
          <select
            className="batchinput"
            name="batch"
            id=""
            value={user.batch}
            onChange={handleInputs}
            placeholder=""
          >
            <option value="" disabled selected hidden>
              Batch
            </option>
            <option value="SP22">SP22</option>
            <option value="FA21">FA21</option>
            <option value="SP21">SP21</option>
            <option value="FA20">FA20</option>
            <option value="SP20">SP20</option>
            <option value="FA19">FA19</option>
            <option value="SP19">SP19</option>
            <option value="FA18">FA18</option>
          </select>
          <input
            className="department"
            name=""
            type="text"
            placeholder="BCS"
            disabled
          />
          <input
            className="regNo"
            name="regNo"
            type="text"
            value={user.regNo}
            onChange={handleInputs}
            placeholder=""
          />
          <br /> <br />
          <input
            className="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
          <br />
          <button className="btn" value="login" onClick={loginUser}>
            Login
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
        <Link to="/ResetPassword" className="link">
          <h4 className="forgotPassword">Forgot Password?</h4>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default StudentLogin;
