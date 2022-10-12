import React, { useState, useEffect } from "react";
import BatchAdvisorMainMenu from "./BatchAdvisorMainMenu";
import BatchAdvisorTopMenu from "./BatchAdvisorTopMenu";
import Footer from "./../student/Footer";

import "./../../css/BatchAdvisorOfficeHours.css";

const BatchAdvisorOfficeHours = () => {
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);

  const MondayF = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      from = "a";
      day = "Monday";
      to = "--";
    } else {
      from = e.target.value;
      day = "Monday";
      to = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const MondayT = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      to = "a";
      day = "Monday";
      from = "--";
    } else {
      to = e.target.value;
      day = "Monday";
      from = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const TuesdayF = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      from = "a";
      day = "Tuesday";
      to = "--";
    } else {
      from = e.target.value;
      day = "Tuesday";
      to = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const TuesdayT = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      from = "--";
      day = "Tuesday";
      to = "a";
    } else {
      to = e.target.value;
      day = "Tuesday";
      from = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const WednesdayF = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      from = "a";
      day = "Wednesday";
      to = "--";
    } else {
      from = e.target.value;
      day = "Wednesday";
      to = "--";
    }

    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const WednesdayT = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      to = "a";
      day = "Wednesday";
      from = "--";
    } else {
      to = e.target.value;
      day = "Wednesday";
      from = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const ThursdayF = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      from = "a";
      day = "Thursday";
      to = "--";
    } else {
      from = e.target.value;
      day = "Thursday";
      to = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const ThursdayT = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      to = "a";
      day = "Thursday";
      from = "--";
    } else {
      to = e.target.value;
      day = "Thursday";
      from = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const FridayF = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      from = "a";
      day = "Friday";
      to = "--";
    } else {
      from = e.target.value;
      day = "Friday";
      to = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };
  const FridayT = async (e) => {
    let from,
      day,
      to = "";
    if (e.target.value === "") {
      to = "a";
      day = "Friday";
      from = "--";
    } else {
      to = e.target.value;
      day = "Friday";
      from = "--";
    }
    const res = await fetch(
      `https://backend-three-nu.vercel.app/OfficeHours/officehours/${day}/${from}/${to}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          from,
          to,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      S_office();
    }
  };

  const S_office = async () => {
    const res = await fetch(
      "https://backend-three-nu.vercel.app/OfficeHours/officehours",
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
      setMonday(data.message.Monday);
      setTuesday(data.message.Tuesday);
      setWednesday(data.message.Wednesday);
      setThursday(data.message.Thursday);
      setFriday(data.message.Friday);
    }
  };
  useEffect(() => {
    //we can not use async function in useEffect
    if (
      monday.length === 0 ||
      tuesday.length === 0 ||
      wednesday.length === 0 ||
      thursday.length === 0 ||
      friday.length === 0
    ) {
      S_office();
    }
  }, []);
  return (
    <div className="BAprofilecontainer">
      <BatchAdvisorTopMenu />
      <BatchAdvisorMainMenu />
      <div className="menuheadingdiv">
        <h2 className="freezesemestertitle">Office Hours</h2>
      </div>
      <table>
        <tr>
          <th className="columns">Day</th>
          <th className="columns">From</th>
          <th className="columns">To</th>
        </tr>
        {monday.map((time) => (
          <tr>
            <td className="days">{time.day}</td>
            <td>
              {" "}
              <input
                type="time"
                className="timeInput"
                name="from"
                value={time.from}
                onChange={MondayF}
              />
            </td>
            <td>
              <input
                type="time"
                className="timeInput"
                name="to"
                value={time.to}
                onChange={MondayT}
              />
            </td>
          </tr>
        ))}
        {tuesday.map((time) => (
          <tr>
            <td className="days">{time.day}</td>
            <td>
              <input
                type="time"
                className="timeInput"
                name="from"
                value={time.from}
                onChange={TuesdayF}
                // placeholder={time.from}
              />
            </td>
            <td>
              <input
                type="time"
                className="timeInput"
                name="to"
                value={time.to}
                onChange={TuesdayT}
                // placeholder={time.to}
              />
            </td>
          </tr>
        ))}
        {wednesday.map((time) => (
          <tr>
            <td className="days">{time.day}</td>
            <td>
              {" "}
              <input
                type="time"
                className="timeInput"
                name="from"
                value={time.from}
                onChange={WednesdayF}
              />
            </td>
            <td>
              {" "}
              <input
                type="time"
                className="timeInput"
                name="to"
                value={time.to}
                onChange={WednesdayT}
              />
            </td>
          </tr>
        ))}
        {thursday.map((time) => (
          <tr>
            <td className="days">{time.day}</td>
            <td>
              {" "}
              <input
                type="time"
                className="timeInput"
                name="from"
                value={time.from}
                onChange={ThursdayF}
              />
            </td>
            <td>
              {" "}
              <input
                type="time"
                className="timeInput"
                name="to"
                value={time.to}
                onChange={ThursdayT}
              />
            </td>
          </tr>
        ))}
        {friday.map((time) => (
          <tr>
            <td className="days">{time.day}</td>
            <td>
              {" "}
              <input
                type="time"
                className="timeInput"
                name="from"
                value={time.from}
                onChange={FridayF}
              />
            </td>
            <td>
              {" "}
              <input
                type="time"
                className="timeInput"
                name="to"
                value={time.to}
                onChange={FridayT}
              />
            </td>
          </tr>
        ))}
      </table>
      <Footer />;
    </div>
  );
};

export default BatchAdvisorOfficeHours;
