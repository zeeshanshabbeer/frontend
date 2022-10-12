import React, { useEffect, useState } from "react";
import validator from "validator";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import Footer from "./Footer";
import "./../../css/StudentProfile.css";
import edit from "./../../icons/edit.png";
import { Link } from "react-router-dom";
import ChangeStudentContact from "./ChangeStudentContact";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const StudentProfile = () => {
  const [userData, setUserData] = useState({});
  const [update_contact_no, setUpdate_contact_no] = useState({
    contactNo: "",
  });
  const [buttonPopup, setButtonPopup] = useState(false);
  const [pageLoad, setPageLoad] = useState(0);

  const S_Profile = async () => {
    setButtonPopup(false);
    setUpdate_contact_no({ contactNo: "" });
    const res = await fetch(
      "https://backend-three-nu.vercel.app/Student/Studentprofile",
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
      setUserData(data.message);
    }
  };
  useEffect(() => {
    //we can not use async function in useEffect
    S_Profile();
  }, [pageLoad]);

  // for update contact
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUpdate_contact_no({ ...update_contact_no, [name]: value });
  };
  // const navigate = useNavigate();
  const update_contact = async (e) => {
    e.preventDefault();
    const { contactNo } = update_contact_no;
    if (!update_contact_no.contactNo) {
      Error("Please enter the contact no.");
      return;
    }
    if (validator.isNumeric(contactNo)) {
      if (contactNo.length === 10) {
        const res = await fetch(
          "https://backend-three-nu.vercel.app/Student/UpdateContact",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contactNo,
            }),
          }
        );
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
        Error("Format is incorrect.");
        return;
      }
    } else {
      Error("Only digits are allowed.");
      return;
    }
  };

  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />
      <div className="freezesemesterdiv">
        <h2 className="freezesemestertitle">Profile</h2>
      </div>
      <form action="" method="GET">
        <div className="profileformdiv">
          <label className="label" htmlFor="">
            Name
          </label>
          <br />
          <input
            className="input"
            type="text"
            value={userData.name}
            placeholder=""
          />
          <br />
          <label className="label" htmlFor="">
            Father Name
          </label>
          <br />
          <input
            className="input"
            type="text"
            value={userData.fatherName}
            placeholder=""
          />
          <br />
          <label className="label" htmlFor="">
            Registration Number
          </label>
          <br />
          <input
            className="input"
            type="text"
            value={userData.registrationId}
            placeholder=""
          />
          <br />
          <label className="label" htmlFor="">
            Email
          </label>
          <br />
          <input
            className="input"
            type="text"
            value={userData.email}
            placeholder=""
          />
          <br />
          <label className="label" htmlFor="">
            Address
          </label>
          <br />
          <input
            className="input"
            type="text"
            value={userData.address}
            placeholder=""
          />
          <br />
          <label className="label" htmlFor="">
            Contact Number
          </label>
          <br />
          <input
            className="input"
            type="text"
            value={userData.contactNo}
            placeholder=""
          />
          <img
            onClick={() => setButtonPopup(true)}
            className="editicon"
            src={edit}
            alt=""
          />
          <br />
          <label className="label" htmlFor="">
            Batch Advisor Name
          </label>
          <br />
          <input
            className="input"
            type="text"
            value={userData.batchAdvisorName}
            placeholder="Dr. Hamza"
          />
          <br />
          <Link className="psdlink" to="/ChangeStudentPassword">
            <label className="psdlabel" htmlFor="">
              Change Password
            </label>
          </Link>
          <br />
          <br />
          <div className="picdiv">
            <img src={userData.profilePic} alt="" />
          </div>
        </div>
      </form>
      <Footer />
      <ChangeStudentContact trigger={buttonPopup} setTrigger={setButtonPopup}>
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
      </ChangeStudentContact>
    </div>
  );
};

export default StudentProfile;
