import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { showAnswer } from "../helpers/A_helper";

export default function Answer({ ans,questionId }) {
  const[ansStore,setAnsStore]=useState([]);
  useEffect(() => {
   const ansvalue= showAnswer(questionId)
    setAnsStore(ansvalue)
  }, [ans]);

  return (
    <div>
       {ansStore && ansStore.map((answer) => (
      <div>
        <h1 className="card-title">Answer</h1>
          <p>{answer.answer}</p>
        <hr />
      </div>
       ))}
    </div>
  );
}
