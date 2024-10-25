import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllQuestion } from "../helpers/Q_helper";
import { updatequestioninfo } from "../reducers/questionreducer";

export default function Questions() {
  const { questioninfo } = useSelector((state) => state.Questiondata.data);
  const isLoggedin = localStorage.getItem("sessiontoken");
  const dispatch = useDispatch();

  useEffect(() => {
    getAllQuestion().then((data) => dispatch(updatequestioninfo(data)));
  }, [dispatch]);

  return (
    <div className="flex flex-col  lg:flex-row lg:space-x-5 items-start">
      <div className="lg:w-2/3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-medium">All Questions</h1>
          {isLoggedin ? (
            <Link className="btn btn-success text-white" to="/ask/ques">
              Ask Question
            </Link>
          ) : (
            <Link className="btn text-xs btn-outline btn-error" to="/login">
              Login to ask Question
            </Link>
          )}
        </div>
        {questioninfo &&
          questioninfo.Quest &&
          questioninfo.Quest.map((question) => (
            <div key={question._id} className="mb-5">
              <div className="card bg-[#AFE2F3] text-neutral">
                <div className="card-body">
                  <Link className="text font-bold" to={`/view/ques/${question._id}`}>
                    {question.title}
                  </Link>
                  <p>{question.questionbody}</p>
                  <p className="opacity-50">{question.tag}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="lg:w-1/3">
        {/* Add any additional components or content for the sidebar here */}
      </div>
    </div>
  );
}
