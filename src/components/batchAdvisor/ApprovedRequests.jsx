import React, { useState, useEffect } from "react";
import Footer from "../student/Footer";
import BatchAdvisorMainMenu from "./BatchAdvisorMainMenu";
import BatchAdvisorTopMenu from "./BatchAdvisorTopMenu";
import del from "./../../icons/deleteicon.png";
import "./../../css/ApprovedRequests.css";
import DeleteAddedCoursePopup from "./../student/DeleteAddedCoursePopup.jsx";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const ApprovedRequests = () => {
  const [userData, setUserData] = useState([]);
  const [pageLoad, setPageLoad] = useState(0);
  const S_Profile = async () => {
    const res = await fetch("/ApprovedRequest/ApprovedRequest", {
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

  const deleted = async (_id) => {
    // const res = await fetch(`/delete/${_id}`, {
    const res = await fetch(`/ApprovedRequest/delete/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      Success(data.message);
      setTimeout(() => {
        setPageLoad(pageLoad + 1);
      }, 3000);
    }
  };

  useEffect(() => {
    S_Profile();
  }, [pageLoad]);
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="BAprofilecontainer">
      <BatchAdvisorTopMenu />
      <BatchAdvisorMainMenu />
      <div className="menuheadingdiv">
        <h2 className="ApprovedRequeststitle">Approved Requests</h2>
      </div>
      {userData.length === 0 ? (
        <div className="emptydiv">
          <h2 className="emptytext">You don't have any approved requests!</h2>
        </div>
      ) : (
        <form action="">
          <table className="pendingTable" id="table-to-xls">
            <tr>
              <th className="ARregno">Reg No</th>
              <th className="ARname">Name</th>
              <th className="ARcode">Course Code</th>
              <th className="ARtitle">Course Title</th>
              <th className="ARcredits">Credits</th>
              <th className="ARsection">Section</th>
              <th className="ARrequest">Action</th>
              <th className="ARdel">Delete</th>
            </tr>
            {userData.map((approved) => (
              <tr>
                <td className="ARregno">{approved.registrationId}</td>
                <td className="ARname">{approved.name}</td>
                <td className="ARcode">{approved.courseCode}</td>
                <td className="ARtitle">{approved.courseName}</td>
                <td className="ARcredits">{approved.credits}</td>
                <td className="ARsection">{approved.section}</td>
                <td className="ARrequest">{approved.action}</td>
                <td className="ARdel">
                  <img
                    className="tooltip"
                    src={del}
                    alt=""
                    onClick={() => deleted(approved._id)}
                  />
                </td>
              </tr>
            ))}
          </table>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="print"
            table="table-to-xls"
            filename="Add/Drop List"
            sheet="tablexls"
            buttonText="Download"
          />
        </form>
      )}
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
      <Footer />
      <DeleteAddedCoursePopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form action="">
          <h3 className="DeleteConfirmation">
            Are you sure you want to delete this request?
          </h3>
          <button className="DeleteAddedCourseButton ">Delete</button>
        </form>
      </DeleteAddedCoursePopup>
    </div>
  );
};

export default ApprovedRequests;
