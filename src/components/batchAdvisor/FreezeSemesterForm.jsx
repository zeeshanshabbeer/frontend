import React, { useState, useEffect } from "react";
import Footer from "../student/Footer";
import emailjs from "emailjs-com";
import BatchAdvisorMainMenu from "./BatchAdvisorMainMenu";
import BatchAdvisorTopMenu from "./BatchAdvisorTopMenu";
import "./../../css/PendingRequests.css";
import RejectRequestPopup from "./RejectRequestPopup";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FreezeSemesterForm = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://backend-three-nu.vercel.app/FreezeSemester/FreezeSemester_Accept",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationId,
        }),
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      emailjs
        .sendForm(
          "FreezeSemester_Service",
          "FreezeSemester_Email",
          e.target,
          "user_8Oqr3FKbWRDqndN2Yr0x7"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      toast.success("A mail has been sent to the DCO!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/PendingRequests"); //this.props.navigation.navigate('Login')
      }, 3000);
    } else {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const location = useLocation();
  const registrationId = location.state;
  const navigate = useNavigate();
  const [freezeForm, setFreezeForm] = useState([]);
  useEffect(() => {
    //we can not use async function in useEffect
    FreezeForm();
  }, []);

  const FreezeForm = async () => {
    const res = await fetch(
      `https://backend-three-nu.vercel.app/FreezeSemester/Freeze_Form/${registrationId}`,
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
      setFreezeForm(data.message);
    }
  };

  const [reject, setReject] = useState({ reason: "" });
  const [buttonPopup, setButtonPopup] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://backend-three-nu.vercel.app/FreezeSemester/FreezeSemester_reject",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationId,
        }),
      }
    );
    const data = await res.json();
    setButtonPopup(false);
    if (data.status === "success") {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/PendingRequests");
      }, 3000);
    } else {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  //accept button
  // const Submit_A = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("https://backend-three-nu.vercel.app/FreezeSemester/FreezeSemester_Accept", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       registrationId,
  //     }),
  //   });
  //   const data = await res.json();
  //   if (data.status === "success") {
  //     toast.success(data.message, {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } else {
  //     toast.error(data.message, {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };

  return (
    <div className="BAprofilecontainer">
      <BatchAdvisorTopMenu />
      <BatchAdvisorMainMenu />
      <div className="menuheadingdiv">
        <h2 className="freezesemestertitle">Freeze Form</h2>
      </div>
      <div className="FreezeSemesterFormContainer">
        <form action="" onSubmit={sendEmail}>
          <div className="credentials">
            <h3 className="formLabel">Name: </h3>
            <input
              type="text"
              name="name"
              className="formDataName"
              value={freezeForm.name}
            />
          </div>
          <div className="credentials">
            <h3 className="formLabel">Reg No:</h3>
            <input
              type="text"
              name="regno"
              className="formData"
              value={freezeForm.registrationId}
            />
          </div>
          <div className="credentials">
            <h3 className="formLabel">Section:</h3>
            <input
              type="text"
              name="section"
              className="formData"
              value={freezeForm.section}
            />
          </div>
          <div className="credentials">
            <h3 className="formLabel">Email:</h3>
            <input
              type="text"
              name="email"
              className="formDataEmail"
              value={freezeForm.email}
            />
          </div>
          <div className="credentials">
            <h3 className="formLabel">CGPA:</h3>
            <input
              type="text"
              name="cgpa"
              className="formDataCgpa"
              value={freezeForm.CGPA}
            />
          </div>
          <div className="credentials">
            <h3 className="formLabel">Contact:</h3>
            <input
              type="text"
              name="contact"
              className="formDataContact"
              value={freezeForm.contactNo}
            />
          </div>
          <div className="credentials2">
            <h3 className="formLabel">Continuation Semester:</h3>
            <input
              type="text"
              name="continuationtime"
              className="FreezeTime"
              value={freezeForm.continuationTime}
            />
          </div>
          <h3 className="formreasonLabel">Reason:</h3>
          <div className="credentials3">
            <textarea
              cols={37}
              rows={10}
              type="text"
              name="reason"
              className="FreezeFormReason"
              value={freezeForm.reason}
            />
          </div>
          <button className="FreezeAcceptBtn">Accept</button>
        </form>
        <div className="rejectbtndiv">
          <button
            className="FreezeRejectBtn"
            onClick={() => setButtonPopup(true)}
          >
            Reject
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
        </div>
      </div>
      <Footer />
      <RejectRequestPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form action="">
          <label htmlFor="" className="dropreasonlabel">
            Reason
          </label>
          <br />
          <textarea
            name="reason"
            value={reject.reason}
            onChange={(e) => setReject(e.target.value)}
            className="dropreasoninput"
            placeholder="Enter a reason to reject this request"
            cols="40"
            rows="5"
            required
          ></textarea>
          <br />
          <button className="rejectBtn" onClick={submit}>
            Reject
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
          <br />
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
      </RejectRequestPopup>
    </div>
  );
};

export default FreezeSemesterForm;
