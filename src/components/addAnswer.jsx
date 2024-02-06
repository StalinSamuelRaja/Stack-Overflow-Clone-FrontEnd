import { useState } from "react";
import QuesAnsw from "./ques_answ";

export default function AddAnswer() {
  

  return (
    <div>
      <h2 className="card-title">Answers</h2>
      
      <textarea
        placeholder="your answer"
        className="textarea textarea-bordered textarea-lg w-full  max-w-1xl"
      ></textarea>
      <button className="btn btn-outline w-25 px-1 ml-72 mt-4 btn-success">
        Post Your Answer
      </button>
    </div>
  );
}
 