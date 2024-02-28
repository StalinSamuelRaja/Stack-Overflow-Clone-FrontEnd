// QuesAnsw.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddAnswer from "./addAnswer";
import { useParams } from "react-router-dom"; // Import useParams
import Answer from "./displayAnswer";
import { getAllQuestion } from "../helpers/Q_helper";
import { getAllAnswer } from "../helpers/A_helper";
import { updatequestioninfo } from "../reducers/questionreducer";
import { updateanswerinfo } from "../reducers/answerreducer";

export default function QuesAnsw() {
  const { questionId } = useParams(); // Get the questionId from route params
  const { answerId } = useParams();
  const { questioninfo } = useSelector((state) => state.Questiondata.data);

  const [ans, setAns] = useState(false);

  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  // Find the question with the matching questionId
  const selectedQuestion = questioninfo?.Quest.find(
    (question) => question._id === questionId
  );

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDisLike = () => {
    setLike(like - 1);
  };

  
  // Render only the selected question
  return (
    <div className="flex basis-1/2 border-0 border-2 border-black-500">
      <div className="flex-row w-full card-body border-0 p-3 m-2 rounded-0 size-fit mt-20 opacity-100 text-neutral">
        {selectedQuestion && (
          <div
            key={selectedQuestion._id}
            className="card w-full bg-base-100 shadow-xl"
          >
            <div className="card-body flex  flex-col">
              <h2 className="card-title">{selectedQuestion.title}</h2>
              <p>{selectedQuestion.questionbody}</p>

              <p><h1 className="font-semibold">Asked by:</h1>{selectedQuestion.createdBy}</p>
              <p>
              <h1 className="font-semibold">Asked on:</h1>
                {new Date(selectedQuestion.createdAt).toLocaleDateString()}
              </p>

              <div className="card-actions justify-end">
                <div className="flex flex-row mr-10">
                  <button className="btn btn-outline btn-primary border-1 btn-xs">
                    {selectedQuestion.tag}
                  </button>
                </div>
              </div>
              <hr />

              <div>
                <Answer answerId={answerId} ans={ans} questionId={questionId} />
              </div>

              <div>
                <AddAnswer questionId={questionId} setAns={setAns} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
  