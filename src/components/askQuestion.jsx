import { useState } from "react";
import TopBar from "./topBar";
import { addQuestion } from "../helpers/Q_helper";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { questionschema } from "../formik/addquestionformik";
import { useFormik } from "formik";
import { updatequestioninfo } from "../reducers/questionreducer";
import { data } from "autoprefixer";

export default function AskQuestion() {
  let navigate = useNavigate();
  const { questioninfo } = useSelector((state) => state.Questiondata.data);
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        title: "",
        questionbody: "",
        tag: "",
      },
      validationSchema: questionschema,
      onSubmit: (newquestion) => {
        addQuestion(newquestion),
          dispatch(updatequestioninfo([...questioninfo, newquestion]));
          navigate="/ques/all"
      
      },
    });

  return (
    <div>
      <TopBar />
      <div className="m-16">
        <h1 className="text-2xl font-bold">Ask a Public Question</h1>

        <form onSubmit={handleSubmit}>
          <div className=" flex  basis-1/2 border-0  border-2 border-black-500">
            <div className="flex-row w-full card-body border-0 p-3 m-2 rounded-0 size-fit mt-20  opacity-100 text-neutral">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body  flex flex-col">
                  <h3 className="card-title font-bold">Title</h3>
                  <p>
                    Be specific and imagine you’re asking a question to another
                    person
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Book Title "
                    name="title"
                    value={values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="input input-bordered input-sm w-full max-w-1xl"
                  />
                  {touched.title && errors.title ? (
                    <div> {errors.title} </div>
                  ) : (
                    ""
                  )}
                  <h3 className="card-title font-bold">Body</h3>
                  <p>
                    Include all the information someone would need to answer
                    your question
                  </p>
                  <input
                    type="text"
                    placeholder="Enter question dec "
                    name="questionbody"
                    value={values.questionbody}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="textarea textarea-bordered textarea-lg w-full  max-w-1xl"
                  />
                  {touched.questionbody && errors.questionbody ? (
                    <div> {errors.questionbody} </div>
                  ) : (
                    ""
                  )}
                  <h3 className="card-title font-bold">Tags</h3>
                  <p>
                    Add up to 5 tags to describe what your question is about
                  </p>
                  <input
                    type="text"
                    placeholder="Enter tag "
                    name="tag"
                    value={values.tag}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="input input-bordered input-sm w-full max-w-1xl"
                  />
                  {touched.tag && errors.tag ? <div> {errors.tag} </div> : ""}
                 
                    <button
                      type="submit"
                      className="btn btn-outline w-25 px-1 ml-96 mt-4 btn-success"
                     
                    >
                      Post Your Question
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
