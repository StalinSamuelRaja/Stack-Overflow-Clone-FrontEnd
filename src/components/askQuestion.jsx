import { useEffect, useState } from "react";
import TopBar from "./topBar";
import { addQuestion } from "../helpers/Q_helper";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { questionschema } from "../formik/addquestionformik";
import { useFormik } from "formik";
import { updatequestioninfo } from "../reducers/questionreducer";
import { InformationCircleIcon, PencilAltIcon, TagIcon } from "@heroicons/react/solid";


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
      onSubmit: async (newquestion) => {
        newquestion = {
          ...newquestion,
          createdBy: localStorage.getItem("sessionemail"),
          createdAt: new Date(),
        };
        const ques = await addQuestion(newquestion);
        dispatch(
          updatequestioninfo([
            ...questioninfo.Quest,
            { ...newquestion, _id: ques.Quest.insertedId },
          ])
        );
        navigate("/ques/all");
      },
    });

  return (
    <div>
      <TopBar />
      <div className="m-8">
        <h1 className="text-2xl font-bold  mb-10">Ask a Public Question</h1>

        <div className="lg:flex lg:space-x-5">
          <div className="lg:w-full lg:max-w-lg mb-6 lg:mb-0">
            <div className="card bg-blue-100 shadow-xl p-5">
              <div className="flex items-center mb-3">
                <InformationCircleIcon className="h-6 w-6 mr-2 text-blue-500" />
                <h2 className="text-lg font-bold mb-2">Steps for Writing a Good Question</h2>
              </div>
              <ol className="list-decimal">
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>Describe what you tried and what you expected to happen.</li>
                <li>Add “tags” which help surface your question to members of the community.</li>
                <li>Review your question and post it to the site.</li>
              </ol>
            </div>
          </div>

          <div className="lg:w-full lg:max-w-lg">
            <form onSubmit={handleSubmit}>
              <div className="card bg-base-100 shadow-xl p-5">
                <h3 className="text-lg font-bold mb-2">Title</h3>
                <input
                  type="text"
                  placeholder="Enter Book Title"
                  name="title"
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="input input-bordered w-full mb-3"
                />
                {touched.title && errors.title && (
                  <div className="text-red-500">{errors.title}</div>
                )}

                <h3 className="text-lg font-bold mb-2">Body</h3>
                <textarea
                  placeholder="Enter question description"
                  name="questionbody"
                  value={values.questionbody}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full mb-3 h-40"
                />
                {touched.questionbody && errors.questionbody && (
                  <div className="text-red-500">{errors.questionbody}</div>
                )}

                <h3 className="text-lg font-bold mb-2">Tags</h3>
                <div className="flex items-center mb-3">
                  <TagIcon className="h-6 w-6 mr-2 text-blue-500" />
                  <input
                    type="text"
                    placeholder="Enter tags"
                    name="tag"
                    value={values.tag}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
                {touched.tag && errors.tag && (
                  <div className="text-red-500">{errors.tag}</div>
                )}

                <button
                  type="submit"
                  className="btn btn-outline btn-success mt-4 w-full"
                >
                  Post Your Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
