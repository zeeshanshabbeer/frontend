import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import "./../../css/CurrentTimetable.css";

const CurrentTimetable = () => {
  const [timetable, setTimetable] = useState([]);
  const S_Timetable = async () => {
    const res = await fetch("/Timetable/StudentTimetable", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    if (data.status === "success") {
      setTimetable(data.message);
    }
  };
  useEffect(() => {
    //we can not use async function in useEffect
    S_Timetable();
  }, []);
  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />
      <div className="currenttimetablediv">
        <h2 className="currenttimetabletitle ">Timetable</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th className="current-course">Course Title</th>
            <th>Section</th>
            <th>Time</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((time) => (
            <tr>
              <td>{time.Day}</td>
              <td className="current-course">{time.courseName}</td>
              <td>{time.courseSection}</td>
              <td>{time.classTime}</td>
              <td>{time.classRoom}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default CurrentTimetable;
