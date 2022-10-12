import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import "./../../css/AddCourse.css";
import deleteicon from "./../../icons/deleteicon.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const AddCourse = () => {
  const [loadComponents, setLoadComponents] = useState(0);
  //fetch credits hours
  const [creditHours, setCreditHours] = useState("");
  const getCreditsHour = async () => {
    const res = await fetch(
      "https://backend-three-nu.vercel.app/AddCourse/CreditHour",
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
      setCreditHours(data.message);
    }
  };
  useEffect(() => {
    getCreditsHour();
  }, [loadComponents]);
  // get all courses that student can add
  const [getCourses, setGetCourses] = useState([]);
  const getAddCourses = async () => {
    const res = await fetch(
      "https://backend-three-nu.vercel.app/AddCourse/CoursesThatAdded",
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
      setGetCourses(data.message);
    }
  };
  useEffect(() => {
    getAddCourses();
  }, [loadComponents]);

  //course that student want to add
  const [addcourse, setAddcourse] = useState({
    courseName: "",
  });
  //Timetable clashes
  const [timetableClash, setTimetableClash] = useState([]);

  const TimeTableClash = async () => {
    const subject = addcourse;
    const res = await fetch(
      `https://backend-three-nu.vercel.app/Timetable/TimetableClashes/${subject}`,
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
      setTimetableClash(data.message);
    }
  };
  useEffect(() => {
    if (addcourse.courseName !== "") {
      TimeTableClash();
    }
  }, [addcourse]);
  // get all(sos or elective) courses to check what is coursecode and credits hours
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
  }, [loadComponents]);
  //credit hours and course code of course that student want to add
  const [courseDetail, setCourseDetail] = useState({
    courseCode: "",
    credits: "",
    courseName: "",
  });
  if (addcourse !== "") {
    if (addcourse !== courseDetail.courseName) {
      for (let i = 0; i < allCourses.length; i++) {
        if (allCourses[i].courseName === addcourse) {
          let courseCode = allCourses[i].courseCode;
          let credits = allCourses[i].credits;
          let courseName = allCourses[i].courseName;
          setCourseDetail({ ...courseDetail, courseCode, credits, courseName });
        }
      }
    }
  }
  // store reason in usestate
  const [reasons, setReasons] = useState("");
  // store section in useState
  const [sections, setSections] = useState("");
  // file
  const [fileName, setFileName] = useState();

  //get all the pending courses
  const [detail, setDetail] = useState([]);
  const getPendingCourses = async () => {
    setAddcourse({ courseName: "" });
    setCourseDetail({ courseCode: "", credits: "" });
    setSections("");
    setReasons("");
    setFileName();
    const res = await fetch(
      "https://backend-three-nu.vercel.app/PendingAddCourse/AddCourses",
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
      setDetail(data.message);
    }
  };
  useEffect(() => {
    getPendingCourses();
  }, [loadComponents]);
  //onclick add button
  const add = async (e) => {
    e.preventDefault();
    if (creditHours + courseDetail.credits >= 21) {
      Error("Credit hours cannot exceed 21.");
      return;
    }
    if (!courseDetail.courseName) {
      Error("Please select the course title.");
      return;
    }
    if (!courseDetail.courseCode) {
      Error("Please select the course code.");
      return;
    }
    if (!sections) {
      Error("Please select the concerned section.");
      return;
    }
    if (!reasons) {
      Error("Please enter the reason.");
      return;
    }

    if (addcourse !== "" && courseDetail.courseCode !== "" && reasons !== "") {
      const courseCode = courseDetail.courseCode;
      const courseName = courseDetail.courseName;
      const credits = courseDetail.credits;
      const section = sections;
      const reason = reasons;
      let preTest = "";
      let preReqCourse = "";
      for (let i = 0; i < allCourses.length; i++) {
        if (allCourses[i].courseCode === courseCode) {
          if (allCourses[i].prerequisite.length === 0) {
            preTest = "N/A";
            preReqCourse = "N/A";
          } else {
            preTest = "Available";
            for (let j = 0; j < allCourses[i].prerequisite.length; j++) {
              if (allCourses[i].prerequisite.length === 1) {
                for (let k = 0; k < allCourses.length; k++) {
                  if (
                    allCourses[k].courseCode ===
                    allCourses[i].prerequisite[j].course
                  ) {
                    preReqCourse = allCourses[k].courseName;
                  }
                }
              } else {
                for (let k = 0; k < allCourses.length; k++) {
                  if (
                    allCourses[k].courseCode ===
                    allCourses[i].prerequisite[j].course
                  ) {
                    preReqCourse = allCourses[k].courseName;
                  }
                }
              }
            }
          }
        }
      }
      const res = await fetch(
        "https://backend-three-nu.vercel.app/PendingAddCourse/AddpendingCourses",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseCode,
            courseName,
            section,
            credits,
            reason,
            preTest,
            preReqCourse,
          }),
        }
      );
      const data = await res.json();
      if (data.status === "success") {
        Success("Course added successfully.");
        setLoadComponents(loadComponents + 1);
      }
    }
  };

  //click on delete button
  const dele1 = async (courseName) => {
    const res = await fetch(
      `https://backend-three-nu.vercel.app/PendingAddCourse/DeleteSpecificRecord/${courseName}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      Success(data.message);
      setTimeout(() => {
        setLoadComponents(loadComponents + 1);
      }, 3000);
      // getPendingCourses();
    }
  };

  const ChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };
  const changeonClick = async (e) => {
    e.preventDefault();
    if (!fileName) {
      Error("Please upload the fee challan.");
      return;
    }
    const formData = new FormData();
    formData.append("fee", fileName);
    setFileName();
    const res = await fetch(
      "https://backend-three-nu.vercel.app/AddCourse/submit_AddForm",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    setLoadComponents(loadComponents + 1);
    if (data.status === "success") {
      Success(data.message);
    } else {
      Error(data.message);
      return;
    }
  };
  // display error on available
  const preTestAvailable = async (e) => {
    e.preventDefault();
    Error("Please attempt the pre-test.");
    return;
  };
  return (
    <div className="maincontainer">
      <TopMenu />
      <MainMenu />
      <div className="freezesemesterdiv">
        <h2 className="freezesemestertitle">Add Course</h2>
      </div>
      <div className="AddCourseFormContainer">
        <form action="">
          <h3 className="CreditHours">
            Current Credit Hours:
            <span className="credits">{creditHours}</span>
          </h3>
          <select
            className="CourseTitleandReasonInput"
            name="courseName"
            value={addcourse.courseName}
            onChange={(e) => setAddcourse(e.target.value)}
            id=""
            placeholder=""
            required
          >
            <option value="" disabled selected hidden>
              Course Title
            </option>
            {getCourses.length === 0 ? (
              <option disabled>No courses are available</option>
            ) : (
              getCourses.map((course) => <option>{course.courseName}</option>)
            )}
          </select>
          <input
            className="CourseCodeandCreditsInput"
            type="text"
            name="courseCode"
            value={courseDetail.courseCode}
            id=""
            placeholder="Course Code"
            readOnly
          />
          <input
            className="CourseCodeandCreditsInput"
            type="text"
            name="credits"
            value={courseDetail.credits}
            placeholder="Credits"
            readOnly
          />
          <select
            className="SectionInput"
            name="section"
            value={sections}
            onChange={(e) => setSections(e.target.value)}
            id=""
            placeholder=""
            required
          >
            <option value="" disabled selected hidden required>
              Concerned Section
            </option>
            {timetableClash.length === 0 ? (
              <option disabled>Clashes in all sections</option>
            ) : (
              timetableClash.map((timtable) => <option>{timtable}</option>)
            )}
          </select>
          <textarea
            className="AddReasonInput"
            name="reason"
            value={reasons}
            onChange={(e) => setReasons(e.target.value)}
            id=""
            cols="36.5"
            rows="3"
            placeholder="Enter Valid Reason"
            required
          ></textarea>
          <button className="Addbutton" onClick={add}>
            Add
          </button>
        </form>
      </div>
      <div className="AddCourseTableContainer">
        {detail.length === 0 ? (
          ""
        ) : (
          <form action="">
            <table className="AddCourseTable">
              <tr>
                <th className="CourseCodeColumn">Course Code</th>
                <th className="CourseTitleColumn">Course Title</th>
                <th className="CreditsColumn">Credits</th>
                <th className="SectionColumn">Section</th>
                <th className="PrereqCourseColumn">Pre-req Course</th>
                <th className="PretestColumn">Pre-test</th>
                <th className="DeleteColumn">Delete</th>
              </tr>
              {detail.map((add) => (
                <tr>
                  <td className="CourseCodeColumn">{add.courseCode}</td>
                  <td className="CourseTitleColumn">{add.courseName}</td>
                  <td className="CreditsColumn">{add.credits}</td>
                  <td className="SectionColumn">{add.section}</td>
                  <td className="PrereqCourseColumn">{add.preReqCourse}</td>
                  {add.preTest === "N/A" ? (
                    <td className="PretestColumn">{add.preTest}</td>
                  ) : add.preTest === "Available" ? (
                    <td className="PretestColumn">
                      <Link
                        to={"/PretestInstructions"}
                        state={add.preReqCourse}
                      >
                        {add.preTest}
                      </Link>
                    </td>
                  ) : (
                    <td className="PretestColumn">{add.preTest}</td>
                  )}
                  <td className="DeleteColumn">
                    <img
                      src={deleteicon}
                      alt=""
                      className="AddedCourseDelBtn"
                      onClick={() => dele1(add.courseName)}
                    />
                  </td>
                </tr>
              ))}
            </table>
            <br />
            <label className="FeeChallanLabel">
              Upload Copy of Paid Fee Challan:{" "}
            </label>
            <input
              type="file"
              id=""
              filename="fee"
              onChange={ChangeFile}
              accept="image/*"
              className="upload"
              required
            />
            <br />
            {detail.length === 1 && detail[0].preTest === "Available" ? (
              <button
                className="AddCourseSubmitButton"
                onClick={preTestAvailable}
              >
                Submit
              </button>
            ) : detail.length === 2 &&
              (detail[0].preTest === "Available" ||
                detail[1].preTest === "Available") ? (
              <button
                className="AddCourseSubmitButton"
                onClick={preTestAvailable}
              >
                Submit
              </button>
            ) : detail.length === 3 &&
              (detail[0].preTest === "Available" ||
                detail[1].preTest === "Available" ||
                detail[2].preTest === "Available") ? (
              <button
                className="AddCourseSubmitButton"
                onClick={preTestAvailable}
              >
                Submit
              </button>
            ) : detail.length === 4 &&
              (detail[0].preTest === "Available" ||
                detail[1].preTest === "Available" ||
                detail[2].preTest === "Available" ||
                detail[3].preTest === "Available") ? (
              <button
                className="AddCourseSubmitButton"
                onClick={preTestAvailable}
              >
                Submit
              </button>
            ) : (
              <button className="AddCourseSubmitButton" onClick={changeonClick}>
                Submit
              </button>
            )}
          </form>
        )}
      </div>
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
    </div>
  );
};

export default AddCourse;
