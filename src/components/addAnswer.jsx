// AddAnswer.jsx

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateanswerinfo } from "../reducers/answerreducer";
import { answerschema } from "../formik/addanswerformik";
import { addAnswer } from "../helpers/A_helper";


export default function AddAnswer({ questionId ,setAns}) {
  const { answerinfo } = useSelector((state) => state.Answerdata.data);
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        answer: "",
      },
      validationSchema: answerschema,
      onSubmit:  (newanswer) => {
        console.log(newanswer)
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
          className="textarea textarea-bordered textarea-lg w-full  max-w-1xl"
        />
        {console.log(values.answer)}
        {touched.answer && errors.answer ? <div>{errors.answer}</div> : ""}
        <button
          type="submit"
          className="btn btn-outline w-25 px-1 ml-72 mt-4 btn-success"
        >
          Post Your Answer
        </button>
      </form>
    </div>
  );
}
