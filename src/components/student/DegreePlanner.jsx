import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import Loadable from "react-loadable";
import LoadingIndicator from "../TimetableImages/LoadingIndicator";
import "./../../css/DegreePlanner.css";

const DegreePlanner = () => {
  const [Track, setTrack] = useState();
  const [degree, setDegree] = useState({ data: "", name: "" });

  const degreeTrack = async () => {
    const res = fetch("https://backend-three-nu.vercel.app/DegreePlanner/DegreePlanner", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
    });
    const data = await (await res).json();
    if (data.status === "success") {
      setDegree(data);
    }
  };
  useEffect(() => {
    if (degree.data === "") {
      degreeTrack();
    }
  });
  // get all(sos or elective) courses to check what is coursecode and credits hours
  // const [allCourses, setAllCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const getAllCourses = async () => {
    const res = await fetch("https://backend-three-nu.vercel.app/SechemeOfStudy/AllCourses", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setAllCourses(data.message);
      let arr = [];
      if (degree.data.message === "Track 1") {
        for (let i = 0; i < allCourses.length; i++) {
          if (allCourses[i].courseName === "Mobile Application Development" || allCourses[i].courseName === "Software Project Management" || allCourses[i].courseName === "Game Development") {
            arr.push({
              course: allCourses[i].courseName,
            });
          }
        }
        setCourse(arr);
      } else if (degree.data.message === "Track 3") {
        for (let i = 0; i < allCourses.length; i++) {
          if (allCourses[i].courseName === "Computational Intelligence" || allCourses[i].courseName === "Introduction to Data Science" || allCourses[i].courseName === "Data Warehousing and Data") {
            arr.push({
              course: allCourses[i].courseName,
            });
          }
        }
        setCourse(arr);
      } else if (degree.data.message === "Track 4") {
        for (let i = 0; i < allCourses.length; i++) {
          if (
            allCourses[i].courseName === "Digital Image Processing" ||
            allCourses[i].courseName === "Computer Graphics" ||
            allCourses[i].courseName === "Machine Learning" ||
            allCourses[i].courseName === "Computer Vision"
          ) {
            arr.push({
              course: allCourses[i].courseName,
            });
          }
        }
        setCourse(arr);
      }
    }
  };
  useEffect(() => {
    if (allCourses.length === 0) {
      getAllCourses();
    }
  });

  function selectedImage(select) {
    const Component = loadComponent(select);
    return Component;
  }
  function loadComponent(Type) {
    switch (Type) {
      case "Track I - Software Development":
        const SoftwareDevelopment = Loadable({
          loader: () => import("./../SpecializationTracks/SoftwareDevelopment/SoftwareDevelopment"),
          loading: LoadingIndicator,
        });
        return <SoftwareDevelopment />;
      case "Track II - Database Technologies":
        const DatabaseTechnologies = Loadable({
          loader: () => import("./../SpecializationTracks/DatabaseTechnologies/DatabaseTechnologies"),
          loading: LoadingIndicator,
        });
        return <DatabaseTechnologies />;
      case "Track III - Artificial Intelligence and Graphics":
        const AIandGraphics = Loadable({
          loader: () => import("./../SpecializationTracks/AIandGraphics/AIandGraphics"),
          loading: LoadingIndicator,
        });
        return <AIandGraphics />;
      case "":
        return <h2 className='noimg'>Please select specialization track to view its courses!</h2>;

      default:
        return <h2 className='noimg'>Please select specialization track to view its courses!</h2>;
    }
  }

  return (
    <div className='maincontainer'>
      <TopMenu />
      <MainMenu />
      <div className='freezesemesterdiv'>
        <h2 className='freezesemestertitle'>Degree Planner</h2>
      </div>
      <div className='specializationTracksContainer'>
        <form action=''>
          <select
            className='tracksinput'
            name=''
            id=''
            placeholder=''
            required
            onChange={(e) => {
              setTrack(e.target.value);
            }}
          >
            <option value='' disabled selected hidden>
              Select Specialization Track
            </option>
            <option>Track I - Software Development</option>
            <option>Track II - Database Technologies</option>
            <option>Track III - Artificial Intelligence and Graphics</option>
          </select>
          <br />
        </form>
        <br />
        <div>{selectedImage(Track)}</div>
      </div>
      <div className='recommendedCoursesContainer'>
        <h2 className='RecommendationTitle'>Recommended Courses</h2>
        <h3 className='track'>{degree.data}</h3>
        <h3 className='trackname'>{degree.name}</h3>
      </div>
      <Footer />
    </div>
  );
};

export default DegreePlanner;
