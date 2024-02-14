// AddAnswer.jsx

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateanswerinfo } from "../reducers/answerreducer";
import { answerschema } from "../formik/addanswerformik";
import { addAnswer } from "../helpers/A_helper";
import { Link } from "react-router-dom";


export default function AddAnswer({ questionId ,setAns}) {
  const { answerinfo } = useSelector((state) => state.Answerdata.data);
  const dispatch = useDispatch();
  const isLogedin=localStorage.getItem("sessiontoken")
  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        answer: "",
      },
      validationSchema: answerschema,
      onSubmit:  (newanswer) => {
        newanswer={...newanswer,createdBy:localStorage.getItem("sessionemail"),createdAt:new Date()}
        try {
           addAnswer(questionId, newanswer,setAns); // Pass questionId along with newanswer
          // Make sure answerinfo is initialized properly and is an array
          const updatedAnswerinfo = Array.isArray(answerinfo) ? [...answerinfo, newanswer] : [newanswer];
          dispatch(updateanswerinfo(updatedAnswerinfo));
        } catch (error) {
          console.error("Error adding answer:", error);
        }
      },
      
               
    });

  return (
    <div>
      <h2 className="card-title">Answers</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter answer description"
          name="answer"
          value={values.answer}
          onBlur={handleBlur}
          onChange={handleChange}
          className="textarea textarea-bordered textarea-lg w-full mb-4 max-w-1xl"
        />
        
        {touched.answer && errors.answer ? <div>{errors.answer}</div> : ""}
      
        {isLogedin ? (
            <button
            type="submit"
            className="btn btn-outline w-25 px-1  ml-72 mt-4 btn-success"
          >
            Post Your Answer
          </button>
          ) : (
            <Link className="btn text-xs btn-outline btn-error" to="/login">
              Login to Answer
            </Link>
          )}

        

      </form>
    </div>
  );
}
