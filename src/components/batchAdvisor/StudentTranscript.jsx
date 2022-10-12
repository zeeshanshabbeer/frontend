import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./../../css/StudentTranscript.css";
import leftarrow from "./../../icons/leftarrow.png";
import { useLocation } from "react-router-dom";

const StudentTranscript = (props) => {
  const location = useLocation();
  const registrationId = location.state;
  const [studentdata, setStudentdata] = useState();
  const studentRecord = async () => {
    try {
      const res = await fetch(
        `https://backend-three-nu.vercel.app/StudentInformation/GetStudentData/${registrationId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setStudentdata(data.message);
      // HandleData();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!studentdata) {
      studentRecord();
    }
  }, []);
  const [sem1, setSem1] = useState([]);
  const [sem2, setSem2] = useState([]);
  const [sem3, setSem3] = useState([]);
  const [sem4, setSem4] = useState([]);
  const [sem5, setSem5] = useState([]);
  const [sem6, setSem6] = useState([]);
  const [sem7, setSem7] = useState([]);
  const [sem8, setSem8] = useState([]);
  const [sem9, setSem9] = useState([]);
  const [sem10, setSem10] = useState([]);
  const [sem11, setSem11] = useState([]);
  const [sem12, setSem12] = useState([]);

  if (studentdata && sem1.length === 0) {
    if (studentdata.semester === 1) {
      setSem1(studentdata.Result[0].Semester1);
    } else if (studentdata.semester === 2) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
    } else if (studentdata.semester === 3) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
    } else if (studentdata.semester === 4) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
    } else if (studentdata.semester === 5) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
      setSem5(studentdata.Result[0].Semester5);
    } else if (studentdata.semester === 6) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
      setSem5(studentdata.Result[0].Semester5);
      setSem6(studentdata.Result[0].Semester6);
    } else if (studentdata.semester === 7) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
      setSem5(studentdata.Result[0].Semester5);
      setSem6(studentdata.Result[0].Semester6);
      setSem7(studentdata.Result[0].Semester7);
    } else if (studentdata.semester === 8) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
      setSem5(studentdata.Result[0].Semester5);
      setSem6(studentdata.Result[0].Semester6);
      setSem7(studentdata.Result[0].Semester7);
      setSem8(studentdata.Result[0].Semester8);
    } else if (studentdata.semester === 9) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
      setSem5(studentdata.Result[0].Semester5);
      setSem6(studentdata.Result[0].Semester6);
      setSem7(studentdata.Result[0].Semester7);
      setSem8(studentdata.Result[0].Semester8);
      setSem9(studentdata.Result[0].Semester9);
    } else if (studentdata.semester === 10) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
      setSem5(studentdata.Result[0].Semester5);
      setSem6(studentdata.Result[0].Semester6);
      setSem7(studentdata.Result[0].Semester7);
      setSem8(studentdata.Result[0].Semester8);
      setSem9(studentdata.Result[0].Semester9);
      setSem10(studentdata.Result[0].Semester10);
    } else if (studentdata.semester === 11) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
      setSem5(studentdata.Result[0].Semester5);
      setSem6(studentdata.Result[0].Semester6);
      setSem7(studentdata.Result[0].Semester7);
      setSem8(studentdata.Result[0].Semester8);
      setSem9(studentdata.Result[0].Semester9);
      setSem10(studentdata.Result[0].Semester10);
      setSem11(studentdata.Result[0].Semester11);
    } else if (studentdata.semester === 12) {
      setSem1(studentdata.Result[0].Semester1);
      setSem2(studentdata.Result[0].Semester2);
      setSem3(studentdata.Result[0].Semester3);
      setSem4(studentdata.Result[0].Semester4);
      setSem5(studentdata.Result[0].Semester5);
      setSem6(studentdata.Result[0].Semester6);
      setSem7(studentdata.Result[0].Semester7);
      setSem8(studentdata.Result[0].Semester8);
      setSem9(studentdata.Result[0].Semester9);
      setSem10(studentdata.Result[0].Semester10);
      setSem11(studentdata.Result[0].Semester11);
      setSem12(studentdata.Result[0].Semester12);
    }
  }
  return (
    <Fragment>
      <Link to="/StudentsInformation">
        <img className="arrowIcon" src={leftarrow} alt="" />
      </Link>

      {!studentdata ? (
        ""
      ) : (
        <div className="transcriptContainer">
          <h1 className="transcript">Transcript</h1>
          <h3 className="datalabel">Name: </h3>
          <h3 className="data">{studentdata.name}</h3>
          <br />
          <h3 className="datalabel">Registration No:</h3>
          <h3 className="data">{studentdata.registrationId}</h3>
          <br />
          <h3 className="datalabel">Section:</h3>
          <h3 className="data">{studentdata.section}</h3>
          <br />
          <br />
          {studentdata.semester === 1 ? (
            <div>
              <h3 className="semlabel">Semester1</h3>
              <table className="transcriptTable">
                <tr>
                  <th className="codeCol">Course Code</th>
                  <th className="titleCol">Course Title</th>
                  <th className="creditCol">Credits</th>
                  <th className="GPCol">GP</th>
                </tr>
                {sem1.map((sem) => (
                  <tr>
                    <td>{sem.courseCode}</td>
                    <td>{sem.courseName}</td>
                    <td>{sem.credits}</td>
                    <td>{sem.gp}</td>
                  </tr>
                ))}
              </table>
            </div>
          ) : studentdata.semester === 2 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 3 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 4 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 5 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 5</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem5.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 6 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 5</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem5.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 6</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem6.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 7 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 5</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem5.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 6</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem6.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 7</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem7.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 8 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 5</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem5.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 6</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem6.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 7</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem7.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 8</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem8.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 9 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 5</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem5.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 6</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem6.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 7</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem7.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 8</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem8.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 9</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem9.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 10 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 5</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem5.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 6</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem6.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 7</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem7.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 8</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem8.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 9</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem9.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 10</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem10.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 11 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 5</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem5.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 6</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem6.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 7</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem7.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 8</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem8.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 9</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem9.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 10</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem10.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 11</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem11.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : studentdata.semester === 12 ? (
            <div>
              <div>
                <h3 className="semlabel">Semester 1</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem1.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 2</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem2.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 3</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem3.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 4</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem4.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 5</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem5.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 6</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem6.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 7</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem7.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 8</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem8.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 9</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem9.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 10</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem10.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 11</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem11.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <br />
              <div>
                <h3 className="semlabel">Semester 12</h3>
                <table className="transcriptTable">
                  <tr>
                    <th className="codeCol">Course Code</th>
                    <th className="titleCol">Course Title</th>
                    <th className="creditCol">Credits</th>
                    <th className="GPCol">GP</th>
                  </tr>
                  {sem12.map((sem) => (
                    <tr>
                      <td>{sem.courseCode}</td>
                      <td>{sem.courseName}</td>
                      <td>{sem.credits}</td>
                      <td>{sem.gp}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          ) : (
            ""
          )}

          <br />
          <h3 className="semlabel">CGPA:</h3>
          <h3 className="sem">{studentdata.Result[0].CGPA}</h3>
        </div>
      )}
    </Fragment>
  );
};

export default StudentTranscript;
