import React, { useState } from "react";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import Footer from "./Footer";
import "./../../css/StudentProfile.css";
import "./../../css/ChangePassword.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const ChangeStudentPassword = () => {
  const [update_password, setUpdate_password] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUpdate_password({ ...update_password, [name]: value });
  };

  const navigate = useNavigate();
  const Update_Password = async (e) => {
    e.preventDefault();
    if (!update_password.old_password) {
      Error("Please enter old password.");
      return;
    }
    if (!update_password.new_password) {
      Error("Please enter new password.");
      return;
    }
    if (!update_password.confirm_password) {
      Error("Please confirm new password.");
      return;
    }
    const { old_password, new_password, confirm_password } = update_password;
    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (regexPattern.test(new_password)) {
      const res = await fetch("https://backend-three-nu.vercel.app/Student/UpdatePassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("S_token"),
        },
        body: JSON.stringify({
          old_password: old_password,
          new_password: new_password,
          confirm_password: confirm_password,
        }),
      });
      const data = await res.json();
      if (data.status === "success") {
        Success(data.message);
        setTimeout(() => {
          navigate("/StudentProfile");
        }, 3000);
      } else {
        Error(data.message);
      }
    } else {
      Error("Minimum length is 8 characters. One uppercase, one lowercase, one special character and one digit is compulsory.");
      return;
    }
  };

  return (
    <div className='stdpasswordcontainer'>
      <TopMenu />
      <MainMenu />
      <div className='freezesemesterdiv'>
        <h2 className='freezesemestertitle'>Change Password</h2>
      </div>
      <form action='' method='PUT'>
        <div className='stdpasswordformdiv'>
          <label className='stdcurrentlabel' htmlFor=''>
            Current Password
          </label>
          <br />
          <input className='stdpasswordinputs' type='password' name='old_password' value={update_password.old_password} onChange={handleInputs} placeholder='' />
          <br />
          <label className='stdnewlabel' htmlFor=''>
            New Password
          </label>
          <br />
          <input className='stdpasswordinputs' type='password' name='new_password' value={update_password.new_password} onChange={handleInputs} placeholder='' />
          <br />
          <label className='stdconfirmlabel' htmlFor=''>
            Confirm New Password
          </label>
          <br />
          <input className='stdpasswordinputs' type='password' name='confirm_password' value={update_password.confirm_password} onChange={handleInputs} placeholder='' />
          <br />
          <Link to='/StudentProfile'>
            <button className='cancelbutton'>Cancel</button>
          </Link>
          <button className='submitbutton' onClick={Update_Password}>
            Submit
          </button>
          <ToastContainer position='top-center' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default ChangeStudentPassword;
