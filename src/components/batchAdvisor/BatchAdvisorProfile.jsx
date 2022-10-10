import React, { useState, useEffect } from "react";
import validator from "validator";
import Footer from "./../student/Footer";
import "./../../css/StudentProfile.css";
import edit from "./../../icons/edit.png";
import BatchAdvisorTopMenu from "./BatchAdvisorTopMenu";
import BatchAdvisorMainMenu from "./BatchAdvisorMainMenu";
import ChangeBatchAdvisorContact from "./ChangeBatchAdvisorContact";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const BatchAdvisorProfile = () => {
  const [userData, setUserData] = useState({});
  const [buttonPopup, setButtonPopup] = useState(false);
  const [update_contact_no, setUpdate_contact_no] = useState({
    contactNo: "",
  });
  const [pageLoad, setPageLoad] = useState(0);
  useEffect(() => {
    //we can not use async function in useEffect
    BA_Profile();
  }, [pageLoad]);

  const BA_Profile = async () => {
    setButtonPopup(false);
    setUpdate_contact_no({ contactNo: "" });
    const res = await fetch("/BatchAdvisor/BatchAdvisorProfile", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    if (data.status === "success") {
      setUserData(data.message);
    }
  };
  // for update contact

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUpdate_contact_no({ ...update_contact_no, [name]: value });
  };

  const update_contact = async (e) => {
    e.preventDefault();
    const { contactNo } = update_contact_no;
    if (!update_contact_no.contactNo) {
      Error("Please enter the contact no.");
      return;
    }
    if (validator.isNumeric(contactNo)) {
      if (contactNo.length === 10) {
        const res = await fetch("/BatchAdvisor/BA_updatecontact", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactNo,
          }),
        });
        const data = await res.json();
        if (data.status === "success") {
          Success(data.message);
          setTimeout(() => {
            setPageLoad(pageLoad + 1);
          }, 3000);
        } else {
          Error(data.message);
        }
      } else {
        Error("Enter the phone Number in this Format (XXXXXXXXXX)");
        return;
      }
    } else {
      Error("Enter only the digit");
      return;
    }
  };

  return (
    <div className="BAprofilecontainer">
      <BatchAdvisorTopMenu />
      <BatchAdvisorMainMenu />
      <div className="menuheadingdiv">
        <h2 className="freezesemestertitle">Profile</h2>
      </div>
      <form action="" method="GET">
        <div className="BAprofileformdiv">
          <label className="BAnamelabel" htmlFor="">
            Name
          </label>
          <br />
          <input
            className="BAfirsttwoinputs"
            type="text"
            value={userData.name}
            placeholder=""
          />
          <br />
          <label className="BAemaillabel" htmlFor="">
            Email
          </label>
          <br />
          <input
            className="BAfirsttwoinputs"
            type="text"
            value={userData.email}
            placeholder=""
          />
          <br />
          <label className="BAcontactlabel" htmlFor="">
            Contact Number
          </label>
          <br />
          <input
            className="BAinput"
            type="text"
            value={userData.contactNo}
            placeholder=""
          />
          <img
            className="editicon"
            onClick={() => setButtonPopup(true)}
            src={edit}
            alt=""
          />
          <br />
          <Link className="BApsdlink" to="/ChangeBatchAdvisorPassword">
            <label className="BApsdlabel" htmlFor="">
              Change Password
            </label>
          </Link>
          <br />
          <br />
        </div>
      </form>
      <Footer />
      <ChangeBatchAdvisorContact
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      >
        <form action="" method="PUT">
          <label htmlFor="" className="newcontactlabel">
            New Contact Number
          </label>
          <br />
          <input
            type="text"
            className="newcontactinput"
            required
            name="contactNo"
            value={update_contact_no.contactNo}
            onChange={handleInputs}
            placeholder=""
          />
          <br />
          <button className="newcontactbutton" onClick={update_contact}>
            Update
          </button>
        </form>
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
      </ChangeBatchAdvisorContact>
    </div>
  );
};

export default BatchAdvisorProfile;
