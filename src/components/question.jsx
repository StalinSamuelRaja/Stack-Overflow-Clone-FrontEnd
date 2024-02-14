// Questions.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllQuestion } from "../helpers/Q_helper";
import { getAllAnswer } from "../helpers/A_helper";
import { updatequestioninfo } from "../reducers/questionreducer";
import { updateanswerinfo } from "../reducers/answerreducer";

export default function Questions() {
  const { questioninfo } = useSelector((state) => state.Questiondata.data);
  const isLogedin=localStorage.getItem("sessiontoken")
  const dispatch = useDispatch();

  useEffect(() => {
    getAllQuestion().then((data) => dispatch(updatequestioninfo(data)));
  }, [dispatch]);

  return (
    <div className="flex basis-1/2 border-0 border-2 border-black-500">
      <div>
        <div className="flex flex-row  mr-5">
          <div className="flex">
          <h1 className="text-2xl pr-96 mr-24 font-medium">All Questions</h1> 
        </div>
       <div>
       {isLogedin ? (
            <Link className="btn btn-success text-white" to="/ask/ques">
              Ask Question
            </Link>
          ) : (
            <Link className="btn text-xs btn-outline btn-error" to="/login">
              Login to ask Question
            </Link>
          )}
       </div>
          </div>
        {questioninfo &&
          questioninfo.Quest &&
          questioninfo.Quest.map((question) => (
            <div key={question._id} className="mr-5">
              <div className="card flex-row w-full card-body border-0 p-3 m-2 rounded-0 size-fit mt-20  bg-warning-subtle opacity-100 text-neutral">
                {/* <div className="flex flex-col w-1/6">
                  <p>3 votes</p>
                  <p>3 answer</p>
                </div> */}

                <div className="flex flex-col w-5/6">
                  <Link className="text" to={`/view/ques/${question._id}`}>
                    {question.title}
                  </Link>
                  <p>{question.questionbody}</p>
                  <p className="opacity-50 pl-96">{question.tag}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
