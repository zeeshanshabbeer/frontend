import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import "./../../css/RepeatCourse.css";

const RepeatCourse = () => {
  const [userData, setUserData] = useState([]);
  const S_Profile = async () => {
    const res = await fetch("/RepeatCourse/RepeatCourse", {
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
  useEffect(() => {
    //we can not use async function in useEffect
    S_Profile();
  }, []);

  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />

      <div className="freezesemesterdiv">
        <h2 className="freezesemestertitle">Repeat Course</h2>
      </div>
      {userData.length === 0 ? (
        <div className="emptydiv">
          <h2 className="emptytext">You don't have any course to repeat!</h2>
        </div>
      ) : (
        <div>
          <table>
            <tr>
              <th className="codeCol">Course Code</th>
              <th className="titleCol">Course Title</th>
              <th className="creditsCol">Credits</th>
              <th className="gpaCol">GPA</th>
            </tr>
            {userData.map((repeat) => (
              <tr>
                <td>{repeat.courseCode}</td>
                <td>{repeat.courseName}</td>
                <td>{repeat.credits}</td>
                <td>{repeat.gp}</td>
              </tr>
            ))}
          </table>
          <Link to="/AddCourse">
            <button className="repeatbtn">Add Course to Repeat</button>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default RepeatCourse;
