import React, { useState, useEffect } from "react";
import "./../../css/Pretest.css";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Error from "../../utils/Errors";

const PretestQuestions = () => {
  const location = useLocation();
  const courseName = location.state;
  const [preTest, setPreTest] = useState([]);
  const pretest_question = async () => {
    const res = await fetch(`https://backend-three-nu.vercel.app/Pretest/getQuestions/${courseName}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      setPreTest(data.message);
    }
  };
  useEffect(() => {
    pretest_question();
  }, []);
  const [state, setState] = useState([]);
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (state.length !== 0) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].question === name) {
          state.splice(i, 1);
          i = i - 1;
        }
      }
    }
    setState([...state, { question: name, correct_answer: value }]);
  };
  //submit button
  const submitTest = async () => {
    const answer = state;
    const res = await fetch(`https://backend-three-nu.vercel.app/Pretest/verifyAnswer/${courseName}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("S_token"),
      },
      body: JSON.stringify({
        answer: answer,
      }),
    });
    await res.json();
  };

  const SubmitError = async (e) => {
    e.preventDefault();
    Error("please solve all questions");
    return;
  };

  return (
    <>
      <div className='pretestdiv'>
        <h2 className='freezesemestertitle'>Pre-Test</h2>
      </div>
      <div className='Pretest-questions-container'>
        {preTest.map((mcqs) => (
          <div className='question-container'>
            <h3>{mcqs.question}</h3>
            <input type='radio' name={mcqs.question} value={mcqs.option1} onChange={handleChange} className='select' />
            <label htmlFor='' className='choice'>
              {mcqs.option1}
            </label>
            <br />
            <input type='radio' name={mcqs.question} value={mcqs.option2} onChange={handleChange} className='select' />
            <label htmlFor='' className='choice'>
              {mcqs.option2}
            </label>
            <br />
            <input type='radio' name={mcqs.question} value={mcqs.option3} onChange={handleChange} className='select' />
            <label htmlFor='' className='choice'>
              {mcqs.option3}
            </label>
            <br />
            <input type='radio' name={mcqs.question} value={mcqs.option4} onChange={handleChange} className='select' />
            <label htmlFor='' className='choice'>
              {mcqs.option4}
            </label>
          </div>
        ))}
        <div className='submit-btn-container'>
          {state.length === 10 ? (
            <Link to='/AddCourse'>
              {" "}
              <button className='start-btn' onClick={submitTest}>
                Submit
              </button>
            </Link>
          ) : (
            <button className='start-btn' onClick={SubmitError}>
              Submit
            </button>
          )}
        </div>
        <ToastContainer position='top-center' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </>
  );
};

export default PretestQuestions;
