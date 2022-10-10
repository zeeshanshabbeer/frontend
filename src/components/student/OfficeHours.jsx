import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import "./../../css/OfficeHours.css";

const OfficeHours = () => {
  const [monday, setMonday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);

  const S_office = async () => {
    const res = await fetch("/OfficeHours/officehour", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    if (data.status === "success") {
      let M_from,
        M_to,
        T_from,
        T_to,
        W_from,
        W_to,
        Th_from,
        Th_to,
        F_from,
        F_to = "";
      // From time of Monday
      if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "01" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "02" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "03" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "04" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "05" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "06" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "07" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "08" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "09" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "10" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "11" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "12" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "01" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "02" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "03" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "04" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "05" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "06" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "07" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "08" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "09" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "10" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "11" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].from.charAt(0) +
          data.message.Monday[0].from.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Monday[0].from.substring(2, 5);
        M_from = "12" + data1 + " " + "PM";
      }

      // To time of Monday
      if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "01" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "02" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "03" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "04" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "05" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "06" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "07" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "08" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "09" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "10" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "11" + data1 + " " + "PM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "12" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "01" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "02" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "03" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "04" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "05" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "06" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "07" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "08" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "09" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "10" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "11" + data1 + " " + "AM";
      } else if (
        data.message.Monday[0].to.charAt(0) +
          data.message.Monday[0].to.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Monday[0].to.substring(2, 5);
        M_to = "12" + data1 + " " + "PM";
      }

      // from time to Tuesday
      if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "01" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "02" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "03" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "04" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "05" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "06" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "07" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "08" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "09" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "10" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "11" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "12" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "01" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "02" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "03" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "04" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "05" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "06" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "07" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "08" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "09" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "10" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "11" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].from.charAt(0) +
          data.message.Tuesday[0].from.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Tuesday[0].from.substring(2, 5);
        T_from = "12" + data1 + " " + "PM";
      }

      // to time to Tuesday
      if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "01" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "02" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "03" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "04" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "05" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "06" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "07" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "08" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "09" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "10" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "11" + data1 + " " + "PM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "12" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "01" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "02" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "03" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "04" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "05" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "06" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "07" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "08" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "09" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "10" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "11" + data1 + " " + "AM";
      } else if (
        data.message.Tuesday[0].to.charAt(0) +
          data.message.Tuesday[0].to.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Tuesday[0].to.substring(2, 5);
        T_to = "12" + data1 + " " + "PM";
      }

      // from time of wednesday
      if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "01" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "02" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "03" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "04" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "05" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "06" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "07" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "08" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "09" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "10" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "11" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "12" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "01" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "02" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "03" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "04" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "05" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "06" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "07" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "08" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "09" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "10" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "11" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].from.charAt(0) +
          data.message.Wednesday[0].from.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Wednesday[0].from.substring(2, 5);
        W_from = "12" + data1 + " " + "PM";
      }

      // to time to Wednesday
      if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "01" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "02" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "03" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "04" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "05" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "06" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "07" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "08" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "09" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "10" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "11" + data1 + " " + "PM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "12" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "01" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "02" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "03" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "04" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "05" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "06" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "07" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "08" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "09" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "10" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "11" + data1 + " " + "AM";
      } else if (
        data.message.Wednesday[0].to.charAt(0) +
          data.message.Wednesday[0].to.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Wednesday[0].to.substring(2, 5);
        W_to = "12" + data1 + " " + "PM";
      }

      // from time to Thursday
      if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "01" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "02" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "03" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "04" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "05" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "06" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "07" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "08" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "09" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "10" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "11" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "12" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "01" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "02" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "03" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "04" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "05" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "06" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "07" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "08" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "09" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "10" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "11" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].from.charAt(0) +
          data.message.Thursday[0].from.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Thursday[0].from.substring(2, 5);
        Th_from = "12" + data1 + " " + "PM";
      }

      // to time to thursday
      if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "01" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "02" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "03" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "04" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "05" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "06" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "07" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "08" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "09" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "10" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "11" + data1 + " " + "PM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "12" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "01" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "02" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "03" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "04" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "05" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "06" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "07" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "08" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "09" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "10" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "11" + data1 + " " + "AM";
      } else if (
        data.message.Thursday[0].to.charAt(0) +
          data.message.Thursday[0].to.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Thursday[0].to.substring(2, 5);
        Th_to = "12" + data1 + " " + "PM";
      }

      // from time of friday
      if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "01" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "02" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "03" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "04" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "05" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "06" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "07" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "08" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "09" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "10" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "11" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "12" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "01" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "02" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "03" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "04" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "05" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "06" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "07" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "08" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "09" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "10" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "11" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].from.charAt(0) +
          data.message.Friday[0].from.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Friday[0].from.substring(2, 5);
        F_from = "12" + data1 + " " + "PM";
      }

      // to time of Friday
      if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "13"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "01" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "14"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "02" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "15"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "03" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "16"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "04" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "17"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "05" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "18"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "06" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "19"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "07" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "20"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "08" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "21"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "09" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "22"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "10" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "23"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "11" + data1 + " " + "PM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "00"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "12" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "01"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "01" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "02"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "02" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "03"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "03" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "04"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "04" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "05"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "05" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "06"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "06" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "07"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "07" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "08"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "08" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "09"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "09" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "10"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "10" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "11"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "11" + data1 + " " + "AM";
      } else if (
        data.message.Friday[0].to.charAt(0) +
          data.message.Friday[0].to.charAt(1) ===
        "12"
      ) {
        const data1 = data.message.Friday[0].to.substring(2, 5);
        F_to = "12" + data1 + " " + "PM";
      }
      let Monday = [
        {
          day: data.message.Monday[0].day,
          from: M_from,
          to: M_to,
        },
      ];
      let Tuesday = [
        {
          day: data.message.Tuesday[0].day,
          from: T_from,
          to: T_to,
        },
      ];
      let Wednesday = [
        {
          day: data.message.Wednesday[0].day,
          from: W_from,
          to: W_to,
        },
      ];
      let Thursday = [
        {
          day: data.message.Thursday[0].day,
          from: Th_from,
          to: Th_to,
        },
      ];
      let Friday = [
        {
          day: data.message.Friday[0].day,
          from: F_from,
          to: F_to,
        },
      ];
      setMonday(Monday);
      setTuesday(Tuesday);
      setWednesday(Wednesday);
      setThursday(Thursday);
      setFriday(Friday);
    }
  };
  useEffect(() => {
    //we can not use async function in useEffect
    S_office();
  }, []);

  // change time format

  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />
      <div className="freezesemesterdiv">
        <h2 className="freezesemestertitle">Office Hours</h2>
      </div>
      <table>
        <tr>
          <th className="dayCol">Day</th>
          <th className="fromCol">From</th>
          <th className="toCol">To</th>
        </tr>
        {monday.map((time) => (
          <tr>
            <td>{time.day}</td>
            <td>{time.from}</td>
            <td>{time.to}</td>
          </tr>
        ))}
        {tuesday.map((time) => (
          <tr>
            <td>{time.day}</td>
            <td>{time.from}</td>
            <td>{time.to}</td>
          </tr>
        ))}
        {wednesday.map((time) => (
          <tr>
            <td>{time.day}</td>
            <td>{time.from}</td>
            <td>{time.to}</td>
          </tr>
        ))}
        {thursday.map((time) => (
          <tr>
            <td>{time.day}</td>
            <td>{time.from}</td>
            <td>{time.to}</td>
          </tr>
        ))}
        {friday.map((time) => (
          <tr>
            <td>{time.day}</td>
            <td>{time.from}</td>
            <td>{time.to}</td>
          </tr>
        ))}
      </table>
      <Footer />
    </div>
  );
};

export default OfficeHours;
