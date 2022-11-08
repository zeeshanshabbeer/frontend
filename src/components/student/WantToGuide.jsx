import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import back from "./../../icons/back.png";
import deleteicon from "./../../icons/deleteicon.png";
import { Link } from "react-router-dom";
import "./../../css/GuidanceBox.css";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";
import Success from "../../utils/Success";

const WantToGuide = () => {
  const [pageLoad, setPageLoad] = useState(0);
  const [course, setCourse] = useState("");
  // in which course you want to guide
  const submit = async (course) => {
    const res = await fetch(`https://backend-three-nu.vercel.app/Guidance/want_to_guide/${course}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
      body: JSON.stringify({
        course,
      }),
    });
    const data = await res.json();
    if (data.status === "success") {
      Success(data.message);
      setPageLoad(pageLoad + 1);
    } else {
      Error(data.message);
    }
  };
  // get the data
  const [coursedata, setCourseData] = useState([]);
  const wanttoguide = async () => {
    setCourse("");
    const res = await fetch("https://backend-three-nu.vercel.app/Guidance/guide_courses", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setCourseData(data.message);
    }
  };

  // checkbox
  const [checked, setChecked] = useState(false);
  // setChecked(true)
  const chec = async (add) => {
    setChecked(add);
    const res = await fetch(`https://backend-three-nu.vercel.app/Guidance/wantToGuide_contact/${add}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
    });
    await res.json();
  };
  const checkBox = async () => {
    const res = await fetch("https://backend-three-nu.vercel.app/Guidance/ContactNo", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      if (data.message.contactNo === "--") {
        if (checked) {
          setChecked(false);
        }
      } else {
        setChecked(true);
      }
    }
  };
  useEffect(() => {
    checkBox();
  }, []);

  // for delete courses
  const delcourse = async (course) => {
    const res = await fetch(`https://backend-three-nu.vercel.app/Guidance/Guidance/delete/${course}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
      body: JSON.stringify({
        course,
      }),
    });
    const data = await res.json();
    if (data.status === "success") {
      Success(data.message);
      setPageLoad(pageLoad + 1);
    } else {
      Error(data.message);
    }
  };
  // use Effect
  useEffect(() => {
    wanttoguide();
  }, [pageLoad]);
  //get all(sos or elective) courses to check what is coursecode and credits hours
  const [allCourses, setAllCourses] = useState([]);
  const getAllCourses = async () => {
    setCourse("");
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
    }
  };
  useEffect(() => {
    getAllCourses();
  }, [pageLoad]);
  return (
    <div className='maincontainer'>
      <TopMenu />
      <MainMenu />
      <div className='pastpapersdiv'>
        <Link to='/GuidanceBox'>
          <img src={back} alt='' className='backiconwant' />
        </Link>
        <h2 className='pastpaperstitle'>Want to Guide?</h2>
      </div>
      <div className='wanttoguidecontainer'>
        <form action='' method='POST'>
          <br />
          <label className='courselabel' htmlFor=''>
            Course 1
          </label>
          <br />
          <select className='courseinput' id='' name='course' value={course} onChange={(e) => submit(e.target.value)} placeholder='' required>
            <option value='' disabled selected hidden>
              Select Course 1
            </option>
            {allCourses.map((course) => (
              <option>{course.courseName}</option>
            ))}
          </select>
          <br />
          <input type='checkbox' className='contactcheckbox' name='check' checked={checked} onClick={(e) => chec(e.target.checked)} />
          <label htmlFor='' className='contactcheckboxlabel'>
            I also want to share my phone number
          </label>
          <ToastContainer position='top-center' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </form>
      </div>
      <div className='guidancetablecontainer'>
        {coursedata.length === 0 ? (
          <h3 className='norec'>No record found!</h3>
        ) : (
          <form action='' method='GET'>
            <table className='wanttoguidetable'>
              <tr>
                <th className='coursecol'>Course Title</th>
                <th className='delcol'>Delete</th>
              </tr>
              {coursedata.map((courses) => (
                <tr>
                  <td className='row' name='course'>
                    {courses.course}
                  </td>
                  <td className='row'>
                    <img src={deleteicon} onClick={() => delcourse(courses.course)} alt='' className='delbtn' />
                  </td>
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

export default WantToGuide;
