import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import back from "./../../icons/back.png";
import { Link } from "react-router-dom";
import "./../../css/GuidanceBox.css";

const NeedGuidance = () => {
  const [guide, setGuide] = useState([]);

  const submit = async (course) => {
    const res = await fetch(
      `https://backend-three-nu.vercel.app/Guidance/Guidance/${course}`,
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
    if (!data) {
      window.alert("invalid");
    } else {
      setGuide(data.message);
    }
  };

  useEffect(() => {}, [guide]);
  //get all(sos or elective) courses to check what is coursecode and credits hours
  const [allCourses, setAllCourses] = useState([]);
  const getAllCourses = async () => {
    const res = await fetch(
      "https://backend-three-nu.vercel.app/SechemeOfStudy/AllCourses",
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
      setAllCourses(data.message);
    }
  };
  useEffect(() => {
    getAllCourses();
  }, []);
  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />
      <div className="pastpapersdiv">
        <Link to="/GuidanceBox">
          <img src={back} alt="" className="backiconneed" />
        </Link>
        <h2 className="pastpaperstitle">Need Guidance</h2>
      </div>
      <div className="needguidancecontainer">
        {/* <form action="" method="GET"> */}
        <br />
        <label className="selectcourselabel" htmlFor="">
          Select Course
        </label>
        <br />
        <select
          className="selectcourseinput"
          name="course"
          onChange={(e) => submit(e.target.value)}
          id=""
          placeholder=""
        >
          <option value="" disabled selected hidden>
            Select the course in which you need help
          </option>
          {allCourses.length === "" ? (
            <option>No course Available</option>
          ) : (
            allCourses.map((course) => (
              <option placeholder="Select the course in which you need help">
                {course.courseName}
              </option>
            ))
          )}

          {/* <option value="Human Computer Interaction">
              Human Computer Interaction
            </option>
            <option value="Game Development">Game Development</option>
            <option value="Software Project Management">
              Software Project Management
            </option>
            <option value="Multivariable Calculus">
              Multivariable Calculus
            </option> */}
        </select>
        {/* </form> */}
      </div>
      <div className="needguidancetablecontainer">
        {guide == "" ? (
          <h3 className="norecord">No record found!</h3>
        ) : (
          <form action="" method="GET">
            <table className="needguidancetable">
              <tr>
                <th className="namecol">Name</th>
                <th className="emailcol">Email</th>
                <th className="emailcol">Contact No</th>
              </tr>
              {guide.map((guiding) => (
                <tr>
                  <td className="namecol">{guiding.name}</td>
                  <td className="emailcol">{guiding.email}</td>
                  <td>{guiding.contactNo}</td>
                </tr>
              ))}
            </table>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default NeedGuidance;
