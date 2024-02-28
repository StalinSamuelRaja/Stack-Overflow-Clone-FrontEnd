import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateanswerinfo } from "../reducers/answerreducer";
import { answerschema } from "../formik/addanswerformik";
import { addAnswer, deleteAnswer } from "../helpers/A_helper"; // Import deleteAnswer function
import { Link } from "react-router-dom";

export default function AddAnswer({ questionId, setAns }) {
  const { answerinfo } = useSelector((state) => state.Answerdata.data);
  const dispatch = useDispatch();
  const isLogedin = localStorage.getItem("sessiontoken");

  const { values, handleChange, handleSubmit, errors, handleBlur, touched, setValues } =
    useFormik({
      initialValues: {
        answer: "",
      },
      validationSchema: answerschema,
      onSubmit: async (newanswer) => {
        newanswer = {
          ...newanswer,
          createdBy: localStorage.getItem("sessionemail"),
          createdAt: new Date(),
        };
        try {
          await addAnswer(questionId, newanswer, setAns); // Wait for addAnswer to complete
          // Make sure answerinfo is initialized properly and is an array
          const updatedAnswerinfo = Array.isArray(answerinfo)
            ? [...answerinfo, newanswer]
            : [newanswer];
          dispatch(updateanswerinfo(updatedAnswerinfo));
          // Clear input field after successful submission
          setValues({ answer: "" });
        } catch (error) {
          console.error("Error adding answer:", error);
        }
      },
    });

  // Function to handle deletion of an answer
  const handleDelete = async (id) => {
    try {
      await deleteAnswer(id);
      // Re-fetch the answers after deletion
      setAns(await showAnswer(questionId));
    } catch (error) {
      console.error("Error deleting answer:", error);
    }
  };

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
        {touched.answer && errors.answer && <div>{errors.answer}</div>}
        <div className="flex justify-end">
          {isLogedin ? (
            <button type="submit" className="btn btn-outline btn-success">
              Post Your Answer
            </button>
          ) : (
            <Link className="btn text-xs btn-outline btn-error" to="/login">
              Login to Answer
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}
